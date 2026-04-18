const products = [
  // Breakfast
  {
    id: 1,
    name: "Masala Dosa",
    price: 60,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80",
    description: "Crispy golden dosa filled with spiced potato masala, served with coconut chutney and sambar. A classic South Indian breakfast favorite.",
    badge: "Today's Special"
  },
  {
    id: 2,
    name: "Idli Sambar",
    price: 40,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80",
    description: "Soft steamed rice cakes served with piping hot sambar and three varieties of chutney. Light, healthy, and delicious.",
    badge: null
  },
  {
    id: 3,
    name: "Pongal",
    price: 45,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
    description: "Traditional ven pongal made with rice and moong dal, seasoned with ghee, pepper, cumin, and cashews. Served with chutney and sambar.",
    badge: null
  },
  {
    id: 4,
    name: "Poori Masala",
    price: 55,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80",
    description: "Fluffy deep-fried pooris served with rich and spicy potato masala. A hearty breakfast that satisfies every time.",
    badge: null
  },

  // Meals
  {
    id: 5,
    name: "South Indian Meals",
    price: 120,
    category: "meals",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
    description: "A complete traditional South Indian meal with rice, sambar, rasam, kootu, poriyal, papad, pickle, and dessert. Pure comfort food.",
    badge: "Best Seller"
  },
  {
    id: 6,
    name: "Chapati with Kurma",
    price: 70,
    category: "meals",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
    description: "Soft wheat chapatis served with aromatic mixed vegetable kurma. A wholesome and filling meal option.",
    badge: null
  },
  {
    id: 7,
    name: "Lemon Rice",
    price: 65,
    category: "meals",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80",
    description: "Tangy and flavorful lemon rice with mustard seeds, curry leaves, groundnuts, and a dash of turmeric. Served with papad and pickle.",
    badge: null
  },
  {
    id: 8,
    name: "Curd Rice",
    price: 55,
    category: "meals",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
    description: "Cooling and comforting curd rice tempered with mustard seeds, green chili, ginger, and pomegranate. Perfect for hot days.",
    badge: null
  },

  // Snacks
  {
    id: 9,
    name: "Bajji Plate",
    price: 50,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80",
    description: "Crispy hot bajjis made with onion, green chili, and banana, coated in spiced gram flour batter and deep fried to perfection.",
    badge: "Today's Special"
  },
  {
    id: 10,
    name: "Samosa (2 pcs)",
    price: 30,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=600&q=80",
    description: "Crispy triangular pastries stuffed with spiced potato and green peas. Served with mint chutney and tamarind sauce.",
    badge: null
  },
  {
    id: 11,
    name: "Vada",
    price: 25,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80",
    description: "Crunchy lentil donuts seasoned with onion, green chili, curry leaves, and black pepper. Best enjoyed with coconut chutney.",
    badge: null
  },
  {
    id: 12,
    name: "Upma",
    price: 40,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80",
    description: "Savory semolina upma cooked with mixed vegetables, mustard seeds, and curry leaves. Light and satisfying evening snack.",
    badge: null
  },

  // Beverages
  {
    id: 13,
    name: "Filter Coffee",
    price: 20,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    description: "Authentic South Indian filter coffee made with freshly brewed decoction and frothy milk. The perfect start to your day.",
    badge: "Best Seller"
  },
  {
    id: 14,
    name: "Masala Tea",
    price: 15,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80",
    description: "Aromatic chai brewed with ginger, cardamom, cinnamon, and cloves. Warming and refreshing in every sip.",
    badge: null
  },
  {
    id: 15,
    name: "Mango Lassi",
    price: 60,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80",
    description: "Thick, creamy mango lassi blended with fresh Alphonso mangoes and yogurt. A tropical treat that refreshes instantly.",
    badge: "Today's Special"
  },
  {
    id: 16,
    name: "Fresh Lime Soda",
    price: 35,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1523371054106-bbf80586c38c?w=600&q=80",
    description: "Chilled lime soda with a balance of sweet and salty. A perfect thirst quencher on a hot Trichy afternoon.",
    badge: null
  }
];
/* ===== STATE ===== */
let currentProduct = null;
let inactivityTimer = null;
const WHATSAPP_NUMBER = '918608865811';
const CAFE_NAME = 'Sri Saraswathi Cafe';

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  // Hide loader
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
  }, 2000);

  renderFeaturedDishes();
  renderMenuGrid('all');
  setupScrollAnimations();
  setupNavbar();
  setupCategoryFilters();
  setupInactivityTimer();
  loadDarkMode();
});

/* ===== PAGE NAVIGATION ===== */
function showPage(page) {
  const home = document.getElementById('home-page');
  const menu = document.getElementById('menu-page');
  const navHome = document.getElementById('nav-home');
  const navMenu = document.getElementById('nav-menu');

  if (page === 'home') {
    home.style.display = 'block';
    menu.style.display = 'none';
    navHome.classList.add('active');
    navMenu.classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    home.style.display = 'none';
    menu.style.display = 'block';
    navHome.classList.remove('active');
    navMenu.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/* ===== RENDER FEATURED DISHES (home page - first 4 badge items) ===== */
function renderFeaturedDishes() {
  const grid = document.getElementById('featuredGrid');
  const featured = products.filter(p => p.badge);
  const extras = products.filter(p => !p.badge).slice(0, 8 - featured.length);
  const list = [...featured, ...extras].slice(0, 8);

  grid.innerHTML = list.map(p => `
    <div class="dish-card fade-in">
      <div class="dish-card-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="dish-badge ${p.badge === "Today's Special" ? 'badge-special' : 'badge-bestseller'}">${p.badge}</span>` : ''}
      </div>
      <div class="dish-card-body">
        <h3 class="dish-name">${p.name}</h3>
        <p class="dish-desc">${p.description.substring(0, 80)}...</p>
        <div class="dish-footer">
          <div class="dish-price">₹${p.price} <span>/plate</span></div>
          <button class="dish-order-btn" onclick="openOrderForm(products.find(x=>x.id===${p.id}))">Order 🚀</button>
        </div>
      </div>
    </div>
  `).join('');
  setupScrollAnimations();
}

/* ===== RENDER MENU GRID ===== */
function renderMenuGrid(category) {
  const grid = document.getElementById('menuGrid');
  const filtered = category === 'all' ? products : products.filter(p => p.category === category);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card fade-in" data-id="${p.id}">
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="product-badge ${p.badge === "Today's Special" ? 'badge-special' : 'badge-bestseller'}">${p.badge}</span>` : ''}
      </div>
      <div class="product-body">
        <h3 class="product-name">${p.name}</h3>
        <span class="product-category">${capitalize(p.category)}</span>
        <div class="product-footer">
          <div class="product-price">₹${p.price}</div>
          <div class="product-actions">
            <button class="btn-view" onclick="openViewModal(products.find(x=>x.id===${p.id}))">👁️ View</button>
            <button class="btn-ship" title="Order via WhatsApp" onclick="triggerShipAnim(this, products.find(x=>x.id===${p.id}))">🚚</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
  setupScrollAnimations();
}

/* ===== CATEGORY FILTERS ===== */
function setupCategoryFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenuGrid(btn.dataset.cat);
    });
  });
}

function filterProducts(cat) {
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === cat);
  });
  renderMenuGrid(cat);
}

/* ===== SHIP ANIMATION ===== */
function triggerShipAnim(btn, product) {
  const rect = btn.getBoundingClientRect();
  const dot = document.createElement('div');
  dot.className = 'cart-anim';
  dot.style.cssText = `left:${rect.left + rect.width/2}px;top:${rect.top + rect.height/2}px;`;
  document.body.appendChild(dot);
  dot.addEventListener('animationend', () => {
    dot.remove();
    openOrderForm(product);
  });
}

/* ===== VIEW MODAL ===== */
function openViewModal(product) {
  currentProduct = product;
  document.getElementById('modalImg').src = product.image;
  document.getElementById('modalImg').alt = product.name;
  document.getElementById('modalTitle').textContent = product.name;
  document.getElementById('modalPrice').textContent = `₹${product.price}`;
  document.getElementById('modalDesc').textContent = product.description;

  const badge = document.getElementById('modalBadge');
  if (product.badge) {
    badge.textContent = product.badge;
    badge.style.display = 'inline-block';
    badge.className = `modal-badge ${product.badge === "Today's Special" ? 'badge-special' : 'badge-bestseller'}`;
  } else {
    badge.style.display = 'none';
  }

  document.getElementById('viewModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e.target === document.getElementById('viewModal')) {
    document.getElementById('viewModal').classList.remove('open');
    document.body.style.overflow = '';
  }
}

function openOrderFormFromModal() {
  document.getElementById('viewModal').classList.remove('open');
  openOrderForm(currentProduct);
}

/* ===== ORDER FORM ===== */
function openOrderForm(product) {
  currentProduct = product;
  document.getElementById('formProductImg').src = product.image;
  document.getElementById('formProductImg').alt = product.name;
  document.getElementById('formProductName').textContent = product.name;
  document.getElementById('formProductPrice').textContent = `₹${product.price}`;

  // Clear form
  document.getElementById('custName').value = '';
  document.getElementById('custMobile').value = '';
  document.getElementById('custAddress').value = '';

  document.getElementById('orderFormOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeFormOverlay(e) {
  if (e.target === document.getElementById('orderFormOverlay')) {
    document.getElementById('orderFormOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
}

function submitOrder() {
  const name = document.getElementById('custName').value.trim();
  const mobile = document.getElementById('custMobile').value.trim();
  const address = document.getElementById('custAddress').value.trim();

  if (!name || !mobile || !address) {
    shakeForm();
    alert('⚠️ Please fill in all fields to continue.');
    return;
  }

  if (!/^[6-9]\d{9}$/.test(mobile.replace(/[\s\+\-]/g, '').replace(/^91/, ''))) {
    alert('⚠️ Please enter a valid Indian mobile number.');
    return;
  }

  const message = `🛒 *New Order from ${CAFE_NAME}*

👤 *Name:* ${name}
📞 *Mobile Number:* ${mobile}
📍 *Address:* ${address}

🍽️ *Product Details:*
🍚 *Product Name:* ${currentProduct.name}
💵 *Product Price:* ₹${currentProduct.price}
📇 *Category:* ${capitalize(currentProduct.category)}
🔗 *Product Image:* ${currentProduct.image}

📝 Please confirm my order. Thank you! `;

  const encodedMsg = encodeURIComponent(message);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;

  document.getElementById('orderFormOverlay').classList.remove('open');
  document.body.style.overflow = '';

  window.open(waUrl, '_blank');
}

function shakeForm() {
  const sheet = document.querySelector('.form-sheet');
  sheet.style.animation = 'shake 0.4s ease';
  sheet.addEventListener('animationend', () => sheet.style.animation = '', { once: true });
}

/* Add shake animation */
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `@keyframes shake {
  0%,100%{transform:translateY(0)}
  20%{transform:translateY(-5px)}
  40%{transform:translateY(5px)}
  60%{transform:translateY(-3px)}
  80%{transform:translateY(3px)}
}`;
document.head.appendChild(shakeStyle);

/* ===== DARK MODE ===== */
function toggleDark() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  document.getElementById('darkToggle').textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('darkMode', isDark);
}

function loadDarkMode() {
  const saved = localStorage.getItem('darkMode');
  if (saved === 'true') {
    document.body.classList.add('dark');
    document.getElementById('darkToggle').textContent = '☀️';
  }
  document.getElementById('darkToggle').addEventListener('click', toggleDark);
}

/* ===== NAVBAR ===== */
function setupNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('open');
  });
}

function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

/* ===== SCROLL ANIMATIONS ===== */
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in, .fade-in-left').forEach(el => {
    observer.observe(el);
  });
}

/* ===== INACTIVITY POPUP ===== */
function setupInactivityTimer() {
  const resetTimer = () => {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
      document.getElementById('inactivityPopup').classList.add('show');
    }, 20000); // 20 seconds inactivity
  };

  ['mousemove', 'keydown', 'touchstart', 'scroll', 'click'].forEach(e => {
    document.addEventListener(e, () => {
      document.getElementById('inactivityPopup').classList.remove('show');
      resetTimer();
    });
  });

  resetTimer();
}

/* ===== HELPERS ===== */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
