const collections = {
  stoneberry: {
    name: "Stoneberry",
    slug: "stoneberry",
    status: "available",
    mood: "Travertine, rose gold, architectural luxury.",
    visual: "visual-stone",
    accent: "#8d705f",
    story:
      "Nature carved in stone. Warm mineral shades, sculptural packaging, and an editorial finish inspired by travertine architecture.",
    tags: ["travertine", "stone", "rose gold", "warm beige"],
  },
  pastel: {
    name: "Pastel Lights",
    slug: "pastel",
    status: "coming soon",
    mood: "Soft, dreamy, airy, luminous.",
    visual: "visual-pastel",
    accent: "#d8cceb",
    story:
      "Semi-gloss textures, frosted glass, and pearlescent lavender-blush light. Soft without becoming flat or plastic.",
    tags: ["lavender", "blush", "frosted glass", "pearlescent"],
  },
  bloom: {
    name: "Soft Bloom",
    slug: "bloom",
    status: "coming soon",
    mood: "Floral, romantic, gentle.",
    visual: "visual-bloom",
    accent: "#d7aaa7",
    story:
      "Petal-soft color, elegant warm pinks, and tender textures made for a romantic everyday ritual.",
    tags: ["petals", "warm pink", "romantic", "gentle"],
  },
  eco: {
    name: "EcoSoul",
    slug: "eco",
    status: "coming soon",
    mood: "Nature, sustainability, clean luxury.",
    visual: "visual-eco",
    accent: "#aeb9a5",
    story:
      "Sage green glass, organic forms, and clean conscious formulas with a calm luxury point of view.",
    tags: ["sage", "glass", "organic", "sustainable"],
  },
};

const products = [
  product("stone-mist", "Stone Mist", "stoneberry", "Hydrating setting mist", "$38", "A mineral water veil that sets makeup with a soft satin finish.", "#b58b70"),
  product("face-oil", "Face Oil", "stoneberry", "Nourishing elixir", "$58", "A sculptural metallic face oil that nourishes skin with a soft Stoneberry glow.", "#c5a085"),
  product("sculpt-stick", "Sculpt Stick", "stoneberry", "Cream contour stick", "$34", "A rose-gold cream contour that melts into skin without harsh edges.", "#8d705f"),
  product("soft-flush", "Stone Bloom", "stoneberry", "Cream blush stick", "$34", "A creamy warm blush stick for soft carved color on cheeks.", "#b98272"),
  product("lip-sculpt", "Lip Sculpt", "stoneberry", "Sculpting lipstick", "$36", "A warm berry-rose lipstick with satin comfort and a softly carved Stoneberry finish.", "#9f5f5a"),
  product("stone-blush", "Stone Blush", "stoneberry", "Pressed mineral blush", "$42", "Warm pressed color with a carved-stone compact and soft-focus payoff.", "#ad7a70"),
  product("lash-stone", "Lash Stone", "stoneberry", "Lengthening mascara", "$32", "A defining mascara for lifted lashes with a clean sculpted finish.", "#6c5a4d"),
  product("aura-gloss", "Aura Gloss", "pastel", "High-shine lip gloss", "$28", "A pearly lavender-blush shine with a cushioned, non-sticky feel.", "#d8cceb"),
  product("light-veil", "Light Veil", "pastel", "Soft radiance serum", "$46", "A semi-gloss skin tint that catches light like frosted glass.", "#efd4dc"),
  product("pearl-balm", "Pearl Balm", "pastel", "Radiant highlight balm", "$36", "Creamy pearl highlight for luminous, not metallic, reflection.", "#efe4f5"),
  product("petal-flush", "Petal Flush", "bloom", "Cream blush", "$32", "Romantic petal color that taps on with gentle warmth.", "#d7aaa7"),
  product("bloom-lip", "Bloom Lip", "bloom", "Soft matte lipstick", "$30", "A blurred rose lip with elegant comfort and no dryness.", "#c9898d"),
  product("silk-cream", "Silk Cream", "bloom", "Moisture primer", "$44", "A silky prep cream with a soft floral finish.", "#f1c8c4"),
  product("leaf-serum", "Leaf Serum", "eco", "Sage balancing serum", "$48", "A clean, lightweight serum for calm, balanced skin.", "#aeb9a5"),
  product("green-glass", "Green Glass", "eco", "Dew gel cream", "$40", "A fresh gel cream with smooth glassy hydration.", "#c8d1bf"),
  product("earth-cleanse", "Earth Cleanse", "eco", "Cream cleanser", "$34", "A soft, non-stripping cleanse with a grounded botanical feel.", "#98a58e"),
];

const PRODUCT_IMAGES = {
  "stone-mist": "data:image/jpeg;base64,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",
  "sculpt-stick": "data:image/jpeg;base64,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",
  "lip-sculpt": "data:image/jpeg;base64,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",
  "stone-blush": "data:image/jpeg;base64,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",
  "lash-stone": "data:image/jpeg;base64,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",
};

const availableProducts = products.filter((item) => collections[item.collection].status === "available");

const LANGUAGES = ["en", "ru", "hy"];
const languageKey = "iwc-language";
const TRANSLATIONS = {
  en: {
    "nav.menu": "menu",
    "nav.shop": "Shop",
    "nav.collections": "Collections",
    "nav.ingredients": "Ingredients",
    "nav.journal": "Journal",
    "nav.about": "About",
    "nav.stores": "Stores",
    "actions.search": "Search",
    "actions.wishlist": "Wishlist",
    "actions.cart": "Cart",
    "actions.account": "Account",
    "actions.close": "Close",
    "actions.checkout": "Checkout",
    "actions.ok": "OK",
    "actions.notNow": "Not now",
    "actions.keepShopping": "Keep shopping",
    "actions.shopStoneberry": "Shop Stoneberry",
    "actions.searchProducts": "Search products",
    "actions.open": "open",
    "actions.openCart": "Open cart",
    "actions.backCollections": "Back to collections",
    "actions.notify": "Notify me when it opens",
    "actions.completeTest": "Complete test order",
    "footer.about": "About us",
    "footer.impact": "Our impact",
    "search.label": "Find products and collections",
    "search.placeholder": "Try Stone Mist or EcoSoul",
    "search.empty": "No soft match yet. Try Stoneberry, gloss, or serum.",
    "cart.title": "Your cart",
    "cart.empty": "Your cart is empty.",
    "wishlist.empty": "Your wishlist is empty.",
    "account.eyebrow": "Members studio",
    "account.title": "Soft rituals, saved.",
    "account.body": "Create a profile to save wishlists, track orders, and preview collection drops.",
    "account.create": "Create account",
    "home.eyebrow": "Luxury beauty by nature and design",
    "home.title": "Gohar's Lab",
    "home.lead": "Luxury beauty inspired by nature, design, and self-expression.",
    "home.support": "We set aside money to support trusted groups helping kids, communities, and nature.",
    "home.collectionsEyebrow": "Collections preview",
    "home.collectionsTitle": "Stoneberry is open. More moods soon.",
    "home.productsEyebrow": "Editorial products",
    "home.productsTitle": "Campaign beauty, made usable.",
    "home.cleanTitle": "Clean ingredients",
    "home.cleanBody": "Thoughtfully chosen formulas with a soft skin finish.",
    "home.crueltyTitle": "Cruelty free",
    "home.crueltyBody": "Never tested on animals.",
    "home.veganTitle": "Vegan formula",
    "home.veganBody": "100% vegan across the launch edit.",
    "home.ecoTitle": "Eco conscious",
    "home.ecoBody": "Sustainable choices for a better tomorrow.",
    "status.available": "Available now",
    "status.openNow": "Open now",
    "status.comingSoon": "Coming soon",
    "status.availableEdit": "Available edit.",
    "status.launchingSoon": "Launching soon.",
    "collections.eyebrow": "Collections",
    "collections.title": "Stoneberry opens first.",
    "collections.body": "Stoneberry is available now. Pastel Lights, Soft Bloom, and EcoSoul are preview worlds you can explore before they launch.",
    "shop.eyebrow": "Shop",
    "shop.title": "Stoneberry shop.",
    "shop.body": "The first collection is open now. The other worlds are coming soon and will be added when the launch is ready.",
    "product.addCart": "Add to cart",
    "product.saveWishlist": "Save to wishlist",
    "product.ingredients": "Ingredients",
    "product.benefits": "Benefits",
    "product.feelTitle": "How it feels",
    "product.feelBody": "Soft, smooth, never heavy. Designed for a luxury everyday ritual.",
    "product.reviews": "Reviews",
    "product.reviewsTitle": "Loved softly.",
    "product.related": "Related products",
    "product.relatedTitle": "Complete the mood.",
    "coming.preview": "Preview status",
    "coming.title": "Coming soon.",
    "coming.body": "{collection} is being prepared as a future collection. You can view the mood now, but products are not available to buy yet.",
    "coming.launch": "Launch note",
    "coming.noCheckout": "No checkout yet.",
    "coming.noCheckoutBody": "When this collection opens, product pages and cart actions will be added here.",
    "coming.firstDrop": "First live drop",
    "coming.shopStoneberry": "Shop Stoneberry.",
    "coming.shopStoneberryBody": "Stoneberry is the first official collection and the only one currently available.",
    "actions.openStoneberry": "Open Stoneberry",
    "panel.remove": "Remove",
    "panel.add": "Add",
    "panel.open": "Open",
    "toast.addedCart": "Added to cart",
    "toast.savedWishlist": "Saved to wishlist",
    "toast.addBeforeCheckout": "Add a product before checkout",
    "toast.openingCheckout": "Opening test checkout",
    "toast.cartEmpty": "Cart is empty",
    "toast.language": "Language: {language}",
    "toast.comingSoon": "{collection} is coming soon",
    "checkout.eyebrow": "Stripe test mode preview",
    "checkout.title": "Test checkout.",
    "checkout.body": "This is a safe test drive. No real money moves and no real card details are collected here.",
    "checkout.later": "Later with Stripe",
    "checkout.laterBody": "When a parent-owned Stripe account is connected, this button will redirect to Stripe Checkout in test mode first, then live mode when you are ready.",
    "checkout.summary": "Order summary",
    "checkout.empty": "Your cart is empty. Add a product to try checkout.",
    "checkout.total": "Total",
    "checkout.note": "Test mode only. Shipping, tax, and real payment authorization are not active yet.",
    "payment.successEyebrow": "Test order complete",
    "payment.cancelEyebrow": "Checkout cancelled",
    "payment.successTitle": "Payment test passed.",
    "payment.cancelTitle": "No payment was made.",
    "payment.successBody": "Your test checkout flow is working. This did not charge real money.",
    "payment.cancelBody": "The checkout was cancelled safely. Your cart is still available.",
    "payment.shopProducts": "Shop products",
    "payment.orderLine": "Test order {id} / {count} item(s) / ${total}",
    "info.ingredients.eyebrow": "Ingredients",
    "info.ingredients.title": "Clean, considered, and sensorial.",
    "info.ingredients.body": "We use mineral pigments, botanical oils, gentle waxes, and skin-friendly actives selected for feel as much as performance.",
    "info.journal.eyebrow": "Journal",
    "info.journal.title": "Beauty as an object, a ritual, and a mood.",
    "info.journal.body": "Explore campaign notes, collection inspiration, and soft routines from the Gohar's Lab studio.",
    "info.about.eyebrow": "About",
    "info.about.title": "Luxury beauty with a natural point of view.",
    "info.about.body": "Gohar's Lab blends nature, design, and self-expression into products that look beautiful before they ever touch skin.",
    "info.stores.eyebrow": "Stores",
    "info.stores.title": "Future spaces for Gohar's Lab.",
    "info.stores.body": "Our first concept spaces will probably be in Moscow, Russia and Armenia as the brand grows.",
    "info.impact.eyebrow": "Our impact",
    "info.impact.title": "Saving to support good work.",
    "info.impact.body": "As the brand grows, we set aside money so we can help trusted organizations when they ask for support, especially groups helping kids, communities, and nature.",
    "info.ctaCollections": "Shop collections",
    "article.ingredients.1.title": "Mineral pigments",
    "article.ingredients.1.body": "Color is built from soft mineral tones chosen for blend, payoff, and a natural skin finish.",
    "article.ingredients.2.title": "Botanical comfort",
    "article.ingredients.2.body": "Squalane, plant waxes, and vitamin E help formulas feel smooth instead of heavy.",
    "article.ingredients.3.title": "Thoughtful exclusions",
    "article.ingredients.3.body": "No harsh scent story, no unnecessary fillers, and no animal testing across the launch edit.",
    "article.journal.1.title": "Stoneberry notes",
    "article.journal.1.body": "The first collection studies travertine, rose-gold metal, and sculptural objects in warm light.",
    "article.journal.2.title": "Soft ritual",
    "article.journal.2.body": "A five-minute routine for skin prep, color, and lip shine that still feels editorial.",
    "article.journal.3.title": "Studio palette",
    "article.journal.3.body": "How ivory, blush, lavender, sage, and rose gold became the visual language of Gohar's Lab.",
    "article.about.1.title": "Design first",
    "article.about.1.body": "The brand treats every product like an object: useful, tactile, and beautiful on a shelf.",
    "article.about.2.title": "Nature informed",
    "article.about.2.body": "Textures come from stone, petals, glass, water, and organic forms rather than trend noise.",
    "article.about.3.title": "Built slowly",
    "article.about.3.body": "Stoneberry opens first so each future collection can launch with its own complete world.",
    "article.stores.1.title": "Moscow concept space",
    "article.stores.1.body": "A warm stone display space for Stoneberry, soft testing, and shade guidance is planned as a future direction in Moscow.",
    "article.stores.2.title": "Armenia preview space",
    "article.stores.2.body": "An intimate preview space for collection testing, gifting, and soft beauty rituals will probably be part of the Armenia plan.",
    "article.stores.3.title": "Growing toward stores",
    "article.stores.3.body": "Gohar's Lab begins online, then grows toward selected physical spaces when the brand is ready.",
    "article.impact.1.title": "Support fund",
    "article.impact.1.body": "Money is saved over time so the brand can support trusted organizations when the right opportunity appears.",
    "article.impact.2.title": "For kids and communities",
    "article.impact.2.body": "The goal is to help groups doing real work for children, families, local communities, and nature.",
    "article.impact.3.title": "Careful giving",
    "article.impact.3.body": "Support will be shared thoughtfully, with updates later so customers can see where the saved money goes.",
  },
  ru: {
    "nav.menu": "меню",
    "nav.shop": "Магазин",
    "nav.collections": "Коллекции",
    "nav.ingredients": "Ингредиенты",
    "nav.journal": "Журнал",
    "nav.about": "О нас",
    "nav.stores": "Магазины",
    "actions.search": "Поиск",
    "actions.wishlist": "Избранное",
    "actions.cart": "Корзина",
    "actions.account": "Аккаунт",
    "actions.close": "Закрыть",
    "actions.checkout": "Оплатить",
    "actions.ok": "OK",
    "actions.notNow": "Не сейчас",
    "actions.keepShopping": "Продолжить покупки",
    "actions.shopStoneberry": "Купить Stoneberry",
    "actions.searchProducts": "Искать продукты",
    "actions.open": "открыть",
    "actions.openCart": "Открыть корзину",
    "actions.backCollections": "Назад к коллекциям",
    "actions.notify": "Сообщить мне о запуске",
    "actions.completeTest": "Завершить тестовый заказ",
    "footer.about": "О нас",
    "footer.impact": "Наш вклад",
    "search.label": "Найдите продукты и коллекции",
    "search.placeholder": "Попробуйте Stone Mist или EcoSoul",
    "search.empty": "Пока нет совпадений. Попробуйте Stoneberry, gloss или serum.",
    "cart.title": "Ваша корзина",
    "cart.empty": "Ваша корзина пуста.",
    "wishlist.empty": "Ваш список избранного пуст.",
    "account.eyebrow": "Студия участников",
    "account.title": "Мягкие ритуалы сохранены.",
    "account.body": "Создайте профиль, чтобы сохранять избранное, отслеживать заказы и смотреть новые коллекции заранее.",
    "account.create": "Создать аккаунт",
    "home.eyebrow": "Люксовая красота от природы и дизайна",
    "home.title": "Gohar's Lab",
    "home.lead": "Люксовая косметика, вдохновленная природой, дизайном и самовыражением.",
    "home.support": "Мы откладываем деньги, чтобы поддерживать надежные группы, помогающие детям, сообществам и природе.",
    "home.collectionsEyebrow": "Превью коллекций",
    "home.collectionsTitle": "Stoneberry уже открыт. Новые настроения скоро.",
    "home.productsEyebrow": "Редакционные продукты",
    "home.productsTitle": "Кампанейная красота, созданная для жизни.",
    "home.cleanTitle": "Чистые ингредиенты",
    "home.cleanBody": "Продуманные формулы с мягким финишем на коже.",
    "home.crueltyTitle": "Без жестокости",
    "home.crueltyBody": "Никогда не тестируется на животных.",
    "home.veganTitle": "Веганская формула",
    "home.veganBody": "100% веганский состав во всей стартовой линии.",
    "home.ecoTitle": "Эко-сознательность",
    "home.ecoBody": "Устойчивые решения для лучшего завтра.",
    "status.available": "Доступно сейчас",
    "status.openNow": "Открыто сейчас",
    "status.comingSoon": "Скоро",
    "status.availableEdit": "Доступная подборка.",
    "status.launchingSoon": "Скоро запуск.",
    "collections.eyebrow": "Коллекции",
    "collections.title": "Stoneberry запускается первым.",
    "collections.body": "Stoneberry доступен сейчас. Pastel Lights, Soft Bloom и EcoSoul — это будущие миры, которые можно посмотреть до запуска.",
    "shop.eyebrow": "Магазин",
    "shop.title": "Магазин Stoneberry.",
    "shop.body": "Первая коллекция уже открыта. Остальные миры появятся позже, когда запуск будет готов.",
    "product.addCart": "Добавить в корзину",
    "product.saveWishlist": "Сохранить в избранное",
    "product.ingredients": "Ингредиенты",
    "product.benefits": "Преимущества",
    "product.feelTitle": "Как ощущается",
    "product.feelBody": "Мягко, гладко и совсем не тяжело. Создано для люксового ежедневного ритуала.",
    "product.reviews": "Отзывы",
    "product.reviewsTitle": "Нежно любимое.",
    "product.related": "Похожие продукты",
    "product.relatedTitle": "Завершите настроение.",
    "coming.preview": "Статус превью",
    "coming.title": "Скоро.",
    "coming.body": "{collection} готовится как будущая коллекция. Настроение уже можно посмотреть, но продукты пока недоступны для покупки.",
    "coming.launch": "Заметка о запуске",
    "coming.noCheckout": "Покупки пока нет.",
    "coming.noCheckoutBody": "Когда коллекция откроется, здесь появятся страницы продуктов и действия корзины.",
    "coming.firstDrop": "Первый запуск",
    "coming.shopStoneberry": "Купить Stoneberry.",
    "coming.shopStoneberryBody": "Stoneberry — первая официальная коллекция и единственная, доступная сейчас.",
    "actions.openStoneberry": "Открыть Stoneberry",
    "panel.remove": "Удалить",
    "panel.add": "Добавить",
    "panel.open": "Открыть",
    "toast.addedCart": "Добавлено в корзину",
    "toast.savedWishlist": "Сохранено в избранное",
    "toast.addBeforeCheckout": "Добавьте продукт перед оплатой",
    "toast.openingCheckout": "Открываем тестовую оплату",
    "toast.cartEmpty": "Корзина пуста",
    "toast.language": "Язык: {language}",
    "toast.comingSoon": "{collection} скоро появится",
    "checkout.eyebrow": "Превью тестового режима Stripe",
    "checkout.title": "Тестовая оплата.",
    "checkout.body": "Это безопасный тест. Реальные деньги не списываются, и настоящие данные карты здесь не собираются.",
    "checkout.later": "Позже со Stripe",
    "checkout.laterBody": "Когда будет подключен Stripe-аккаунт родителя, эта кнопка сначала будет вести в Stripe Checkout в тестовом режиме, а затем в live-режим, когда вы будете готовы.",
    "checkout.summary": "Сводка заказа",
    "checkout.empty": "Ваша корзина пуста. Добавьте продукт, чтобы попробовать оплату.",
    "checkout.total": "Итого",
    "checkout.note": "Только тестовый режим. Доставка, налоги и реальное подтверждение оплаты пока не активны.",
    "payment.successEyebrow": "Тестовый заказ завершен",
    "payment.cancelEyebrow": "Оплата отменена",
    "payment.successTitle": "Тест оплаты пройден.",
    "payment.cancelTitle": "Оплата не была выполнена.",
    "payment.successBody": "Тестовый процесс оплаты работает. Реальные деньги не списаны.",
    "payment.cancelBody": "Оплата безопасно отменена. Ваша корзина сохранена.",
    "payment.shopProducts": "Смотреть продукты",
    "payment.orderLine": "Тестовый заказ {id} / товаров: {count} / ${total}",
    "info.ingredients.eyebrow": "Ингредиенты",
    "info.ingredients.title": "Чисто, продуманно и чувственно.",
    "info.ingredients.body": "Мы используем минеральные пигменты, ботанические масла, мягкие воски и активы, дружественные коже, выбранные не только за эффект, но и за ощущение.",
    "info.journal.eyebrow": "Журнал",
    "info.journal.title": "Красота как объект, ритуал и настроение.",
    "info.journal.body": "Читайте заметки кампаний, вдохновение коллекций и мягкие рутины из студии Gohar's Lab.",
    "info.about.eyebrow": "О нас",
    "info.about.title": "Люксовая красота с природной точкой зрения.",
    "info.about.body": "Gohar's Lab соединяет природу, дизайн и самовыражение в продуктах, которые выглядят красиво еще до прикосновения к коже.",
    "info.stores.eyebrow": "Магазины",
    "info.stores.title": "Будущие пространства для Gohar's Lab.",
    "info.stores.body": "Наши первые концепт-пространства, скорее всего, будут в Москве, России и Армении по мере роста бренда.",
    "info.impact.eyebrow": "Наш вклад",
    "info.impact.title": "Копим, чтобы поддерживать добрые дела.",
    "info.impact.body": "По мере роста бренда мы откладываем деньги, чтобы помогать надежным организациям, когда они обращаются за поддержкой, особенно группам, которые помогают детям, сообществам и природе.",
    "info.ctaCollections": "Смотреть коллекции",
    "article.ingredients.1.title": "Минеральные пигменты",
    "article.ingredients.1.body": "Цвет строится на мягких минеральных тонах, выбранных за растушевку, отдачу и естественный финиш кожи.",
    "article.ingredients.2.title": "Ботанический комфорт",
    "article.ingredients.2.body": "Сквалан, растительные воски и витамин E помогают формулам ощущаться гладкими, а не тяжелыми.",
    "article.ingredients.3.title": "Продуманные исключения",
    "article.ingredients.3.body": "Без резкой ароматической истории, лишних наполнителей и тестирования на животных во всей стартовой линии.",
    "article.journal.1.title": "Заметки Stoneberry",
    "article.journal.1.body": "Первая коллекция изучает травертин, розово-золотой металл и скульптурные объекты в теплом свете.",
    "article.journal.2.title": "Мягкий ритуал",
    "article.journal.2.body": "Пятиминутная рутина для подготовки кожи, цвета и блеска губ, которая все еще ощущается editorial.",
    "article.journal.3.title": "Палитра студии",
    "article.journal.3.body": "Как ivory, blush, lavender, sage и rose gold стали визуальным языком Gohar's Lab.",
    "article.about.1.title": "Сначала дизайн",
    "article.about.1.body": "Бренд относится к каждому продукту как к объекту: полезному, тактильному и красивому на полке.",
    "article.about.2.title": "Вдохновлено природой",
    "article.about.2.body": "Текстуры приходят из камня, лепестков, стекла, воды и органических форм, а не из шумных трендов.",
    "article.about.3.title": "Создается постепенно",
    "article.about.3.body": "Stoneberry открывается первым, чтобы каждая будущая коллекция могла запуститься со своим цельным миром.",
    "article.stores.1.title": "Концепт-пространство в Москве",
    "article.stores.1.body": "Теплое каменное пространство для Stoneberry, мягкого тестирования и подбора оттенков планируется как будущее направление в Москве.",
    "article.stores.2.title": "Превью-пространство в Армении",
    "article.stores.2.body": "Камерное пространство для тестирования коллекций, подарков и мягких beauty-ритуалов, скорее всего, станет частью плана для Армении.",
    "article.stores.3.title": "Рост к физическим пространствам",
    "article.stores.3.body": "Gohar's Lab начинается онлайн, а затем будет расти к избранным физическим пространствам, когда бренд будет готов.",
    "article.impact.1.title": "Фонд поддержки",
    "article.impact.1.body": "Деньги копятся со временем, чтобы бренд мог поддержать надежные организации, когда появится правильная возможность.",
    "article.impact.2.title": "Для детей и сообществ",
    "article.impact.2.body": "Цель — помогать группам, которые реально работают для детей, семей, местных сообществ и природы.",
    "article.impact.3.title": "Вдумчивая помощь",
    "article.impact.3.body": "Поддержка будет распределяться внимательно, а позже появятся обновления, чтобы клиенты видели, куда идут накопленные деньги.",
  },
  hy: {
    "nav.menu": "մենյու",
    "nav.shop": "Խանութ",
    "nav.collections": "Հավաքածուներ",
    "nav.ingredients": "Բաղադրիչներ",
    "nav.journal": "Ամսագիր",
    "nav.about": "Մեր մասին",
    "nav.stores": "Խանութներ",
    "actions.search": "Որոնում",
    "actions.wishlist": "Ցանկալի",
    "actions.cart": "Զամբյուղ",
    "actions.account": "Հաշիվ",
    "actions.close": "Փակել",
    "actions.checkout": "Վճարել",
    "actions.ok": "OK",
    "actions.notNow": "Ոչ հիմա",
    "actions.keepShopping": "Շարունակել գնումները",
    "actions.shopStoneberry": "Գնել Stoneberry",
    "actions.searchProducts": "Որոնել ապրանքներ",
    "actions.open": "բացել",
    "actions.openCart": "Բացել զամբյուղը",
    "actions.backCollections": "Վերադառնալ հավաքածուներին",
    "actions.notify": "Տեղեկացնել բացվելիս",
    "actions.completeTest": "Ավարտել փորձնական պատվերը",
    "footer.about": "Մեր մասին",
    "footer.impact": "Մեր ազդեցությունը",
    "search.label": "Գտեք ապրանքներ և հավաքածուներ",
    "search.placeholder": "Փորձեք Stone Mist կամ EcoSoul",
    "search.empty": "Դեռ համապատասխան բան չկա։ Փորձեք Stoneberry, gloss կամ serum։",
    "cart.title": "Ձեր զամբյուղը",
    "cart.empty": "Ձեր զամբյուղը դատարկ է։",
    "wishlist.empty": "Ձեր ցանկալին դատարկ է։",
    "account.eyebrow": "Անդամների ստուդիա",
    "account.title": "Մեղմ ռիտուալները պահված են։",
    "account.body": "Ստեղծեք պրոֆիլ՝ ցանկալին պահելու, պատվերներին հետևելու և նոր հավաքածուները նախապես տեսնելու համար։",
    "account.create": "Ստեղծել հաշիվ",
    "home.eyebrow": "Լյուքս գեղեցկություն՝ բնությունից և դիզայնից",
    "home.title": "Gohar's Lab",
    "home.lead": "Լյուքս գեղեցկություն՝ ոգեշնչված բնությամբ, դիզայնով և ինքնարտահայտմամբ։",
    "home.support": "Մենք գումար ենք պահում՝ աջակցելու վստահելի խմբերին, որոնք օգնում են երեխաներին, համայնքներին և բնությանը։",
    "home.collectionsEyebrow": "Հավաքածուների նախադիտում",
    "home.collectionsTitle": "Stoneberry-ն արդեն բաց է։ Նոր տրամադրություններ՝ շուտով։",
    "home.productsEyebrow": "Խմբագրական ապրանքներ",
    "home.productsTitle": "Քարոզարշավային գեղեցկություն՝ ստեղծված օգտագործելու համար։",
    "home.cleanTitle": "Մաքուր բաղադրիչներ",
    "home.cleanBody": "Խնամքով ընտրված բանաձևեր՝ մաշկի մեղմ ավարտով։",
    "home.crueltyTitle": "Առանց դաժանության",
    "home.crueltyBody": "Երբեք չի փորձարկվում կենդանիների վրա։",
    "home.veganTitle": "Վեգան բանաձև",
    "home.veganBody": "100% վեգան ամբողջ մեկնարկային շարքում։",
    "home.ecoTitle": "Էկո գիտակցություն",
    "home.ecoBody": "Կայուն ընտրություններ ավելի լավ վաղվա համար։",
    "status.available": "Հասանելի է հիմա",
    "status.openNow": "Բաց է հիմա",
    "status.comingSoon": "Շուտով",
    "status.availableEdit": "Հասանելի ընտրանի։",
    "status.launchingSoon": "Մեկնարկը շուտով։",
    "collections.eyebrow": "Հավաքածուներ",
    "collections.title": "Stoneberry-ն բացվում է առաջինը։",
    "collections.body": "Stoneberry-ն հասանելի է հիմա։ Pastel Lights-ը, Soft Bloom-ը և EcoSoul-ը ապագա աշխարհներ են, որոնք կարող եք ուսումնասիրել մինչև մեկնարկը։",
    "shop.eyebrow": "Խանութ",
    "shop.title": "Stoneberry խանութ։",
    "shop.body": "Առաջին հավաքածուն արդեն բաց է։ Մյուս աշխարհները շուտով կավելացվեն, երբ մեկնարկը պատրաստ լինի։",
    "product.addCart": "Ավելացնել զամբյուղ",
    "product.saveWishlist": "Պահել ցանկալիում",
    "product.ingredients": "Բաղադրիչներ",
    "product.benefits": "Առավելություններ",
    "product.feelTitle": "Ինչպես է զգացվում",
    "product.feelBody": "Մեղմ, հարթ և երբեք ծանր չէ։ Ստեղծված է ամենօրյա լյուքս ռիտուալի համար։",
    "product.reviews": "Կարծիքներ",
    "product.reviewsTitle": "Սիրված մեղմությամբ։",
    "product.related": "Նման ապրանքներ",
    "product.relatedTitle": "Ավարտեք տրամադրությունը։",
    "coming.preview": "Նախադիտման կարգավիճակ",
    "coming.title": "Շուտով։",
    "coming.body": "{collection}-ը պատրաստվում է որպես ապագա հավաքածու։ Տրամադրությունը կարող եք տեսնել հիմա, բայց ապրանքները դեռ գնման համար հասանելի չեն։",
    "coming.launch": "Մեկնարկի նշում",
    "coming.noCheckout": "Գնում դեռ չկա։",
    "coming.noCheckoutBody": "Երբ այս հավաքածուն բացվի, այստեղ կավելացվեն ապրանքների էջերը և զամբյուղի գործողությունները։",
    "coming.firstDrop": "Առաջին թողարկում",
    "coming.shopStoneberry": "Գնել Stoneberry։",
    "coming.shopStoneberryBody": "Stoneberry-ն առաջին պաշտոնական հավաքածուն է և միակն է, որն այժմ հասանելի է։",
    "actions.openStoneberry": "Բացել Stoneberry",
    "panel.remove": "Հեռացնել",
    "panel.add": "Ավելացնել",
    "panel.open": "Բացել",
    "toast.addedCart": "Ավելացվեց զամբյուղ",
    "toast.savedWishlist": "Պահվեց ցանկալիում",
    "toast.addBeforeCheckout": "Վճարումից առաջ ավելացրեք ապրանք",
    "toast.openingCheckout": "Բացվում է փորձնական վճարումը",
    "toast.cartEmpty": "Զամբյուղը դատարկ է",
    "toast.language": "Լեզու՝ {language}",
    "toast.comingSoon": "{collection}-ը շուտով կլինի",
    "checkout.eyebrow": "Stripe փորձնական ռեժիմի նախադիտում",
    "checkout.title": "Փորձնական վճարում։",
    "checkout.body": "Սա անվտանգ փորձարկում է։ Իրական գումար չի շարժվում, և իրական քարտի տվյալներ այստեղ չեն հավաքվում։",
    "checkout.later": "Ավելի ուշ Stripe-ով",
    "checkout.laterBody": "Երբ ծնողի Stripe հաշիվը միացվի, այս կոճակը նախ կտանի Stripe Checkout փորձնական ռեժիմով, հետո live ռեժիմով, երբ պատրաստ լինեք։",
    "checkout.summary": "Պատվերի ամփոփում",
    "checkout.empty": "Ձեր զամբյուղը դատարկ է։ Ավելացրեք ապրանք՝ վճարումը փորձելու համար։",
    "checkout.total": "Ընդամենը",
    "checkout.note": "Միայն փորձնական ռեժիմ։ Առաքումը, հարկերը և իրական վճարման հաստատումը դեռ ակտիվ չեն։",
    "payment.successEyebrow": "Փորձնական պատվերը ավարտված է",
    "payment.cancelEyebrow": "Վճարումը չեղարկվեց",
    "payment.successTitle": "Վճարման փորձը անցավ։",
    "payment.cancelTitle": "Վճարում չի կատարվել։",
    "payment.successBody": "Ձեր փորձնական վճարման ընթացքը աշխատում է։ Իրական գումար չի գանձվել։",
    "payment.cancelBody": "Վճարումը անվտանգ չեղարկվեց։ Ձեր զամբյուղը պահպանված է։",
    "payment.shopProducts": "Դիտել ապրանքները",
    "payment.orderLine": "Փորձնական պատվեր {id} / ապրանքներ՝ {count} / ${total}",
    "info.ingredients.eyebrow": "Բաղադրիչներ",
    "info.ingredients.title": "Մաքուր, մտածված և զգայական։",
    "info.ingredients.body": "Մենք օգտագործում ենք հանքային պիգմենտներ, բուսական յուղեր, մեղմ մոմեր և մաշկին հարմար ակտիվներ՝ ընտրված ինչպես արդյունքի, այնպես էլ զգացողության համար։",
    "info.journal.eyebrow": "Ամսագիր",
    "info.journal.title": "Գեղեցկությունը որպես առարկա, ռիտուալ և տրամադրություն։",
    "info.journal.body": "Բացահայտեք քարոզարշավների նշումները, հավաքածուների ոգեշնչումը և մեղմ ռուտինները Gohar's Lab ստուդիայից։",
    "info.about.eyebrow": "Մեր մասին",
    "info.about.title": "Լյուքս գեղեցկություն՝ բնական հայացքով։",
    "info.about.body": "Gohar's Lab-ը միավորում է բնությունը, դիզայնը և ինքնարտահայտումը ապրանքներում, որոնք գեղեցիկ են թվում դեռ մինչև մաշկին դիպչելը։",
    "info.stores.eyebrow": "Խանութներ",
    "info.stores.title": "Ապագա տարածքներ Gohar's Lab-ի համար։",
    "info.stores.body": "Մեր առաջին կոնցեպտ-տարածքները, հավանաբար, կլինեն Մոսկվայում, Ռուսաստանում և Հայաստանում, երբ բրենդը աճի։",
    "info.impact.eyebrow": "Մեր ազդեցությունը",
    "info.impact.title": "Պահում ենք գումար՝ լավ գործերին աջակցելու համար։",
    "info.impact.body": "Քանի որ բրենդը աճում է, մենք գումար ենք պահում, որպեսզի օգնենք վստահելի կազմակերպություններին, երբ նրանք աջակցություն խնդրեն՝ հատկապես երեխաներին, համայնքներին և բնությանը օգնող խմբերին։",
    "info.ctaCollections": "Դիտել հավաքածուները",
    "article.ingredients.1.title": "Հանքային պիգմենտներ",
    "article.ingredients.1.body": "Գույնը կառուցված է մեղմ հանքային երանգներից, ընտրված՝ հեշտ խառնվելու, արդյունքի և բնական մաշկային ավարտի համար։",
    "article.ingredients.2.title": "Բուսական հարմարավետություն",
    "article.ingredients.2.body": "Սկվալանը, բուսական մոմերը և վիտամին E-ն օգնում են բանաձևերին զգացվել հարթ, ոչ ծանր։",
    "article.ingredients.3.title": "Մտածված բացառում",
    "article.ingredients.3.body": "Առանց սուր բույրի, ավելորդ լցանյութերի և կենդանիների վրա փորձարկման ամբողջ մեկնարկային շարքում։",
    "article.journal.1.title": "Stoneberry նշումներ",
    "article.journal.1.body": "Առաջին հավաքածուն ուսումնասիրում է տրավերտինը, վարդագույն ոսկու մետաղը և քանդակային առարկաները տաք լույսի մեջ։",
    "article.journal.2.title": "Մեղմ ռիտուալ",
    "article.journal.2.body": "Հինգ րոպեանոց ռուտին՝ մաշկի պատրաստման, գույնի և շուրթերի փայլի համար, որը շարունակում է զգացվել editorial։",
    "article.journal.3.title": "Ստուդիայի պալիտրա",
    "article.journal.3.body": "Ինչպես ivory, blush, lavender, sage և rose gold երանգները դարձան Gohar's Lab-ի տեսողական լեզուն։",
    "article.about.1.title": "Դիզայնը առաջինը",
    "article.about.1.body": "Բրենդը ամեն ապրանքի վերաբերվում է որպես առարկայի՝ օգտակար, շոշափելի և գեղեցիկ դարակին։",
    "article.about.2.title": "Բնությունից ներշնչված",
    "article.about.2.body": "Տեքստուրաները գալիս են քարից, թերթիկներից, ապակուց, ջրից և օրգանական ձևերից, ոչ թե աղմկոտ թրենդներից։",
    "article.about.3.title": "Կառուցվում է դանդաղ",
    "article.about.3.body": "Stoneberry-ն բացվում է առաջինը, որպեսզի յուրաքանչյուր ապագա հավաքածու մեկնարկի իր ամբողջական աշխարհով։",
    "article.stores.1.title": "Մոսկվայի կոնցեպտ-տարածք",
    "article.stores.1.body": "Stoneberry-ի, մեղմ փորձարկման և երանգների ուղղորդման համար տաք քարե տարածքը պլանավորվում է որպես ապագա ուղղություն Մոսկվայում։",
    "article.stores.2.title": "Հայաստանի նախադիտման տարածք",
    "article.stores.2.body": "Հավաքածուների փորձարկման, նվերների և մեղմ beauty-ռիտուալների համար փոքր տարածքը, հավանաբար, կլինի Հայաստանի պլանի մաս։",
    "article.stores.3.title": "Աճ դեպի ֆիզիկական տարածքներ",
    "article.stores.3.body": "Gohar's Lab-ը սկսվում է առցանց, հետո կաճի դեպի ընտրված ֆիզիկական տարածքներ, երբ բրենդը պատրաստ լինի։",
    "article.impact.1.title": "Աջակցության ֆոնդ",
    "article.impact.1.body": "Գումարը պահվում է ժամանակի ընթացքում, որպեսզի բրենդը կարողանա աջակցել վստահելի կազմակերպություններին, երբ ճիշտ հնարավորություն լինի։",
    "article.impact.2.title": "Երեխաների և համայնքների համար",
    "article.impact.2.body": "Նպատակը օգնելն է այն խմբերին, որոնք իրական աշխատանք են անում երեխաների, ընտանիքների, տեղական համայնքների և բնության համար։",
    "article.impact.3.title": "Խնամքով աջակցություն",
    "article.impact.3.body": "Աջակցությունը կբաշխվի մտածված, իսկ հետո կլինեն թարմացումներ, որպեսզի հաճախորդները տեսնեն, թե ուր է գնում պահված գումարը։",
  },
};

const DATA_TRANSLATIONS = {
  ru: {
    collections: {
      stoneberry: {
        mood: "Травертин, камень, теплый беж и розовое золото.",
        story: "Природа, высеченная в камне. Теплые минеральные оттенки, скульптурная упаковка и editorial-финиш, вдохновленный архитектурой из травертина.",
        tags: ["травертин", "камень", "розовое золото", "теплый беж"],
      },
      pastel: {
        mood: "Мягкое, мечтательное, воздушное, светящееся.",
        story: "Полуглянцевые текстуры, матовое стекло и перламутровый лавандово-розовый свет. Мягко, но не плоско и не пластиково.",
        tags: ["лаванда", "румянец", "матовое стекло", "перламутр"],
      },
      bloom: {
        mood: "Цветочное, романтичное, нежное.",
        story: "Цвет лепестков, элегантные теплые розовые тона и нежные текстуры для романтичного ежедневного ритуала.",
        tags: ["лепестки", "теплый розовый", "романтика", "нежность"],
      },
      eco: {
        mood: "Природа, устойчивость, чистая роскошь.",
        story: "Шалфейно-зеленое стекло, органические формы и чистые осознанные формулы со спокойной люксовой точкой зрения.",
        tags: ["шалфей", "стекло", "органика", "устойчивость"],
      },
    },
    products: {
      "stone-mist": ["Увлажняющий фиксирующий мист", "Минеральная водная вуаль, которая закрепляет макияж с мягким сатиновым финишем."],
      "face-oil": ["Питательный эликсир", "Скульптурное металлическое масло для лица, которое питает кожу и оставляет мягкое сияние Stoneberry."],
      "sculpt-stick": ["Кремовый контур-стик", "Кремовый контур в оттенке розового золота, который тает на коже без жестких границ."],
      "glow-balm": ["Сияющий хайлайтер-бальзам", "Теплый шампанский бальзам, который ловит свет полированным минеральным сиянием."],
      "soft-flush": ["Кремовый румяна-стик", "Кремовый теплый румянец-стик для мягкого sculpted-цвета на щеках."],
      "tinted-veil": ["Легкий тинт для губ и щек", "Прозрачный ягодный тинт, который дает губам и щекам скульптурную вуаль цвета."],
      "lip-sculpt": ["Скульптурная помада", "Теплая ягодно-розовая помада с сатиновым комфортом и мягким carved-финишем Stoneberry."],
      "lip-gloss": ["Блеск с высоким сиянием", "Стеклянный розово-коричневый блеск с мягкостью, сиянием и нелипким ощущением."],
      "lip-liner": ["Точный карандаш для губ", "Теплый нейтральный карандаш для чистой формы и мягко очерченных краев."],
      "stone-blush": ["Прессованные минеральные румяна", "Теплый прессованный цвет в компактной упаковке carved-stone с мягким фокусом."],
      "stone-shadow": ["Палетка теней", "Теплая минеральная палетка с мягкими розовыми, бронзовыми и каменно-коричневыми тонами."],
      "lash-stone": ["Удлиняющая тушь", "Тушь для разделенных и приподнятых ресниц с чистым sculpted-финишем."],
      "brow-stone": ["Скульптурный гель для бровей", "Гибкий гель, который мягко формирует, фиксирует и полирует брови."],
      "aura-gloss": ["Блеск для губ с сиянием", "Перламутровый лавандово-розовый блеск с мягким, нелипким ощущением."],
      "light-veil": ["Сыворотка мягкого сияния", "Полуглянцевый тон для кожи, который ловит свет как матовое стекло."],
      "pearl-balm": ["Сияющий хайлайтер-бальзам", "Кремовый жемчужный хайлайтер для светящегося, не металлического отражения."],
      "petal-flush": ["Кремовые румяна", "Романтичный цвет лепестков, который наносится мягким теплом."],
      "bloom-lip": ["Мягкая матовая помада", "Размытый розовый оттенок для губ с элегантным комфортом и без сухости."],
      "silk-cream": ["Увлажняющий праймер", "Шелковистый крем-подготовка с мягким цветочным финишем."],
      "leaf-serum": ["Балансирующая шалфейная сыворотка", "Чистая легкая сыворотка для спокойной и сбалансированной кожи."],
      "green-glass": ["Гель-крем с влажным эффектом", "Свежий гель-крем с гладким стеклянным увлажнением."],
      "earth-cleanse": ["Кремовое очищение", "Мягкое очищение без стянутости с приземленным ботаническим ощущением."],
    },
    ingredients: ["минеральные пигменты", "сквалан", "ботанический воск", "витамин E"],
    benefits: ["эффект soft-focus", "чистая формула", "без жестокости", "легкая растушевка"],
    reviews: ["Ощущается дорого и невесомо.", "Текстура мягкая, не липкая.", "Упаковка красиво смотрится на моей полке."],
  },
  hy: {
    collections: {
      stoneberry: {
        mood: "Տրավերտին, քար, տաք բեժ և վարդագույն ոսկի։",
        story: "Բնություն՝ քարի մեջ քանդակված։ Տաք հանքային երանգներ, քանդակային փաթեթավորում և editorial ավարտ՝ ոգեշնչված տրավերտինե ճարտարապետությամբ։",
        tags: ["տրավերտին", "քար", "վարդագույն ոսկի", "տաք բեժ"],
      },
      pastel: {
        mood: "Մեղմ, երազային, օդային, լուսավոր։",
        story: "Կիսափայլ տեքստուրաներ, սառեցված ապակի և մարգարտյա լавандա-վարդագույն լույս։ Մեղմ է, բայց ոչ հարթ կամ պլաստիկ։",
        tags: ["լավանդա", "վարդագույն", "սառեցված ապակի", "մարգարտյա"],
      },
      bloom: {
        mood: "Ծաղկային, ռոմանտիկ, նուրբ։",
        story: "Թերթիկների նման գույն, էլեգանտ տաք վարդագույններ և նուրբ տեքստուրաներ ռոմանտիկ ամենօրյա ռիտուալի համար։",
        tags: ["թերթիկներ", "տաք վարդագույն", "ռոմանտիկ", "նուրբ"],
      },
      eco: {
        mood: "Բնություն, կայունություն, մաքուր լյուքս։",
        story: "Շալֆեյի կանաչ ապակի, օրգանական ձևեր և մաքուր գիտակից բանաձևեր՝ հանգիստ լյուքս հայացքով։",
        tags: ["շալֆեյ", "ապակի", "օրգանական", "կայուն"],
      },
    },
    products: {
      "stone-mist": ["Խոնավեցնող ֆիքսող միստ", "Հանքային ջրային շղարշ, որը ֆիքսում է դիմահարդարումը մեղմ ատլասե ավարտով։"],
      "face-oil": ["Սնուցող էլիքսիր", "Քանդակային մետաղական դեմքի յուղ, որը սնուցում է մաշկը և թողնում մեղմ Stoneberry փայլ։"],
      "sculpt-stick": ["Կրեմային կոնտուր-ստիկ", "Վարդագույն ոսկու երանգով կրեմային կոնտուր, որը հալվում է մաշկին առանց կտրուկ գծերի։"],
      "glow-balm": ["Փայլ հաղորդող բալզամ", "Տաք շամպայնային բալզամ, որը լույսը բռնում է հանքային փայլով։"],
      "soft-flush": ["Կրեմային կարմրաներկ-ստիկ", "Կրեմային տաք կարմրաներկ-ստիկ՝ այտերին մեղմ քանդակային գույն տալու համար։"],
      "tinted-veil": ["Թեթև տինտ շուրթերի և այտերի համար", "Թափանցիկ berry տինտ, որը շուրթերին և այտերին տալիս է գույնի քանդակային շղարշ։"],
      "lip-sculpt": ["Քանդակային շրթներկ", "Տաք berry-rose շրթներկ՝ ատլասե հարմարավետությամբ և Stoneberry-ի մեղմ քանդակային ավարտով։"],
      "lip-gloss": ["Բարձր փայլով գլոս", "Ապակյա rose-brown փայլ՝ փափուկ, փայլուն և չկպչող զգացողությամբ։"],
      "lip-liner": ["Ճշգրիտ շուրթերի մատիտ", "Տաք նեյտրալ շուրթերի մատիտ՝ մաքուր ձևի և մեղմ ընդգծված եզրերի համար։"],
      "stone-blush": ["Սեղմված հանքային կարմրաներկ", "Տաք սեղմված գույն carved-stone կոմպակտով և soft-focus արդյունքով։"],
      "stone-shadow": ["Ստվերաներկերի քառյակ", "Տաք հանքային քառյակ՝ մեղմ վարդագույն, բրոնզե և քարե շագանակագույն երանգներով։"],
      "lash-stone": ["Երկարացնող թարթչաներկ", "Թարթչաներկ բարձրացված և առանձնացված թարթիչների համար՝ մաքուր քանդակային ավարտով։"],
      "brow-stone": ["Քանդակող հոնքերի գել", "Ճկուն գել, որը մեղմ ձևավորում, ֆիքսում և փայլեցնում է հոնքերը։"],
      "aura-gloss": ["Բարձր փայլով շուրթերի փայլ", "Մարգարտյա լавандա-վարդագույն փայլ՝ փափուկ, չկպչող զգացողությամբ։"],
      "light-veil": ["Մեղմ փայլի շիճուկ", "Կիսափայլ մաշկային երանգ, որը լույսը բռնում է սառեցված ապակու նման։"],
      "pearl-balm": ["Փայլ հաղորդող բալզամ-հայլայթեր", "Կրեմային մարգարտյա հայլայթեր լուսավոր, ոչ մետաղական անդրադարձի համար։"],
      "petal-flush": ["Կրեմային կարմրաներկ", "Ռոմանտիկ թերթիկային գույն, որը դրվում է մեղմ ջերմությամբ։"],
      "bloom-lip": ["Մեղմ մատ շրթներկ", "Փափուկ վարդագույն շուրթ՝ էլեգանտ հարմարավետությամբ և առանց չորության։"],
      "silk-cream": ["Խոնավեցնող պրայմեր", "Մետաքսյա պատրաստող կրեմ՝ մեղմ ծաղկային ավարտով։"],
      "leaf-serum": ["Շալֆեյի հավասարակշռող շիճուկ", "Մաքուր, թեթև շիճուկ հանգիստ և հավասարակշռված մաշկի համար։"],
      "green-glass": ["Խոնավ գել-կրեմ", "Թարմ գել-կրեմ՝ հարթ ապակյա խոնավեցմամբ։"],
      "earth-cleanse": ["Կրեմային մաքրող միջոց", "Մեղմ մաքրում՝ առանց ձգող զգացողության, բուսական հանգիստ տրամադրությամբ։"],
    },
    ingredients: ["հանքային պիգմենտներ", "սկվալան", "բուսական մոմ", "վիտամին E"],
    benefits: ["soft-focus ավարտ", "մաքուր բանաձև", "առանց դաժանության", "հեշտ խառնում"],
    reviews: ["Զգացվում է թանկ և թեթև։", "Տեքստուրան մեղմ է, ոչ կպչուն։", "Փաթեթավորումը գեղեցիկ է իմ դարակին։"],
  },
};

const app = document.querySelector("#app");
const loader = document.querySelector(".loader");
const toast = document.querySelector("[data-toast]");
const panels = document.querySelectorAll(".side-panel");
const backdrop = document.querySelector("[data-panel-backdrop]");
const drawer = document.querySelector("[data-mobile-drawer]");
const cartKey = "iwc-cart-v2";
const wishlistKey = "iwc-wishlist-v2";
const lastOrderKey = "iwc-last-test-order";

let cart = JSON.parse(localStorage.getItem(cartKey) || "[]");
let wishlist = JSON.parse(localStorage.getItem(wishlistKey) || "[]");
let currentLanguage = LANGUAGES.includes(localStorage.getItem(languageKey)) ? localStorage.getItem(languageKey) : "en";

function t(key) {
  return TRANSLATIONS[currentLanguage]?.[key] || TRANSLATIONS.en[key] || key;
}

function formatText(key, replacements = {}) {
  return Object.entries(replacements).reduce((text, [name, value]) => text.replace(`{${name}}`, value), t(key));
}

function localizedCollection(collection, field) {
  return DATA_TRANSLATIONS[currentLanguage]?.collections?.[collection.slug]?.[field] || collection[field];
}

function localizedTags(collection) {
  return DATA_TRANSLATIONS[currentLanguage]?.collections?.[collection.slug]?.tags || collection.tags;
}

function localizedProduct(item, index) {
  const translated = DATA_TRANSLATIONS[currentLanguage]?.products?.[item.slug];
  return translated?.[index] || (index === 0 ? item.type : item.description);
}

function localizedList(name, fallback) {
  return DATA_TRANSLATIONS[currentLanguage]?.[name] || fallback;
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === currentLanguage;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function setLanguage(language) {
  if (!LANGUAGES.includes(language)) return;
  currentLanguage = language;
  localStorage.setItem(languageKey, language);
  applyStaticTranslations();
  route();
  showToast(formatText("toast.language", { language: language.toUpperCase() }));
}

function product(slug, name, collection, type, price, description, tone) {
  return {
    slug,
    name,
    collection,
    type,
    price,
    description,
    tone,
    ingredients: ["mineral pigments", "squalane", "botanical wax", "vitamin E"],
    benefits: ["soft-focus finish", "clean formula", "cruelty free", "easy blending"],
    reviews: [
      "Feels expensive and weightless.",
      "The texture is soft, not sticky.",
      "The packaging looks beautiful on my shelf.",
    ],
  };
}

function visualClass(slug) {
  return collections[slug]?.visual || "visual-stone";
}

function visualMarkup(slug) {
  const detail = slug === "pastel" ? "wave" : slug === "bloom" ? "petal" : slug === "eco" ? "leaf" : "stone";
  return `<div class="visual-set ${visualClass(slug)}"><span class="${detail}"></span></div>`;
}

function productVisual(item) {
  const collection = collections[item.collection];
  const typeLabel = item.type.split(" ").slice(0, 2).join(" ");
  const image = PRODUCT_IMAGES[item.slug];
  return `
    <div class="visual-set product-preview ${visualClass(item.collection)} ${image ? "has-photo" : ""}" style="--product-tone:${item.tone}">
      <span class="preview-orbit"></span>
      <span class="preview-platform"></span>
      ${image ? `<img class="preview-photo" src="${image}" alt="${item.name} product preview">` : `<span class="preview-object"></span>`}
      <span class="preview-mark" aria-hidden="true">✦</span>
      ${image ? "" : `<span class="preview-brand">Gohar's Lab</span>`}
      <span class="preview-type">${typeLabel}</span>
      <span class="preview-note">${collection.status === "available" ? "product preview" : "coming soon"}</span>
    </div>
  `;
}

function navigate(path) {
  location.hash = path;
}

function route() {
  const hash = location.hash.replace(/^#\/?/, "");
  const parts = hash.split("/").filter(Boolean);
  closePanels();
  drawer.classList.remove("active");
  drawer.setAttribute("aria-hidden", "true");

  app.classList.add("is-leaving");
  loader.classList.add("active");

  window.setTimeout(() => {
    if (!parts.length) renderHome();
    else if (parts[0] === "collections" && parts[1]) renderCollection(parts[1]);
    else if (parts[0] === "collections") renderCollections();
    else if (parts[0] === "product" && parts[1]) renderProduct(parts[1]);
    else if (parts[0] === "shop") renderShop();
    else if (parts[0] === "checkout-test") renderCheckoutTest();
    else if (parts[0] === "payment-success") renderPaymentResult("success");
    else if (parts[0] === "payment-cancelled") renderPaymentResult("cancelled");
    else renderInfo(parts[0]);

    applyStaticTranslations();
    app.classList.remove("is-leaving");
    loader.classList.remove("active");
    app.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 180);
}

function renderHome() {
  app.innerHTML = `
    <section class="hero">
      <div class="hero-image" aria-label="Soft luminous sculptural beauty forms in blush and lavender tones">
        <span class="glass-form glass-form-one"></span>
        <span class="glass-form glass-form-two"></span>
        <span class="glass-form glass-form-three"></span>
        <span class="glass-bubble glass-bubble-one"></span>
        <span class="glass-bubble glass-bubble-two"></span>
      </div>
      <div class="hero-content reveal">
        <p class="eyebrow">${t("home.eyebrow")}</p>
        <h1>${t("home.title")}</h1>
        <p class="lead">${t("home.lead")}</p>
        <div class="button-row">
          <a class="pill-button" href="#/collections/stoneberry">${t("actions.shopStoneberry")}</a>
          <button class="ghost-button" data-open-search>${t("actions.searchProducts")}</button>
        </div>
      </div>
      <a class="donation-card reveal" href="#/impact">
        <span class="heart">heart</span>
        <strong>${t("home.support")}</strong>
        <span>${t("actions.open")}</span>
      </a>
    </section>
    <section class="section">
      <div class="section-heading reveal">
        <div>
          <p class="eyebrow">${t("home.collectionsEyebrow")}</p>
          <h2>${t("home.collectionsTitle")}</h2>
        </div>
        <a class="ghost-button" href="#/shop">${t("actions.shopStoneberry")}</a>
      </div>
      <div class="collection-grid">${Object.values(collections).map(collectionCard).join("")}</div>
    </section>
    <section class="section">
      <div class="section-heading reveal">
        <div>
          <p class="eyebrow">${t("home.productsEyebrow")}</p>
          <h2>${t("home.productsTitle")}</h2>
        </div>
      </div>
      <div class="product-grid">${availableProducts.map(productCard).join("")}</div>
    </section>
    <section class="section">
      <div class="values-grid">
        ${value(t("home.cleanTitle"), t("home.cleanBody"))}
        ${value(t("home.crueltyTitle"), t("home.crueltyBody"))}
        ${value(t("home.veganTitle"), t("home.veganBody"))}
        ${value(t("home.ecoTitle"), t("home.ecoBody"))}
      </div>
    </section>
  `;
}

function renderCollections() {
  app.innerHTML = `
    <section class="info-page">
      <div class="info-card reveal">
        <p class="eyebrow">${t("collections.eyebrow")}</p>
        <h1>${t("collections.title")}</h1>
        <p class="lead">${t("collections.body")}</p>
      </div>
    </section>
    <section class="section"><div class="collection-grid">${Object.values(collections).map(collectionCard).join("")}</div></section>
  `;
}

function renderCollection(slug) {
  const collection = collections[slug] || collections.stoneberry;
  const collectionProducts = products.filter((item) => item.collection === collection.slug);
  const isAvailable = collection.status === "available";
  app.innerHTML = `
    <section class="collection-hero">
      <div class="collection-hero-grid">
        <div class="collection-copy reveal">
          <p class="eyebrow">${isAvailable ? t("status.available") : t("status.comingSoon")} / ${localizedCollection(collection, "mood")}</p>
          <h1>${collection.name}</h1>
          <p class="lead">${localizedCollection(collection, "story")}</p>
          <div class="tag-list">${localizedTags(collection).map((tag) => `<span>${tag}</span>`).join("")}</div>
          <div class="button-row">
            ${isAvailable ? `<a class="pill-button" href="#/product/${collectionProducts[0].slug}">${t("actions.shopStoneberry")}</a>` : `<button class="pill-button" data-notify="${collection.slug}">${t("actions.notify")}</button>`}
            <a class="ghost-button" href="#/collections">${t("actions.backCollections")}</a>
          </div>
        </div>
        <div class="collection-stage reveal"><div class="large-visual">${visualMarkup(collection.slug)}</div></div>
      </div>
    </section>
    <section class="section">
      <div class="section-heading reveal">
        <div>
          <p class="eyebrow">${collection.name}</p>
          <h2>${isAvailable ? t("status.availableEdit") : t("status.launchingSoon")}</h2>
        </div>
      </div>
      ${isAvailable ? `<div class="product-grid">${collectionProducts.map(productCard).join("")}</div>` : comingSoonPanel(collection)}
    </section>
  `;
}

function renderShop() {
  app.innerHTML = `
    <section class="info-page">
      <div class="info-card reveal">
        <p class="eyebrow">${t("shop.eyebrow")}</p>
        <h1>${t("shop.title")}</h1>
        <p class="lead">${t("shop.body")}</p>
      </div>
    </section>
    <section class="section"><div class="product-grid">${availableProducts.map(productCard).join("")}</div></section>
  `;
}

function renderProduct(slug) {
  const item = products.find((productItem) => productItem.slug === slug) || products[0];
  const collection = collections[item.collection];
  const related = products.filter((productItem) => productItem.collection === item.collection && productItem.slug !== item.slug);
  app.innerHTML = `
    <section class="product-page">
      <div class="product-gallery reveal">
        <div class="large-visual">${productVisual(item)}</div>
      </div>
      <div class="product-copy reveal">
        <p class="eyebrow">${collection.name} / ${localizedProduct(item, 0)}</p>
        <h1>${item.name}</h1>
        <p class="lead">${localizedProduct(item, 1)}</p>
        <h3>${item.price}</h3>
        <div class="product-actions">
          <button class="pill-button" data-add-cart="${item.slug}">${t("product.addCart")}</button>
          <button class="ghost-button" data-add-wishlist="${item.slug}">${t("product.saveWishlist")}</button>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="detail-grid">
        <div class="value-card"><p class="eyebrow">${t("product.ingredients")}</p><p>${localizedList("ingredients", item.ingredients).join(", ")}.</p></div>
        <div class="value-card"><p class="eyebrow">${t("product.benefits")}</p><p>${localizedList("benefits", item.benefits).join(", ")}.</p></div>
        <div class="value-card"><p class="eyebrow">${t("product.feelTitle")}</p><p>${t("product.feelBody")}</p></div>
      </div>
    </section>
    <section class="section">
      <div class="section-heading"><div><p class="eyebrow">${t("product.reviews")}</p><h2>${t("product.reviewsTitle")}</h2></div></div>
      <div class="reviews-grid">${localizedList("reviews", item.reviews).map((review) => `<article class="review-card"><strong>5.0</strong><p>${review}</p></article>`).join("")}</div>
    </section>
    <section class="section">
      <div class="section-heading"><div><p class="eyebrow">${t("product.related")}</p><h2>${t("product.relatedTitle")}</h2></div></div>
      <div class="product-grid">${related.map(productCard).join("")}</div>
    </section>
  `;
}

function renderInfo(page) {
  const pages = {
    ingredients: ["info.ingredients.eyebrow", "info.ingredients.title", "info.ingredients.body"],
    journal: ["info.journal.eyebrow", "info.journal.title", "info.journal.body"],
    about: ["info.about.eyebrow", "info.about.title", "info.about.body"],
    stores: ["info.stores.eyebrow", "info.stores.title", "info.stores.body"],
    impact: ["info.impact.eyebrow", "info.impact.title", "info.impact.body"],
  };
  const cards = {
    ingredients: [
      ["article.ingredients.1.title", "article.ingredients.1.body"],
      ["article.ingredients.2.title", "article.ingredients.2.body"],
      ["article.ingredients.3.title", "article.ingredients.3.body"],
    ],
    journal: [
      ["article.journal.1.title", "article.journal.1.body"],
      ["article.journal.2.title", "article.journal.2.body"],
      ["article.journal.3.title", "article.journal.3.body"],
    ],
    about: [
      ["article.about.1.title", "article.about.1.body"],
      ["article.about.2.title", "article.about.2.body"],
      ["article.about.3.title", "article.about.3.body"],
    ],
    stores: [
      ["article.stores.1.title", "article.stores.1.body"],
      ["article.stores.2.title", "article.stores.2.body"],
      ["article.stores.3.title", "article.stores.3.body"],
    ],
    impact: [
      ["article.impact.1.title", "article.impact.1.body"],
      ["article.impact.2.title", "article.impact.2.body"],
      ["article.impact.3.title", "article.impact.3.body"],
    ],
  };
  const copy = pages[page] || pages.about;
  const infoCards = cards[page] || cards.about;
  app.innerHTML = `
    <section class="info-page">
      <div class="info-card reveal">
        <p class="eyebrow">${t(copy[0])}</p>
        <h1>${t(copy[1])}</h1>
        <p class="lead">${t(copy[2])}</p>
        <div class="button-row"><a class="pill-button" href="#/collections">${t("info.ctaCollections")}</a></div>
      </div>
    </section>
    <section class="section">
      <div class="${page === "stores" ? "store-grid" : "article-grid"}">
        ${infoCards.map(([title, body]) => `<article class="article-card"><p class="eyebrow">${t(copy[0])}</p><h3>${t(title)}</h3><p class="muted">${t(body)}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function renderCheckoutTest() {
  const items = cart.map((slug) => products.find((item) => item.slug === slug)).filter(Boolean);
  const total = items.reduce((sum, item) => sum + priceToNumber(item.price), 0);
  app.innerHTML = `
    <section class="product-page checkout-page">
      <div class="product-copy reveal">
        <p class="eyebrow">${t("checkout.eyebrow")}</p>
        <h1>${t("checkout.title")}</h1>
        <p class="lead">${t("checkout.body")}</p>
        <div class="value-card payment-note">
          <p class="eyebrow">${t("checkout.later")}</p>
          <p>${t("checkout.laterBody")}</p>
        </div>
        <div class="product-actions">
          <button class="pill-button" data-complete-test-order ${items.length ? "" : "disabled"}>${t("actions.completeTest")}</button>
          <a class="ghost-button" href="#/shop">${t("actions.keepShopping")}</a>
        </div>
      </div>
      <div class="product-copy checkout-summary reveal">
        <p class="eyebrow">${t("checkout.summary")}</p>
        ${items.length ? items.map((item) => `
          <article class="checkout-line">
            <div class="panel-thumb">${productVisual(item)}</div>
            <div><strong>${item.name}</strong><br><small class="muted">${collections[item.collection].name} / ${localizedProduct(item, 0)}</small></div>
            <strong>${item.price}</strong>
          </article>
        `).join("") : `<p class="muted">${t("checkout.empty")}</p>`}
        <div class="checkout-total"><span>${t("checkout.total")}</span><strong>$${total.toFixed(2)}</strong></div>
        <p class="muted">${t("checkout.note")}</p>
      </div>
    </section>
  `;
}

function renderPaymentResult(status) {
  const lastOrder = JSON.parse(localStorage.getItem(lastOrderKey) || "null");
  const success = status === "success";
  app.innerHTML = `
    <section class="info-page">
      <div class="info-card reveal">
        <p class="eyebrow">${success ? t("payment.successEyebrow") : t("payment.cancelEyebrow")}</p>
        <h1>${success ? t("payment.successTitle") : t("payment.cancelTitle")}</h1>
        <p class="lead">${success ? t("payment.successBody") : t("payment.cancelBody")}</p>
        ${lastOrder && success ? `<p class="muted">${formatText("payment.orderLine", { id: lastOrder.id, count: lastOrder.items.length, total: lastOrder.total.toFixed(2) })}</p>` : ""}
        <div class="button-row">
          <a class="pill-button" href="#/shop">${t("payment.shopProducts")}</a>
          <button class="ghost-button" data-open-cart>${t("actions.openCart")}</button>
        </div>
      </div>
    </section>
  `;
}

function collectionCard(collection) {
  return `
    <a class="campaign-card reveal ${collection.status === "available" ? "is-live" : "is-coming"}" href="#/collections/${collection.slug}">
      <div class="campaign-visual">${visualMarkup(collection.slug)}</div>
      <em>${collection.status === "available" ? t("status.openNow") : t("status.comingSoon")}</em>
      <p class="eyebrow">${localizedCollection(collection, "mood")}</p>
      <strong>${collection.name}</strong>
      <small>${localizedCollection(collection, "story")}</small>
    </a>
  `;
}

function comingSoonPanel(collection) {
  return `
    <div class="values-grid coming-soon-grid">
      <article class="value-card reveal">
        <p class="eyebrow">${t("coming.preview")}</p>
        <h3>${t("coming.title")}</h3>
        <p>${formatText("coming.body", { collection: collection.name })}</p>
      </article>
      <article class="value-card reveal">
        <p class="eyebrow">${t("coming.launch")}</p>
        <h3>${t("coming.noCheckout")}</h3>
        <p>${t("coming.noCheckoutBody")}</p>
      </article>
      <article class="value-card reveal">
        <p class="eyebrow">${t("coming.firstDrop")}</p>
        <h3>${t("coming.shopStoneberry")}</h3>
        <p>${t("coming.shopStoneberryBody")}</p>
        <div class="button-row"><a class="mini-button" href="#/collections/stoneberry">${t("actions.openStoneberry")}</a></div>
      </article>
    </div>
  `;
}

function productCard(item) {
  return `
    <a class="product-card reveal" href="#/product/${item.slug}">
      <div class="product-visual">${productVisual(item)}</div>
      <p class="eyebrow">${collections[item.collection].name}</p>
      <strong>${item.name}</strong>
      <small>${localizedProduct(item, 0)} / ${item.price}</small>
    </a>
  `;
}

function value(title, body) {
  return `<article class="value-card reveal"><p class="eyebrow">${title}</p><p>${body}</p></article>`;
}

function saveState() {
  localStorage.setItem(cartKey, JSON.stringify(cart));
  localStorage.setItem(wishlistKey, JSON.stringify(wishlist));
  updateCounts();
}

function updateCounts() {
  document.querySelector("[data-cart-count]").textContent = cart.length;
  document.querySelector("[data-wishlist-count]").textContent = wishlist.length;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("active");
  window.setTimeout(() => toast.classList.remove("active"), 1800);
}

function addToCart(slug) {
  cart.push(slug);
  saveState();
  showToast(t("toast.addedCart"));
}

function addToWishlist(slug) {
  if (!wishlist.includes(slug)) wishlist.push(slug);
  saveState();
  showToast(t("toast.savedWishlist"));
}

function priceToNumber(price) {
  return Number(String(price).replace(/[^0-9.]/g, "")) || 0;
}

async function startCheckout() {
  if (!cart.length) {
    showToast(t("toast.addBeforeCheckout"));
    return;
  }

  showToast(t("toast.openingCheckout"));
  try {
    const response = await fetch("/.netlify/functions/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    });
    const data = await response.json();
    if (data.url) {
      window.location.href = data.url;
      return;
    }
  } catch (error) {
    // No Stripe key/function yet: use the safe local test checkout.
  }

  navigate("/checkout-test");
}

function completeTestOrder() {
  const items = cart.map((slug) => products.find((item) => item.slug === slug)).filter(Boolean);
  if (!items.length) {
    showToast(t("toast.cartEmpty"));
    return;
  }
  const total = items.reduce((sum, item) => sum + priceToNumber(item.price), 0);
  localStorage.setItem(lastOrderKey, JSON.stringify({
    id: `TEST-${Date.now().toString().slice(-6)}`,
    items: items.map((item) => item.slug),
    total,
  }));
  cart = [];
  saveState();
  navigate("/payment-success");
}

function openPanel(name) {
  closePanels(false);
  document.body.classList.add("panel-open");
  backdrop.classList.add("active");
  const panel = document.querySelector(`[data-panel="${name}"]`);
  panel.classList.add("active");
  panel.setAttribute("aria-hidden", "false");
  if (name === "search") renderSearch("");
  if (name === "cart") renderCart();
  if (name === "wishlist") renderWishlist();
}

function closePanels(removeBody = true) {
  if (removeBody) document.body.classList.remove("panel-open");
  backdrop.classList.remove("active");
  panels.forEach((panel) => {
    panel.classList.remove("active");
    panel.setAttribute("aria-hidden", "true");
  });
}

function renderCart() {
  const list = document.querySelector("[data-cart-list]");
  if (!cart.length) {
    list.innerHTML = `<p class="muted">${t("cart.empty")}</p>`;
    return;
  }
  list.innerHTML = cart.map((slug, index) => panelItem(products.find((item) => item.slug === slug), t("panel.remove"), `data-remove-cart="${index}"`)).join("");
}

function renderWishlist() {
  const list = document.querySelector("[data-wishlist-list]");
  if (!wishlist.length) {
    list.innerHTML = `<p class="muted">${t("wishlist.empty")}</p>`;
    return;
  }
  list.innerHTML = wishlist.map((slug) => panelItem(products.find((item) => item.slug === slug), t("panel.add"), `data-add-cart="${slug}"`)).join("");
}

function renderSearch(query) {
  const list = document.querySelector("[data-search-results]");
  const normalized = query.trim().toLowerCase();
  const productMatches = availableProducts.filter((item) => [item.name, item.type, localizedProduct(item, 0), collections[item.collection].name].join(" ").toLowerCase().includes(normalized));
  const collectionMatches = Object.values(collections).filter((collection) => [collection.name, localizedCollection(collection, "mood")].join(" ").toLowerCase().includes(normalized));
  const results = [
    ...collectionMatches.map((collection) => panelCollectionItem(collection)),
    ...productMatches.map((item) => panelItem(item, t("panel.open"), `data-go-product="${item.slug}"`)),
  ];
  list.innerHTML = results.length ? results.join("") : `<p class="muted">${t("search.empty")}</p>`;
}

function panelItem(item, action, attr) {
  return `
    <article class="panel-item">
      <div class="panel-thumb">${productVisual(item)}</div>
      <div><strong>${item.name}</strong><br><small class="muted">${localizedProduct(item, 0)} / ${item.price}</small></div>
      <button class="mini-button" ${attr}>${action}</button>
    </article>
  `;
}

function panelCollectionItem(collection) {
  return `
    <article class="panel-item">
      <div class="panel-thumb">${visualMarkup(collection.slug)}</div>
      <div><strong>${collection.name}</strong><br><small class="muted">${localizedCollection(collection, "mood")}</small></div>
      <button class="mini-button" data-go-collection="${collection.slug}">${t("panel.open")}</button>
    </article>
  `;
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button, a");
  if (!target) return;

  if (target.dataset.lang) setLanguage(target.dataset.lang);
  if (target.matches("[data-open-search]")) openPanel("search");
  if (target.matches("[data-open-cart]")) openPanel("cart");
  if (target.matches("[data-open-wishlist]")) openPanel("wishlist");
  if (target.matches("[data-open-account]")) openPanel("account");
  if (target.matches("[data-close-panel]") || target === backdrop) closePanels();
  if (target.matches("[data-menu-toggle]")) {
    const active = !drawer.classList.contains("active");
    drawer.classList.toggle("active", active);
    drawer.setAttribute("aria-hidden", String(!active));
  }
  if (target.dataset.addCart) addToCart(target.dataset.addCart);
  if (target.dataset.addWishlist) addToWishlist(target.dataset.addWishlist);
  if (target.dataset.removeCart) {
    cart.splice(Number(target.dataset.removeCart), 1);
    saveState();
    renderCart();
  }
  if (target.dataset.goProduct) navigate(`/product/${target.dataset.goProduct}`);
  if (target.dataset.goCollection) navigate(`/collections/${target.dataset.goCollection}`);
  if (target.matches("[data-checkout]")) startCheckout();
  if (target.matches("[data-complete-test-order]")) completeTestOrder();
  if (target.dataset.notify) showToast(formatText("toast.comingSoon", { collection: collections[target.dataset.notify].name }));
});

document.querySelector("[data-search-input]").addEventListener("input", (event) => {
  renderSearch(event.target.value);
});

window.addEventListener("hashchange", route);
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.getRegistrations()
      .then((registrations) => registrations.forEach((registration) => registration.unregister()))
      .catch(() => {});
  });
}

updateCounts();
applyStaticTranslations();
route();
