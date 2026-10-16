/**
 * Citigold Private Client - Screen 6 Landing Page
 * Interactive Welcome Offers Calculator & Stepper Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const fundSlider = document.getElementById('fundSlider');
  const fundAmountDisplay = document.getElementById('fundAmountDisplay');
  const totalRebateDisplay = document.getElementById('totalRebateDisplay');
  const newFundsRebateDisplay = document.getElementById('newFundsRebateDisplay');
  const investmentRebateDisplay = document.getElementById('investmentRebateDisplay');
  const btnNextStep = document.getElementById('btnNextStep');
  const stepperItems = document.querySelectorAll('.stepper-item');
  const stepperConnectors = document.querySelectorAll('.stepper-connector');

  // Base welcome offer fixed privilege bonus
  const BASE_WELCOME_PRIVILEGE = 66500;
  let currentStep = 1;
  let investmentAddon = 0;

  // Format currency with HK$ prefix and commas
  function formatCurrency(amount) {
    return 'HK$' + Number(amount).toLocaleString('en-US');
  }

  // Format number with commas
  function formatNumber(amount) {
    return Number(amount).toLocaleString('en-US');
  }

  // Calculate New Funds Cash Rebate based on Citi Private Client tiers
  function calculateFundRebate(amount) {
    if (amount >= 40000000) return 160000;
    if (amount >= 30000000) return 120000;
    if (amount >= 15000000) return 60000;
    if (amount >= 8000000)  return 40000;
    if (amount >= 4500000)  return 30000;
    if (amount >= 3000000)  return 20000;
    if (amount >= 1500000)  return 10000;
    return 0;
  }

  // Update slider fill and displays
  function updateCalculator() {
    if (!fundSlider) return;

    const val = Number(fundSlider.value);
    const min = Number(fundSlider.min) || 1500000;
    const max = Number(fundSlider.max) || 6000000;

    // Update Slider Track Color Gradient
    const percent = ((val - min) / (max - min)) * 100;
    fundSlider.style.background = `linear-gradient(to right, #2a3138 0%, #2a3138 ${percent}%, #cfd5dc ${percent}%, #cfd5dc 100%)`;

    // Update Selected Fund Amount
    if (fundAmountDisplay) {
      fundAmountDisplay.textContent = formatCurrency(val);
    }

    // Calculate Rebates
    const fundRebate = calculateFundRebate(val);
    if (newFundsRebateDisplay) {
      newFundsRebateDisplay.textContent = formatCurrency(fundRebate);
    }

    // Total = Base Welcome Privilege (matches reference 96,500 at 4.5M) + Fund Rebate + Investment Addon
    const totalRebate = BASE_WELCOME_PRIVILEGE + fundRebate + investmentAddon;
    if (totalRebateDisplay) {
      totalRebateDisplay.textContent = formatNumber(totalRebate);
    }
  }

  // Stepper UI Update
  function setStep(stepNum) {
    currentStep = stepNum;

    stepperItems.forEach((item) => {
      const step = Number(item.getAttribute('data-step'));
      if (step <= currentStep) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    stepperConnectors.forEach((conn, idx) => {
      if (idx < currentStep - 1) {
        conn.classList.add('active');
      } else {
        conn.classList.remove('active');
      }
    });

    // Update button text and simulation based on step
    if (btnNextStep) {
      if (currentStep === 1) {
        btnNextStep.innerHTML = '<span>NEXT: INVESTMENT & INSURANCE</span>';
        investmentAddon = 0;
        if (investmentRebateDisplay) investmentRebateDisplay.textContent = 'HK$0';
      } else if (currentStep === 2) {
        btnNextStep.innerHTML = '<span>NEXT: ADDITIONAL REWARDS</span>';
        investmentAddon = 35000;
        if (investmentRebateDisplay) investmentRebateDisplay.textContent = 'HK$35,000';
      } else {
        btnNextStep.innerHTML = '<span>APPLY NOW FOR CITIGOLD</span>';
        investmentAddon = 35000;
      }
    }

    updateCalculator();
  }

  // Event Listeners
  if (fundSlider) {
    fundSlider.addEventListener('input', updateCalculator);
    updateCalculator();
  }

  if (btnNextStep) {
    btnNextStep.addEventListener('click', () => {
      if (currentStep < 3) {
        setStep(currentStep + 1);
      } else {
        // Scroll or action on final step
        alert('Thank you for exploring Citigold Private Client! Ready to start your relationship with welcome rewards of up to HK$260,000.');
        setStep(1);
      }
    });
  }

  stepperItems.forEach((item) => {
    item.addEventListener('click', () => {
      const step = Number(item.getAttribute('data-step'));
      setStep(step);
    });
  });

  // Ask AI Button micro-interaction
  const askAiBtn = document.getElementById('askAiBtn');
  if (askAiBtn) {
    askAiBtn.addEventListener('click', () => {
      alert('Citi AI Assistant: How can I assist you with your Citigold Private Client privileges and cash rebates today?');
    });
  }
});
