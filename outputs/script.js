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
  product("glow-balm", "Glow Balm", "stoneberry", "Radiant highlight balm", "$36", "A warm champagne balm that catches light with a polished mineral glow.", "#c19a78"),
  product("soft-flush", "Soft Flush", "stoneberry", "Cream blush stick", "$34", "A creamy warm flush stick for soft carved color on cheeks.", "#b98272"),
  product("tinted-veil", "Tinted Veil", "stoneberry", "Sheer lip and cheek tint", "$32", "A translucent berry tint that brings a sculpted veil of color to lips and cheeks.", "#7f4b53"),
  product("lip-sculpt", "Lip Sculpt", "stoneberry", "Sculpting lipstick", "$36", "A warm berry-rose lipstick with satin comfort and a softly carved Stoneberry finish.", "#9f5f5a"),
  product("lip-gloss", "Lip Gloss", "stoneberry", "High shine gloss", "$30", "A glassy rose-brown gloss with cushion, shine, and a smooth non-sticky feel.", "#9c5f55"),
  product("lip-liner", "Lip Liner", "stoneberry", "Precision lip pencil", "$24", "A warm neutral lip pencil for clean shape and softly defined edges.", "#8c695d"),
  product("stone-blush", "Stone Blush", "stoneberry", "Pressed mineral blush", "$42", "Warm pressed color with a carved-stone compact and soft-focus payoff.", "#ad7a70"),
  product("stone-shadow", "Stone Shadow", "stoneberry", "Eyeshadow quad", "$46", "A warm mineral shadow quad with soft rose, bronze, and stone-brown tones.", "#9e7562"),
  product("lash-stone", "Lash Stone", "stoneberry", "Lengthening mascara", "$32", "A defining mascara for lifted lashes with a clean sculpted finish.", "#6c5a4d"),
  product("brow-stone", "Brow Stone", "stoneberry", "Sculpting brow gel", "$28", "A flexible brow gel that softly shapes, holds, and polishes the brow.", "#80624f"),
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
  return `
    <div class="visual-set product-preview ${visualClass(item.collection)}" style="--product-tone:${item.tone}">
      <span class="preview-orbit"></span>
      <span class="preview-platform"></span>
      <span class="preview-object"></span>
      <span class="preview-mark" aria-hidden="true">✦</span>
      <span class="preview-brand">Gohar's Lab</span>
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
