/**
 * Citigold Private Client - Screen 1 JavaScript
 * Interactivity: Tab navigation, Carousel dots, Smooth scrolling, and micro-interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initOfferTabs();
  initSolutionsCarousel();
  initSmoothScroll();
  initAskAiAction();
  initOnboardingAccordion();
});

/**
 * Initializes the Offer Tabs switcher in the Offers & Rebates section
 */
function initOfferTabs() {
  const tabButtons = document.querySelectorAll('.offer-tab-btn');
  const tabPanels = document.querySelectorAll('.offer-tab-panel');

  if (!tabButtons.length || !tabPanels.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetPanelId = btn.getAttribute('data-target');

      // Update button active states and aria-selected
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Update panels visibility
      tabPanels.forEach(panel => {
        if (panel.id === targetPanelId) {
          panel.classList.add('active');
          panel.removeAttribute('hidden');
        } else {
          panel.classList.remove('active');
          panel.setAttribute('hidden', 'true');
        }
      });
    });
  });
}

/**
 * Initializes the carousel dots in the Solutions section
 */
function initSolutionsCarousel() {
  const dots = document.querySelectorAll('.carousel-dot');
  if (!dots.length) return;

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      dots.forEach(d => {
        d.classList.remove('active');
        d.setAttribute('aria-selected', 'false');
      });
      dot.classList.add('active');
      dot.setAttribute('aria-selected', 'true');

      // For mobile or scrolling carousel, we can smoothly scroll into view
      const grid = document.getElementById('solutionsSlider');
      if (grid && window.innerWidth <= 1024) {
        const columns = grid.querySelectorAll('.solution-column');
        if (columns[index]) {
          columns[index].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
        }
      }
    });
  });
}

/**
 * Smooth scrolling for navigation links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#apply' || targetId === '#logon') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Ask AI interaction handler
 */
function initAskAiAction() {
  const askAiBtn = document.getElementById('askAiBtn');
  if (!askAiBtn) return;

  askAiBtn.addEventListener('click', () => {
    // Interactive feedback
    askAiBtn.style.transform = 'scale(0.96)';
    setTimeout(() => {
      askAiBtn.style.transform = '';
    }, 150);
  });
}

/**
 * 3-Step Onboarding Accordion handler
 */
function initOnboardingAccordion() {
  const stepItems = document.querySelectorAll('.step-accordion-item');
  if (!stepItems.length) return;

  stepItems.forEach(item => {
    const btn = item.querySelector('.step-header-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        item.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', !isOpen);
      });
    }
  });
}

