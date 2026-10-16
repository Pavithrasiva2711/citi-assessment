/**
 * Citigold Private Client - Screen 4 (Mobile View) JavaScript
 * Interactivity: Mobile menu drawer, Solutions card slider, Disabled other tabs, Mobile footer accordions
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initSolutionsSlider();
  initDisabledOfferTabs();
  initMobileFooterAccordions();
  initAskAiAction();
});

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileNavDrawer');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isHidden = drawer.hasAttribute('hidden');
    if (isHidden) {
      drawer.removeAttribute('hidden');
      toggleBtn.classList.add('is-active');
    } else {
      drawer.setAttribute('hidden', 'true');
      toggleBtn.classList.remove('is-active');
    }
  });
}

/**
 * Solutions 3-Card Carousel/Slider for Mobile
 */
function initSolutionsSlider() {
  const cards = document.querySelectorAll('.mobile-solution-card');
  const dots = document.querySelectorAll('.slider-dot');

  if (!cards.length || !dots.length) return;

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetIndex = parseInt(dot.getAttribute('data-index'), 10);

      // Update dots
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');

      // Update cards
      cards.forEach(card => {
        const slideIndex = parseInt(card.getAttribute('data-slide'), 10);
        if (slideIndex === targetIndex) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    });
  });
}

/**
 * Offer Tabs: Welcome Offers is active; Referral Rewards & Other Offers are strictly non-clickable/disabled
 */
function initDisabledOfferTabs() {
  const referralBtn = document.getElementById('tab-referral');
  const otherBtn = document.getElementById('tab-other');

  // Prevent any action on click as requested
  [referralBtn, otherBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        // Do nothing on click
      });
    }
  });
}

/**
 * Mobile Footer Accordions
 */
function initMobileFooterAccordions() {
  const cols = document.querySelectorAll('.mobile-footer-col');

  cols.forEach(col => {
    const toggle = col.querySelector('.mobile-footer-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        col.classList.toggle('is-open');
      });
    }
  });
}

/**
 * Ask AI interaction feedback
 */
function initAskAiAction() {
  const askAiBtn = document.getElementById('mobileAskAiBtn');
  if (!askAiBtn) return;

  askAiBtn.addEventListener('click', () => {
    askAiBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      askAiBtn.style.transform = '';
    }, 150);
  });
}
