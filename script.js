// ============================================
// LUMIA Flores - JavaScript
// ============================================

// Language Dictionary
const translations = {
    es: {
        'nav.home': 'Inicio',
        'nav.catalog': 'Catálogo',
        'nav.about': 'Nosotros',
        'hero.eyebrow': 'Arte Floral por la Familia García',
        'hero.title': 'Flores que emocionan',
        'hero.subtitle': 'Entrega en 2 horas en toda España',
        'hero.viewCatalog': 'Ver catálogo',
        'hero.whatsapp': 'Hablar por WhatsApp',
        'about.title': 'Nuestra Esencia',
        'about.textTitle': 'Nuestra Esencia',
        'about.text1': 'Lumia Flores es el legado de la familia García.',
        'about.text2': 'Unimos 10 años de tradición artesanal en nuestras tiendas de Madrid con un servicio moderno que llega a toda España.',
        'about.text3': 'Cada ramo es una pieza de arte creada con pasión y atención al detalle.',
        'about.cta': 'Conoce nuestra historia →',
        'reviews.title': 'Lo que dicen nuestros clientes',
        'review1.text': '"Las flores más hermosas que he recibido. La entrega fue rápida y el arreglo perfecto. ¡Definitivamente volveré a pedir!"',
        'review2.text': '"Increíble servicio. Pedí un ramo para el cumpleaños de mi madre y quedó encantada. La calidad es excepcional."',
        'review3.text': '"LUMIA Flores ha sido mi elección para todas las ocasiones especiales. Siempre superan mis expectativas."',
        'review4.text': '"El servicio al cliente es excelente y las flores siempre frescas. Recomiendo LUMIA Flores sin dudarlo."',
        'feature1.title': 'Pago seguro',
        'feature1.text': 'Múltiples métodos de pago seguros y protegidos',
        'feature2.title': 'Entrega en 2 horas',
        'feature2.text': 'Entrega rápida en toda España',
        'feature3.title': 'Flores frescas diarias',
        'feature3.text': 'Seleccionamos las mejores flores cada día',
        'footer.location': 'Madrid, España',
        'footer.navigation': 'Navegación',
        'footer.follow': 'Síguenos',
        'footer.instagram': 'Instagram',
        'footer.whatsapp': 'WhatsApp',
        'footer.copyright': '© {year} LUMIA Flores. Todos los derechos reservados.',
        'catalog.title': 'Nuestro catálogo',
        'catalog.subtitle': 'Descubre nuestra colección de arreglos florales únicos',
        'product.viewDetails': 'Ver detalles',
        'product.defaultName': 'Ramo Elegante',
        'product.defaultDescription': 'Un hermoso arreglo floral que combina rosas rojas, liliums blancos y eucalipto. Perfecto para expresar tus sentimientos más profundos en cualquier ocasión especial.',
        'product.fresh': 'Flores frescas',
        'product.gift': 'Perfecto para regalos',
        'product.delivery': 'Entrega el mismo día disponible',
        'product.buyNow': 'Comprar ahora',
        'product.whatsapp': 'Pedir por WhatsApp',
        'checkout.title': 'Finalizar compra',
        'checkout.contactInfo': 'Información de contacto',
        'checkout.name': 'Nombre completo',
        'checkout.email': 'Correo electrónico',
        'checkout.phone': 'Teléfono',
        'checkout.deliveryInfo': 'Información de entrega',
        'checkout.address': 'Dirección',
        'checkout.city': 'Ciudad',
        'checkout.postal': 'Código postal',
        'checkout.paymentInfo': 'Información de pago',
        'checkout.cardName': 'Nombre en la tarjeta',
        'checkout.cardNumber': 'Número de tarjeta',
        'checkout.cardExpiry': 'Fecha de vencimiento',
        'checkout.cardCVV': 'CVV',
        'checkout.submit': 'Confirmar pedido',
        'checkout.orderSummary': 'Resumen del pedido',
        'checkout.defaultProduct': 'Ramo Elegante',
        'checkout.subtotal': 'Subtotal',
        'checkout.delivery': 'Entrega',
        'checkout.free': 'Gratis',
        'checkout.total': 'Total'
    },
    en: {
        'nav.home': 'Home',
        'nav.catalog': 'Catalog',
        'nav.about': 'About',
        'hero.eyebrow': 'Floral Art by the García Family',
        'hero.title': 'Flowers that move your heart',
        'hero.subtitle': 'Delivery in 2 hours across Spain',
        'hero.viewCatalog': 'View catalog',
        'hero.whatsapp': 'Chat on WhatsApp',
        'about.title': 'Our Essence',
        'about.textTitle': 'Our Essence',
        'about.text1': 'Lumia Flores is the legacy of the García family.',
        'about.text2': 'We unite 10 years of artisanal tradition in our Madrid stores with a modern service that reaches all of Spain.',
        'about.text3': 'Each bouquet is a work of art created with passion and attention to detail.',
        'about.cta': 'Learn our story →',
        'reviews.title': 'What our customers say',
        'review1.text': '"The most beautiful flowers I have ever received. The delivery was fast and the arrangement perfect. I will definitely order again!"',
        'review2.text': '"Incredible service. I ordered a bouquet for my mother\'s birthday and she was delighted. The quality is exceptional."',
        'review3.text': '"LUMIA Flores has been my choice for all special occasions. They always exceed my expectations."',
        'review4.text': '"The customer service is excellent and the flowers are always fresh. I recommend LUMIA Flores without hesitation."',
        'feature1.title': 'Secure payment',
        'feature1.text': 'Multiple secure and protected payment methods',
        'feature2.title': '2-hour delivery',
        'feature2.text': 'Fast delivery across Spain',
        'feature3.title': 'Fresh flowers daily',
        'feature3.text': 'We select the best flowers every day',
        'footer.location': 'Madrid, Spain',
        'footer.navigation': 'Navigation',
        'footer.follow': 'Follow Us',
        'footer.instagram': 'Instagram',
        'footer.whatsapp': 'WhatsApp',
        'footer.copyright': '© {year} LUMIA Flores. All rights reserved.',
        'catalog.title': 'Our Catalog',
        'catalog.subtitle': 'Discover our collection of unique floral arrangements',
        'product.viewDetails': 'View details',
        'product.defaultName': 'Elegant Bouquet',
        'product.defaultDescription': 'A beautiful floral arrangement combining red roses, white lilies, and eucalyptus. Perfect for expressing your deepest feelings on any special occasion.',
        'product.fresh': 'Fresh flowers',
        'product.gift': 'Perfect for gifts',
        'product.delivery': 'Same-day delivery available',
        'product.buyNow': 'Buy now',
        'product.whatsapp': 'Order via WhatsApp',
        'checkout.title': 'Checkout',
        'checkout.contactInfo': 'Contact Information',
        'checkout.name': 'Full name',
        'checkout.email': 'Email',
        'checkout.phone': 'Phone',
        'checkout.deliveryInfo': 'Delivery Information',
        'checkout.address': 'Address',
        'checkout.city': 'City',
        'checkout.postal': 'Postal code',
        'checkout.paymentInfo': 'Payment Information',
        'checkout.cardName': 'Name on card',
        'checkout.cardNumber': 'Card number',
        'checkout.cardExpiry': 'Expiry date',
        'checkout.cardCVV': 'CVV',
        'checkout.submit': 'Confirm order',
        'checkout.orderSummary': 'Order Summary',
        'checkout.defaultProduct': 'Elegant Bouquet',
        'checkout.subtotal': 'Subtotal',
        'checkout.delivery': 'Delivery',
        'checkout.free': 'Free',
        'checkout.total': 'Total'
    }
};

// Product Data
const products = [
    {
        id: 1,
        name: { es: 'Ramo de Rosas Rojas', en: 'Red Roses Bouquet' },
        description: { es: 'Un clásico atemporal que expresa amor y pasión. Rosas rojas frescas cuidadosamente seleccionadas.', en: 'A timeless classic that expresses love and passion. Fresh red roses carefully selected.' },
        price: 45.00,
        image: './assets/product1.png'
    },
    {
        id: 2,
        name: { es: 'Ramo Primaveral', en: 'Spring Bouquet' },
        description: { es: 'Una explosión de colores primaverales con tulipanes, margaritas y flores silvestres.', en: 'A burst of spring colors with tulips, daisies, and wildflowers.' },
        price: 38.00,
        image: './assets/product3.png'
    },
    {
        id: 3,
        name: { es: 'Arreglo Elegante', en: 'Elegant Arrangement' },
        description: { es: 'Liliums blancos y rosas rosadas en un arreglo sofisticado y elegante.', en: 'White lilies and pink roses in a sophisticated and elegant arrangement.' },
        price: 52.00,
        image: './assets/product4.png'
    },
    {
        id: 4,
        name: { es: 'Ramo Romántico', en: 'Romantic Bouquet' },
        description: { es: 'Rosas rosadas y peonías en tonos suaves que transmiten dulzura y romanticismo.', en: 'Pink roses and peonies in soft tones that convey sweetness and romance.' },
        price: 48.00,
        image: './assets/product5.png'
    },
    {
        id: 5,
        name: { es: 'Arreglo Exótico', en: 'Exotic Arrangement' },
        description: { es: 'Orquídeas y flores tropicales que añaden un toque exótico y sofisticado.', en: 'Orchids and tropical flowers that add an exotic and sophisticated touch.' },
        price: 65.00,
        image: './assets/product6.png'
    },
    {
        id: 6,
        name: { es: 'Ramo de Girasoles', en: 'Sunflower Bouquet' },
        description: { es: 'Girasoles brillantes que traen alegría y energía positiva a cualquier espacio.', en: 'Bright sunflowers that bring joy and positive energy to any space.' },
        price: 35.00,
        image: './assets/product7.png'
    },
    {
        id: 7,
        name: { es: 'Arreglo Minimalista', en: 'Minimalist Arrangement' },
        description: { es: 'Diseño limpio y moderno con flores blancas y verdes en un estilo minimalista.', en: 'Clean and modern design with white and green flowers in a minimalist style.' },
        price: 42.00,
        image: './assets/product8.png'
    },
    {
        id: 8,
        name: { es: 'Ramo de Lavanda', en: 'Lavender Bouquet' },
        description: { es: 'Lavanda fresca que aporta calma y serenidad con su aroma relajante.', en: 'Fresh lavender that brings calm and serenity with its relaxing aroma.' },
        price: 40.00,
        image: './assets/product9.png'
    },
    {
        id: 9,
        name: { es: 'Arreglo Festivo', en: 'Festive Arrangement' },
        description: { es: 'Una combinación vibrante de flores de temporada perfecta para celebraciones.', en: 'A vibrant combination of seasonal flowers perfect for celebrations.' },
        price: 55.00,
        image: './assets/product10.png'
    },
    {
        id: 10,
        name: { es: 'Ramo Clásico', en: 'Classic Bouquet' },
        description: { es: 'Rosas blancas y rojas en un arreglo clásico que nunca pasa de moda.', en: 'White and red roses in a classic arrangement that never goes out of style.' },
        price: 50.00,
        image: './assets/product11.png'
    },
    {
        id: 11,
        name: { es: 'Arreglo Delicado', en: 'Delicate Arrangement' },
        description: { es: 'Peonías y rosas en tonos pastel que crean una atmósfera suave y delicada.', en: 'Peonies and roses in pastel tones that create a soft and delicate atmosphere.' },
        price: 58.00,
        image: './assets/product12.png'
    },
    {
        id: 12,
        name: { es: 'Ramo de Campo', en: 'Wildflower Bouquet' },
        description: { es: 'Flores silvestres naturales que evocan la belleza del campo y la naturaleza.', en: 'Natural wildflowers that evoke the beauty of the countryside and nature.' },
        price: 32.00,
        image: './assets/product13.png'
    },
    {
        id: 13,
        name: { es: 'Arreglo Premium', en: 'Premium Arrangement' },
        description: { es: 'Una selección exclusiva de las mejores flores en un arreglo de lujo.', en: 'An exclusive selection of the finest flowers in a luxury arrangement.' },
        price: 75.00,
        image: './assets/product14.png'
    },
    {
        id: 14,
        name: { es: 'Caja Regalo LUMIA', en: 'LUMIA Gift Box' },
        description: { es: 'Una elegante caja regalo con el logo LUMIA. Perfecta para añadir a cualquier ramo o como regalo independiente. Embalaje premium que refleja la identidad de nuestra marca.', en: 'An elegant gift box with the LUMIA logo. Perfect to add to any bouquet or as a standalone gift. Premium packaging that reflects our brand identity.' },
        price: 25.00,
        image: './assets/regalo_product15.png'
    },
    {
        id: 15,
        name: { es: 'Arreglo Elegante Blanco', en: 'Elegant White Arrangement' },
        description: { es: 'Flores blancas puras en un arreglo elegante y sofisticado para ocasiones especiales.', en: 'Pure white flowers in an elegant and sophisticated arrangement for special occasions.' },
        price: 60.00,
        image: './assets/product16.png'
    },
    {
        id: 16,
        name: { es: 'Ramo de Margaritas', en: 'Daisy Bouquet' },
        description: { es: 'Margaritas frescas y alegres que transmiten simplicidad y felicidad.', en: 'Fresh and cheerful daisies that convey simplicity and happiness.' },
        price: 28.00,
        image: './assets/product17.png'
    },
    {
        id: 17,
        name: { es: 'Arreglo Moderno', en: 'Modern Arrangement' },
        description: { es: 'Diseño contemporáneo con flores exóticas y follaje moderno.', en: 'Contemporary design with exotic flowers and modern foliage.' },
        price: 68.00,
        image: './assets/product18.png'
    },
    {
        id: 18,
        name: { es: 'Ramo de Tulipanes', en: 'Tulip Bouquet' },
        description: { es: 'Tulipanes vibrantes en múltiples colores que anuncian la llegada de la primavera.', en: 'Vibrant tulips in multiple colors that herald the arrival of spring.' },
        price: 40.00,
        image: './assets/product19.png'
    },
    {
        id: 19,
        name: { es: 'Arreglo Lujoso', en: 'Luxury Arrangement' },
        description: { es: 'Una combinación exclusiva de flores premium en un arreglo de máxima calidad.', en: 'An exclusive combination of premium flowers in a top-quality arrangement.' },
        price: 85.00,
        image: './assets/product20.png'
    },
    {
        id: 20,
        name: { es: 'Ramo de Peonías', en: 'Peony Bouquet' },
        description: { es: 'Peonías exuberantes en tonos rosados que desprenden elegancia y feminidad.', en: 'Lush peonies in pink tones that exude elegance and femininity.' },
        price: 55.00,
        image: './assets/product21.png'
    },
    {
        id: 21,
        name: { es: 'Arreglo Natural', en: 'Natural Arrangement' },
        description: { es: 'Flores y follaje natural que recrean la belleza del jardín en tu hogar.', en: 'Natural flowers and foliage that recreate the beauty of the garden in your home.' },
        price: 45.00,
        image: './assets/product22.png'
    },
    {
        id: 22,
        name: { es: 'Ramo de Orquídeas', en: 'Orchid Bouquet' },
        description: { es: 'Orquídeas exóticas que añaden un toque de sofisticación y elegancia.', en: 'Exotic orchids that add a touch of sophistication and elegance.' },
        price: 70.00,
        image: './assets/product23.png'
    },
    {
        id: 23,
        name: { es: 'Arreglo Colorido', en: 'Colorful Arrangement' },
        description: { es: 'Una paleta vibrante de colores que llena de energía y alegría cualquier espacio.', en: 'A vibrant palette of colors that fills any space with energy and joy.' },
        price: 48.00,
        image: './assets/product24.png'
    },
    {
        id: 24,
        name: { es: 'Ramo de Lirios', en: 'Lily Bouquet' },
        description: { es: 'Lirios elegantes que desprenden un aroma delicado y una belleza única.', en: 'Elegant lilies that exude a delicate aroma and unique beauty.' },
        price: 50.00,
        image: './assets/product25.png'
    },
    {
        id: 25,
        name: { es: 'Arreglo Rustico', en: 'Rustic Arrangement' },
        description: { es: 'Flores de campo y follaje natural en un estilo rústico y acogedor.', en: 'Field flowers and natural foliage in a rustic and cozy style.' },
        price: 38.00,
        image: './assets/product26.png'
    },
    {
        id: 26,
        name: { es: 'Ramo de Alstroemerias', en: 'Alstroemeria Bouquet' },
        description: { es: 'Alstroemerias duraderas en colores vibrantes que alegran durante días.', en: 'Long-lasting alstroemerias in vibrant colors that brighten for days.' },
        price: 35.00,
        image: './assets/product27.png'
    },
    {
        id: 27,
        name: { es: 'Arreglo Sofisticado', en: 'Sophisticated Arrangement' },
        description: { es: 'Diseño refinado con flores premium en una composición sofisticada.', en: 'Refined design with premium flowers in a sophisticated composition.' },
        price: 72.00,
        image: './assets/product28.png'
    },
    {
        id: 28,
        name: { es: 'Ramo de Crisantemos', en: 'Chrysanthemum Bouquet' },
        description: { es: 'Crisantemos en múltiples colores que simbolizan longevidad y felicidad.', en: 'Chrysanthemums in multiple colors that symbolize longevity and happiness.' },
        price: 42.00,
        image: './assets/product29.png'
    },
    {
        id: 29,
        name: { es: 'Arreglo Exclusivo', en: 'Exclusive Arrangement' },
        description: { es: 'Una selección única de flores raras y exóticas en un arreglo exclusivo.', en: 'A unique selection of rare and exotic flowers in an exclusive arrangement.' },
        price: 90.00,
        image: './assets/product30.png'
    },
    {
        id: 30,
        name: { es: 'Ramo de Rosas Mixtas', en: 'Mixed Roses Bouquet' },
        description: { es: 'Una combinación armoniosa de rosas en diferentes colores y variedades.', en: 'A harmonious combination of roses in different colors and varieties.' },
        price: 52.00,
        image: './assets/product31.png'
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set copyright year
    const yearElement = document.getElementById('copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Initialize language
    const savedLang = localStorage.getItem('lumia-lang') || 'es';
    setLanguage(savedLang);

    // Language switcher
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            localStorage.setItem('lumia-lang', lang);
        });
    });

    // Generate catalog if on catalog page
    if (document.getElementById('products-grid')) {
        generateCatalog();
    }

    // Handle product page
    if (document.getElementById('product-name')) {
        loadProduct();
        initStickyPurchaseBar();
    }

    // Handle checkout form
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckout);
        loadCheckoutSummary();
    }
    
    // Mobile Hamburger Menu Toggle
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const body = document.body;
    
    if (hamburgerMenu && mobileMenuOverlay) {
        hamburgerMenu.addEventListener('click', function() {
            hamburgerMenu.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('active');
            body.classList.toggle('menu-open');
        });
        
        // Close menu when clicking on a link
        const mobileMenuLinks = mobileMenuOverlay.querySelectorAll('.mobile-menu-link');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });
        
        // Close menu when clicking outside
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
                hamburgerMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    }
    
    // Mobile Footer Accordion
    const footerHeadings = document.querySelectorAll('.footer-heading');
    footerHeadings.forEach(heading => {
        heading.addEventListener('click', function() {
            const parent = this.parentElement;
            const isActive = this.classList.contains('active');
            
            // Close all other sections
            footerHeadings.forEach(h => {
                if (h !== this) {
                    h.classList.remove('active');
                    h.parentElement.classList.remove('active');
                }
            });
            
            // Toggle current section
            if (isActive) {
                this.classList.remove('active');
                parent.classList.remove('active');
            } else {
                this.classList.add('active');
                parent.classList.add('active');
            }
        });
    });
});

// Language Functions
function setLanguage(lang) {
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            let text = translations[lang][key];
            // Replace {year} placeholder if exists
            if (text.includes('{year}')) {
                text = text.replace('{year}', new Date().getFullYear());
            }
            element.textContent = text;
        }
    });

    // Update product names and descriptions if on catalog or product page
    if (document.getElementById('products-grid')) {
        generateCatalog();
    }
    if (document.getElementById('product-name')) {
        loadProduct();
    }
    
    // Update sticky bar button text
    const stickyBuyBtn = document.querySelector('.sticky-buy-btn');
    if (stickyBuyBtn && translations[lang] && translations[lang]['product.buyNow']) {
        stickyBuyBtn.textContent = translations[lang]['product.buyNow'];
    }
}

// Micro-copy messages for product cards
const microCopyMessages = {
    es: [
        'Flores frescas seleccionadas a mano',
        'Arreglado con amor y cuidado artesanal',
        'Entrega el mismo día disponible',
        'Perfecto para expresar tus sentimientos',
        'Creado con pasión por nuestros floristas',
        'Flores que duran y emocionan',
        'Embalaje elegante incluido',
        'Selección diaria de las mejores flores'
    ],
    en: [
        'Fresh flowers hand-selected daily',
        'Arranged with love and artisanal care',
        'Same-day delivery available',
        'Perfect for expressing your feelings',
        'Created with passion by our florists',
        'Flowers that last and move hearts',
        'Elegant packaging included',
        'Daily selection of the finest flowers'
    ]
};

// Catalog Functions
function generateCatalog() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    const currentLang = localStorage.getItem('lumia-lang') || 'es';
    grid.innerHTML = '';

    products.forEach((product, index) => {
        const microCopy = microCopyMessages[currentLang][index % microCopyMessages[currentLang].length];
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name[currentLang]}" class="product-card-image">
            <div class="product-card-content">
                <h3 class="product-card-name">${product.name[currentLang]}</h3>
                <p class="product-card-description">${product.description[currentLang]}</p>
                <p class="product-card-microcopy">${microCopy}</p>
                <div class="product-card-footer">
                    <span class="product-card-price">€${product.price.toFixed(2)}</span>
                    <a href="./product.html?id=${product.id}" class="product-card-btn">${currentLang === 'es' ? 'Ver detalles' : 'View details'}</a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Product Page Functions
function loadProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;
    const product = products.find(p => p.id === productId) || products[0];
    const currentLang = localStorage.getItem('lumia-lang') || 'es';

    const nameElement = document.getElementById('product-name');
    const descElement = document.getElementById('product-description');
    const priceElement = document.getElementById('product-price');
    const imageElement = document.getElementById('product-image');

    if (nameElement) nameElement.textContent = product.name[currentLang];
    if (descElement) descElement.textContent = product.description[currentLang];
    if (priceElement) priceElement.textContent = `€${product.price.toFixed(2)}`;
    if (imageElement) {
        imageElement.src = product.image;
        imageElement.alt = product.name[currentLang];
    }
    
    // Update sticky bar content
    const stickyName = document.getElementById('sticky-product-name');
    const stickyPrice = document.getElementById('sticky-product-price');
    if (stickyName) stickyName.textContent = product.name[currentLang];
    if (stickyPrice) stickyPrice.textContent = `€${product.price.toFixed(2)}`;

    // Store product in sessionStorage for checkout
    sessionStorage.setItem('selectedProduct', JSON.stringify({
        id: product.id,
        name: product.name[currentLang],
        price: product.price,
        image: product.image
    }));
}

// Checkout Functions
function loadCheckoutSummary() {
    const productData = JSON.parse(sessionStorage.getItem('selectedProduct') || '{}');
    
    if (Object.keys(productData).length === 0) {
        // Default product if none selected
        const defaultProduct = products[0];
        const currentLang = localStorage.getItem('lumia-lang') || 'es';
        productData.id = defaultProduct.id;
        productData.name = defaultProduct.name[currentLang];
        productData.price = defaultProduct.price;
        productData.image = defaultProduct.image;
    }

    const summaryImage = document.getElementById('summary-image');
    const summaryName = document.getElementById('summary-name');
    const summaryPrice = document.getElementById('summary-price');
    const subtotal = document.getElementById('subtotal');
    const total = document.getElementById('total');

    if (summaryImage) summaryImage.src = productData.image;
    if (summaryName) summaryName.textContent = productData.name;
    if (summaryPrice) summaryPrice.textContent = `€${productData.price.toFixed(2)}`;
    if (subtotal) subtotal.textContent = `€${productData.price.toFixed(2)}`;
    if (total) total.textContent = `€${productData.price.toFixed(2)}`;
}

function handleCheckout(e) {
    e.preventDefault();
    alert('Gracias por tu pedido. Te contactaremos pronto para confirmar los detalles.\n\nThank you for your order. We will contact you soon to confirm the details.');
    // In a real application, this would send data to a server
}

// Sticky Purchase Bar Functionality (Mobile Only)
function initStickyPurchaseBar() {
    const stickyBar = document.getElementById('sticky-purchase-bar');
    const buyButton = document.querySelector('.product-actions .btn-primary');
    const whatsappFloat = document.querySelector('.whatsapp-float');
    
    if (!stickyBar || !buyButton) return;
    
    // Only activate on mobile
    if (window.innerWidth > 767) {
        stickyBar.style.display = 'none';
        return;
    }
    
    // Get the position of the buy button
    const buyButtonRect = buyButton.getBoundingClientRect();
    const buyButtonBottom = buyButtonRect.bottom + window.scrollY;
    
    let isVisible = false;
    
    function handleScroll() {
        // Only check on mobile
        if (window.innerWidth > 767) {
            stickyBar.classList.remove('visible');
            if (whatsappFloat) {
                whatsappFloat.style.bottom = '';
            }
            return;
        }
        
        const scrollPosition = window.scrollY + window.innerHeight;
        const shouldShow = scrollPosition > buyButtonBottom + 100; // Show 100px after button
        
        if (shouldShow && !isVisible) {
            stickyBar.classList.add('visible');
            isVisible = true;
            // Move WhatsApp button up
            if (whatsappFloat) {
                whatsappFloat.style.bottom = '70px';
            }
        } else if (!shouldShow && isVisible) {
            stickyBar.classList.remove('visible');
            isVisible = false;
            // Reset WhatsApp button position
            if (whatsappFloat) {
                whatsappFloat.style.bottom = '';
            }
        }
    }
    
    // Throttle scroll events for performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(handleScroll, 10);
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 767) {
            stickyBar.classList.remove('visible');
            if (whatsappFloat) {
                whatsappFloat.style.bottom = '';
            }
        } else {
            handleScroll();
        }
    });
    
    // Initial check
    handleScroll();
}
