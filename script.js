// --- CONFIGURAÇÃO ---
const WHATSAPP_NUMBER = "5561999999999";

// Nome do arquivo do catálogo (corrige inconsistência entre "imoveis.html" e "imóveis.html")
const CATALOG_PAGE = "imóveis.html";

// --- 1. HERO SLIDER (Fundo Automático) ---
let currentHeroSlide = 0;
const heroSlides = document.querySelectorAll(".hero-slide");

function nextHeroSlide() {
  if (heroSlides.length === 0) return;
  heroSlides[currentHeroSlide].classList.remove("active");
  currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
  heroSlides[currentHeroSlide].classList.add("active");
}
if (heroSlides.length > 0) setInterval(nextHeroSlide, 5000);

// --- 2. PLANTAS SLIDER (Manual com Setas) ---
let currentPlanIndex = 0;
const planSlides = document.querySelectorAll(".plan-slide");

function changePlan(direction) {
  if (planSlides.length === 0) return;

  planSlides[currentPlanIndex].classList.remove("active");
  currentPlanIndex += direction;

  if (currentPlanIndex >= planSlides.length) currentPlanIndex = 0;
  else if (currentPlanIndex < 0) currentPlanIndex = planSlides.length - 1;

  planSlides[currentPlanIndex].classList.add("active");
}

// --- 3. HEADER SCROLL EFFECT ---
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (!header) return;

  if (window.scrollY > 50) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

// --- 4. FUNÇÕES DE REDIRECIONAMENTO ---
function goToSearch() {
  const locationEl = document.getElementById("location");
  const location = locationEl ? locationEl.value : "";

  if (location) {
    window.location.href = `${CATALOG_PAGE}?local=${encodeURIComponent(location)}`;
  } else {
    window.location.href = CATALOG_PAGE;
  }
}

function openWhatsApp() {
  const text = "Olá! Vim pelo site e gostaria de mais informações sobre os imóveis.";
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}
