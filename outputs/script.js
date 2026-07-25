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
  product("wave-cream", "Wave Cream", "stoneberry", "Metallic cream blush tube", "$34", "A soft metallic-laminate cream blush tube with sculptural waves and a warm Stoneberry flush.", "#d4c3ae"),
  product("glitter-spray", "Glitter Spray", "stoneberry", "Shimmer setting spray", "$42", "A luminous glitter mist in a sculptural bottle with a long oval window and soft champagne sparkle.", "#d4c3ae"),
  product("face-oil", "Face Oil", "stoneberry", "Nourishing elixir", "$58", "A sculptural metallic face oil that nourishes skin with a soft Stoneberry glow.", "#d0b99e"),
  product("sculpt-stick", "Sculpt Stick", "stoneberry", "Cream contour stick", "$34", "A champagne-gold cream contour that melts into skin without harsh edges.", "#d4c3ae"),
  product("tinted-veil", "Tinted Veil", "stoneberry", "Sheer lip and cheek tint", "$32", "A translucent berry tint that brings a sculpted veil of color to lips and cheeks.", "#7f4b53"),
  product("lip-sculpt", "Lip Sculpt", "stoneberry", "Sculpting lipstick", "$36", "A warm berry-rose lipstick with satin comfort and a softly carved Stoneberry finish.", "#d4c3ae"),
  product("stone-blush", "Stone Blush", "stoneberry", "Pressed mineral blush", "$42", "Warm pressed color with a carved-stone compact and soft-focus payoff.", "#d4c3ae"),
  product("lash-stone", "Lash Stone", "stoneberry", "Lengthening mascara", "$34", "A sculptural mascara for lifted, separated lashes with a clean Stoneberry finish.", "#c6b29d"),
  product("brow-gel", "Brow Gel", "stoneberry", "Sculpting brow gel", "$30", "A flexible brow gel in a looped metallic case that shapes, lifts, and softly polishes brows.", "#ccb79f"),
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
  "wave-cream": "assets/product-photos-clean/wave-cream.jpg",
  "glitter-spray": "assets/product-photos-clean/glitter-spray.jpg",
  "face-oil": "assets/product-photos-clean/face-oil.jpg",
  "sculpt-stick": "assets/product-photos-clean/sculpt-stick.jpg",
  "tinted-veil": "assets/product-photos-clean/tinted-veil.jpg",
  "lip-sculpt": "assets/product-photos-clean/lip-sculpt.jpg",
  "stone-blush": "assets/product-photos-clean/stone-blush.jpg",
  "lash-stone": "assets/product-photos-clean/lash-stone.jpg",
  "brow-gel": "assets/product-photos-clean/brow-gel.jpg",
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
    "search.placeholder": "Try Glitter Spray or EcoSoul",
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
    "search.placeholder": "Попробуйте Glitter Spray или EcoSoul",
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
    "search.placeholder": "Փորձեք Glitter Spray կամ EcoSoul",
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
      "wave-cream": ["Металлический кремовый тюбик", "Мягкий metallic-laminate тюбик с кремовыми румянами, скульптурными волнами и теплым Stoneberry-румянцем."],
      "glitter-spray": ["Мерцающий фиксирующий спрей", "Светящийся glitter mist в скульптурном флаконе с длинным овальным окном и мягким champagne-сиянием."],
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
      "lash-stone": ["Удлиняющая тушь", "Скульптурная тушь для приподнятых и разделенных ресниц с чистым Stoneberry-финишем."],
      "brow-gel": ["Скульптурный гель для бровей", "Гибкий гель в металлическом футляре-петле, который формирует, приподнимает и мягко полирует брови."],
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
      "wave-cream": ["Մետաղական կրեմային տյուբիկ", "Փափուկ metallic-laminate տյուբիկ կրեմային կարմրաներկով, քանդակային ալիքներով և տաք Stoneberry երանգով։"],
      "glitter-spray": ["Փայլուն ֆիքսող սփրեյ", "Լուսավոր glitter mist քանդակային շշի մեջ՝ երկար օվալ պատուհանով և մեղմ champagne փայլով։"],
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
      "lash-stone": ["Երկարացնող թարթչաներկ", "Քանդակային թարթչաներկ բարձրացված և առանձնացված թարթիչների համար՝ մաքուր Stoneberry ավարտով։"],
      "brow-gel": ["Քանդակող հոնքերի գել", "Ճկուն գել մետաղական loop-ֆուտլյարում, որը ձևավորում, բարձրացնում և մեղմ փայլեցնում է հոնքերը։"],
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

const PRODUCT_IMAGE_FALLBACKS = {
  "lash-stone": "data:image/jpeg;base64,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",
};

function productVisual(item) {
  const collection = collections[item.collection];
  const typeLabel = item.type.split(" ").slice(0, 2).join(" ");
  const image = PRODUCT_IMAGES[item.slug] || PRODUCT_IMAGE_FALLBACKS[item.slug];
  if (image) {
    return `
      <div class="visual-set product-preview product-photo-preview product-${item.slug} ${visualClass(item.collection)}" style="--product-tone:${item.tone}">
        <img class="preview-photo-full" src="${image}" alt="${item.name} product preview">
      </div>
    `;
  }
  return `
    <div class="visual-set product-preview product-${item.slug} ${visualClass(item.collection)}" style="--product-tone:${item.tone}">
      <span class="preview-orbit"></span>
      <span class="preview-platform"></span>
      <span class="preview-object"></span>
      <span class="preview-mark" aria-hidden="true">✦</span>
      <span class="preview-brand">GL</span>
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
