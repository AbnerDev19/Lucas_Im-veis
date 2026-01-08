// --- CONFIGURAÇÃO ---
const WHATSAPP_NUMBER = "5561999999999"; 

// --- 1. HERO SLIDER (Fundo Automático) ---
let currentHeroSlide = 0;
const heroSlides = document.querySelectorAll('.hero-slide');

function nextHeroSlide() {
    if(heroSlides.length === 0) return;
    heroSlides[currentHeroSlide].classList.remove('active');
    currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
    heroSlides[currentHeroSlide].classList.add('active');
}
if (heroSlides.length > 0) setInterval(nextHeroSlide, 5000);


// --- 2. PLANTAS SLIDER (Manual com Setas) ---
let currentPlanIndex = 0;
const planSlides = document.querySelectorAll('.plan-slide');

function changePlan(direction) {
    if (planSlides.length === 0) return;
    
    // Remove classe active do atual
    planSlides[currentPlanIndex].classList.remove('active');
    
    // Calcula novo índice
    currentPlanIndex += direction;
    
    // Loop infinito (se passar do último, volta pro primeiro e vice-versa)
    if (currentPlanIndex >= planSlides.length) {
        currentPlanIndex = 0;
    } else if (currentPlanIndex < 0) {
        currentPlanIndex = planSlides.length - 1;
    }
    
    // Adiciona active no novo
    planSlides[currentPlanIndex].classList.add('active');
}


// --- 3. HEADER SCROLL EFFECT ---
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// --- 4. FUNÇÕES DE REDIRECIONAMENTO ---
function goToSearch() {
    const location = document.getElementById('location').value;
    
    if (location) {
        window.location.href = `imoveis.html?local=${encodeURIComponent(location)}`;
    } else {
        window.location.href = 'imoveis.html';
    }
}

function openWhatsApp() {
    const text = "Olá! Vim pelo site e gostaria de mais informações sobre os imóveis.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}