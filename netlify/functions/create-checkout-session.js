const products = {
  "stone-mist": ["Stone Mist", 3800],
  "sculpt-stick": ["Sculpt Stick", 3400],
  "stone-blush": ["Stone Blush", 4200],
  "aura-gloss": ["Aura Gloss", 2800],
  "light-veil": ["Light Veil", 4600],
  "pearl-balm": ["Pearl Balm", 3600],
  "petal-flush": ["Petal Flush", 3200],
  "bloom-lip": ["Bloom Lip", 3000],
  "silk-cream": ["Silk Cream", 4400],
  "leaf-serum": ["Leaf Serum", 4800],
  "green-glass": ["Green Glass", 4000],
  "earth-cleanse": ["Earth Cleanse", 3400],
};

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return json(200, {
      mode: "local-test",
      message: "Stripe test key is not configured yet.",
    });
  }

  const { cart = [] } = JSON.parse(event.body || "{}");
  const lineItems = cart
    .map((slug) => products[slug])
    .filter(Boolean)
    .map(([name, amount]) => ({
      price_data: {
        currency: "usd",
        product_data: { name },
        unit_amount: amount,
      },
      quantity: 1,
    }));

  if (!lineItems.length) {
    return json(400, { error: "Cart is empty." });
  }

  const origin = event.headers.origin || process.env.URL || "https://gleeful-tanuki-979bfa.netlify.app";
  const params = new URLSearchParams({
    mode: "payment",
    success_url: `${origin}/#/payment-success`,
    cancel_url: `${origin}/#/payment-cancelled`,
  });

  lineItems.forEach((item, index) => {
    params.append(`line_items[${index}][quantity]`, String(item.quantity));
    params.append(`line_items[${index}][price_data][currency]`, item.price_data.currency);
    params.append(`line_items[${index}][price_data][unit_amount]`, String(item.price_data.unit_amount));
    params.append(`line_items[${index}][price_data][product_data][name]`, item.price_data.product_data.name);
  });

  const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  const session = await response.json();
  if (!response.ok) {
    return json(response.status, { error: session.error?.message || "Stripe checkout failed." });
  }

  return json(200, { url: session.url });
};

function json(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}
