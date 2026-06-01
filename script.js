/* =========================
   FOODIE — App Logic
   ========================= */
// FOOD DATA

const FOODS = [
{
    id:1,
    name:"Margherita Pizza",
    cat:"pizza",
    price:12.99,
    rating:4.8,
    reviews:230,
    desc:"Classic with tomato, mozzarella & fresh basil.",
    img:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
    tag:"Popular"
},
{
    id:2,
    name:"Pepperoni Pizza",
    cat:"pizza",
    price:14.99,
    rating:4.9,
    reviews:412,
    desc:"Loaded with pepperoni and melting mozzarella.",
    img:"https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80",
    tag:"Hot"
},
{
    id:3,
    name:"BBQ Chicken Pizza",
    cat:"pizza",
    price:15.49,
    rating:4.7,
    reviews:188,
    desc:"Smoky BBQ sauce with grilled chicken & onions.",
    img:"https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80"
},
{
    id:4,
    name:"Classic Cheeseburger",
    cat:"burger",
    price:9.99,
    rating:4.8,
    reviews:520,
    desc:"Juicy beef patty, cheddar, lettuce & special sauce.",
    img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    tag:"Best Seller"
},
{
    id:5,
    name:"Double Bacon Burger",
    cat:"burger",
    price:12.49,
    rating:4.9,
    reviews:340,
    desc:"Two patties, crispy bacon & smoky cheese.",
    img:"https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80"
},
{
    id:6,
    name:"Spicy Chicken Burger",
    cat:"burger",
    price:10.49,
    rating:4.6,
    reviews:215,
    desc:"Crispy chicken with hot sauce & slaw.",
    img:"https://images.unsplash.com/photo-1606131731446-5568d87113aa?w=600&q=80"
},
{
    id:7,
    name:"Chicken Biryani",
    cat:"biryani",
    price:13.99,
    rating:4.9,
    reviews:610,
    desc:"Aromatic basmati rice with tender chicken & spices.",
    img:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
    tag:"Chef's Pick"
},
{   
    id:8,
    name:"Mutton Biryani",
    cat:"biryani",
    price:16.99,
    rating:4.8,
    reviews:380,
    desc:"Slow-cooked mutton in fragrant basmati rice.",
    img:"https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&q=80"
},
{
    id:9,
    name:"Veg Biryani",
    cat:"biryani",
    price:11.49,
    rating:4.5,
    reviews:172,
    desc:"Mixed veggies in aromatic basmati rice.",
    img:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80"
},
{
    id:10,
    name:"Fresh Lemonade",
    cat:"drinks",
    price:3.99,
    rating:4.6,
    reviews:90,
    desc:"Cool lemonade with mint & a hint of ginger.",
    img:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80"
},
{
    id:11,
    name:"Iced Coffee",
    cat:"drinks",
    price:4.49,
    rating:4.7,
    reviews:155,
    desc:"Cold brew with cream & a touch of vanilla.",
    img:"https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=80"
},
{
    id:12,
    name:"Mango Smoothie",
    cat:"drinks",
    price:5.49,
    rating:4.8,
    reviews:120,
    desc:"Thick smoothie with fresh mango & yogurt.",
    img:"https://images.unsplash.com/photo-1546173159-315724a31696?w=600&q=80",
    tag:"New"
},
{
    id:13,
    name:"Chocolate Lava Cake",
    cat:"desserts",
    price:6.99,
    rating:4.9,
    reviews:280,
    desc:"Warm cake with molten chocolate center.",
    img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    tag:"Loved"
},
{
    id:14,
    name:"New York Cheesecake",
    cat:"desserts",
    price:6.49,
    rating:4.7,
    reviews:198,
    desc:"Creamy cheesecake with berry compote.",
    img:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80"
},
{
    id:15,
    name:"Vanilla Ice Cream",
    cat:"desserts",
    price:4.99,
    rating:4.5,
    reviews:140,
    desc:"Classic vanilla with toppings of your choice.",
    img:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80"
},
];
const REVIEWS = [
{
    name:"Sarah Johnson",
    role:"Food Blogger",
    img:"https://i.pravatar.cc/120?img=47",
    rating:5,
    text:"Foodie has completely changed how I order in. The quality is restaurant-grade and delivery is always lightning fast. My go-to for every craving!"
},
{
    name:"Michael Chen",
    role:"Regular Customer",
    img:"https://i.pravatar.cc/120?img=12",
    rating:5,
    text:"The biryani is absolutely authentic and the pizzas rival my favorite Italian spots. Plus the app is beautifully designed — ordering is a joy."
},
{
    name:"Emma Williams",
    role:"Foodie Enthusiast",
    img:"https://i.pravatar.cc/120?img=45",
    rating:5,
    text:"I've tried every delivery app out there, and nothing comes close to Foodie. The chefs really care about the food they send out."
},
{
    name:"David Martinez",
    role:"Office Manager",
    img:"https://i.pravatar.cc/120?img=33",
    rating:5,
    text:"We use Foodie for all our office lunches. Reliable, delicious, and the team loves it. The variety keeps everyone happy every single day."
},
];

// LOADER
window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("loader").classList.add("hide"), 600);
});

// THEME
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme") || "dark";
document.body.dataset.theme = savedTheme;
themeToggle.innerHTML = savedTheme === "dark" ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
themeToggle.addEventListener("click", () => {
  const t = document.body.dataset.theme === "dark" ? "light" : "dark";
  document.body.dataset.theme = t;
  localStorage.setItem("theme", t);
  themeToggle.innerHTML = t === "dark" ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
});

// OFFER BANNER
document.querySelector(".offer-close").addEventListener("click", e => e.target.closest(".offer-banner").classList.add("hide"));

// NAVBAR
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
  document.getElementById("backToTop").classList.toggle("show", window.scrollY > 500);
});

// MOBILE MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.innerHTML = navLinks.classList.contains("open") ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
});
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  navLinks.classList.remove("open");
  hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
}));

// ACTIVE NAV ON SCROLL
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const y = window.scrollY + 120;
  sections.forEach(s => {
    if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
      document.querySelectorAll(".nav-link").forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + s.id));
    }
  });
});

// SEARCH
const searchToggle = document.getElementById("searchToggle");
const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");
searchToggle.addEventListener("click", () => {
  searchBar.classList.toggle("open");
  if (searchBar.classList.contains("open")) setTimeout(() => searchInput.focus(), 200);
});
searchInput.addEventListener("input", () => { activeFilter = "all"; document.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("active", b.dataset.filter === "all")); renderFoods(); });

// FOOD RENDER
const foodGrid = document.getElementById("foodGrid");
const popularGrid = document.getElementById("popularGrid");
let activeFilter = "all";
function starHTML(rating) {
  let s = "";
  for (let i = 1; i <= 5; i++) s += `<i class="fa-${i <= Math.round(rating) ? "solid" : "regular"} fa-star"></i>`;
  return s;
}
function foodCardHTML(f) {
  const favs = JSON.parse(localStorage.getItem("favs") || "[]");
  const isFav = favs.includes(f.id);
  return `
    <article class="food-card reveal" data-cat="${f.cat}">
      <div class="food-img">
        ${f.tag ? `<span class="food-tag">${f.tag}</span>` : ""}
        <button class="food-fav ${isFav ? "active" : ""}" data-fav="${f.id}" aria-label="Favorite"><i class="fa-${isFav ? "solid" : "regular"} fa-heart"></i></button>
        <img src="${f.img}" alt="${f.name}" loading="lazy" />
      </div>
      <div class="food-body">
        <div class="food-rating">${starHTML(f.rating)} <span>${f.rating} (${f.reviews})</span></div>
        <h3 class="food-name">${f.name}</h3>
        <p class="food-desc">${f.desc}</p>
        <div class="food-foot">
          <span class="food-price">$${f.price.toFixed(2)}</span>
          <button class="food-add" data-add="${f.id}"><i class="fa-solid fa-plus"></i> Add</button>
        </div>
      </div>
    </article>`;
}
function renderFoods() {
  const q = searchInput.value.trim().toLowerCase();
  let list = FOODS.filter(f => (activeFilter === "all" || f.cat === activeFilter) && (q === "" || f.name.toLowerCase().includes(q) || f.cat.includes(q)));
  foodGrid.innerHTML = list.length ? list.map(foodCardHTML).join("") : `<div class="empty"><i class="fa-solid fa-utensils" style="font-size:48px;display:block;margin-bottom:14px;opacity:.3"></i>No dishes found</div>`;
  observeReveals();
  attachFoodEvents();
}
function renderPopular() {
  const top = [...FOODS].sort((a, b) => b.rating - a.rating).slice(0, 6);
  popularGrid.innerHTML = top.map(foodCardHTML).join("");
  observeReveals();
  attachFoodEvents();
}
function attachFoodEvents() {
  document.querySelectorAll("[data-add]").forEach(b => b.onclick = () => addToCart(+b.dataset.add));
  document.querySelectorAll("[data-fav]").forEach(b => b.onclick = () => toggleFav(+b.dataset.fav, b));
}
function toggleFav(id, btn) {
  let favs = JSON.parse(localStorage.getItem("favs") || "[]");
  if (favs.includes(id)) { favs = favs.filter(x => x !== id); btn.classList.remove("active"); btn.innerHTML = '<i class="fa-regular fa-heart"></i>'; toast("Removed from favorites"); }
  else { favs.push(id); btn.classList.add("active"); btn.innerHTML = '<i class="fa-solid fa-heart"></i>'; toast("Added to favorites"); }
  localStorage.setItem("favs", JSON.stringify(favs));
}

// FILTERS
document.querySelectorAll(".filter-btn").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".filter-btn").forEach(x => x.classList.remove("active"));
  b.classList.add("active");
  activeFilter = b.dataset.filter;
  renderFoods();
}));

// CART
let cart = JSON.parse(localStorage.getItem("cart") || "[]");
const cartPanel = document.getElementById("cartPanel");
const overlay = document.getElementById("overlay");
const cartItemsEl = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
document.getElementById("cartToggle").onclick = () => openCart();
document.getElementById("cartClose").onclick = () => closeCart();
overlay.onclick = () => { closeCart(); };
function openCart() { cartPanel.classList.add("open"); overlay.classList.add("open"); }
function closeCart() { cartPanel.classList.remove("open"); overlay.classList.remove("open"); }
function addToCart(id) {
  const f = FOODS.find(x => x.id === id);
  const ex = cart.find(c => c.id === id);
  if (ex) ex.qty++; else cart.push({ id, qty: 1 });
  saveCart();
  toast(`${f.name} added to cart`);
}
function changeQty(id, delta) {
  const it = cart.find(c => c.id === id);
  if (!it) return;
  it.qty += delta;
  if (it.qty <= 0) cart = cart.filter(c => c.id !== id);
  saveCart();
}
function removeItem(id) { cart = cart.filter(c => c.id !== id); saveCart(); toast("Item removed"); }
function saveCart() { localStorage.setItem("cart", JSON.stringify(cart)); renderCart(); }
function renderCart() {
  cartCount.textContent = cart.reduce((s, c) => s + c.qty, 0);
  if (!cart.length) {
    cartItemsEl.innerHTML = `<div class="cart-empty"><i class="fa-solid fa-bag-shopping"></i><p>Your cart is empty</p></div>`;
    cartTotal.textContent = "$0.00";
    return;
  }
  let total = 0;
  cartItemsEl.innerHTML = cart.map(c => {
    const f = FOODS.find(x => x.id === c.id);
    const sub = f.price * c.qty; total += sub;
    return `<div class="cart-item">
      <img src="${f.img}" alt="${f.name}" />
      <div class="cart-item-body">
        <div>
          <div class="cart-item-name">${f.name}</div>
          <div class="cart-item-price">$${sub.toFixed(2)}</div>
        </div>
        <div class="cart-item-foot">
          <div class="qty">
            <button onclick="changeQty(${c.id},-1)">−</button>
            <span>${c.qty}</span>
            <button onclick="changeQty(${c.id},1)">+</button>
          </div>
          <button class="cart-remove" onclick="removeItem(${c.id})"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    </div>`;
  }).join("");
  cartTotal.textContent = "$" + total.toFixed(2);
}
window.changeQty = changeQty;
window.removeItem = removeItem;
document.getElementById("checkoutBtn").onclick = () => {
  if (!cart.length) return toast("Your cart is empty");
  toast("Order placed! 🎉 Thank you");
  cart = []; saveCart(); closeCart();
};

// REVIEW SLIDER
const sliderTrack = document.getElementById("sliderTrack");
const sliderDots = document.getElementById("sliderDots");
let reviewIdx = 0;
sliderTrack.innerHTML = REVIEWS.map(r => `
  <div class="review-card">
    <div class="review-stars">${starHTML(r.rating)}</div>
    <p class="review-text">"${r.text}"</p>
    <div class="review-author">
      <img src="${r.img}" alt="${r.name}" />
      <div><strong>${r.name}</strong><span>${r.role}</span></div>
    </div>
  </div>`).join("");
sliderDots.innerHTML = REVIEWS.map((_, i) => `<button class="dot${i === 0 ? " active" : ""}" data-i="${i}"></button>`).join("");
function goReview(i) {
  reviewIdx = (i + REVIEWS.length) % REVIEWS.length;
  sliderTrack.style.transform = `translateX(-${reviewIdx * 100}%)`;
  document.querySelectorAll(".dot").forEach((d, x) => d.classList.toggle("active", x === reviewIdx));
}
document.getElementById("prevReview").onclick = () => goReview(reviewIdx - 1);
document.getElementById("nextReview").onclick = () => goReview(reviewIdx + 1);
document.querySelectorAll(".dot").forEach(d => d.onclick = () => goReview(+d.dataset.i));
setInterval(() => goReview(reviewIdx + 1), 6000);

// COUNTERS
function animateCounters() {
  document.querySelectorAll("[data-counter]").forEach(el => {
    if (el.dataset.done) return;
    const target = +el.dataset.counter;
    let cur = 0;
    const step = Math.max(1, target / 50);
    const tick = () => {
      cur += step;
      if (cur >= target) { el.textContent = target; el.dataset.done = "1"; }
      else { el.textContent = Math.floor(cur); requestAnimationFrame(tick); }
    };
    tick();
  });
}

// REVEAL OBSERVER
let observer;
function observeReveals() {
  if (!observer) {
    observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); observer.unobserve(e.target); } });
    }, { threshold: 0.12 });
  }
  document.querySelectorAll(".reveal:not(.in)").forEach(el => observer.observe(el));
}

// COUNTERS observer
const cObs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { animateCounters(); cObs.disconnect(); } }), { threshold: .3 });
const heroStats = document.querySelector(".hero-stats");
if (heroStats) cObs.observe(heroStats);

// BACK TO TOP / FLOAT DELIVERY
document.getElementById("backToTop").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
document.getElementById("floatDelivery").onclick = () => document.getElementById("menu").scrollIntoView({ behavior: "smooth" });

// CONTACT & NEWSLETTER
document.getElementById("contactForm").addEventListener("submit", e => { e.preventDefault(); e.target.reset(); toast("Message sent! We'll be in touch"); });
document.getElementById("newsletterForm").addEventListener("submit", e => { e.preventDefault(); e.target.reset(); toast("Subscribed! Watch your inbox"); });

// TOAST
let toastTimer;
function toast(msg) {
  const t = document.getElementById("toast");
  t.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${msg}`;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
}

// INIT
document.getElementById("year").textContent = new Date().getFullYear();
renderFoods();
renderPopular();
renderCart();
observeReveals();