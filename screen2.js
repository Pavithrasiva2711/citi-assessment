const faqData = [
  {
    title: "Application via Citi Mobile® App",
    questions: [
      {
        q: "What is remote account opening?",
        a: "Remote account opening allows you to apply for a banking account online without visiting a branch. You can complete the application through the available Citi digital channels."
      },
      {
        q: "Why should I apply for a banking account via Citi Mobile® App?",
        a: "You can conveniently complete the application online and use Citi Mobile® App to continue the application process. Please refer to the bank's official information for the applicable eligibility criteria."
      },
      {
        q: "How can I apply for a banking account via Citi Mobile® App?",
        a: "Complete the online application form and follow the instructions in Citi Mobile® App to continue the banking account application process."
      },
      {
        q: "Is there any charge for applying for a banking account via Citi Mobile® App?",
        a: "Please refer to the bank's official terms and conditions for information about any charges related to the account you are applying for."
      },
      {
        q: "Why do I need to take photo of my HKID card from multiple angles?",
        a: "Taking photos from the requested angles helps the system capture the necessary details of your HKID card for identity verification."
      },
      {
        q: "Why do I need to take a selfie and blink my eyes twice?",
        a: "The selfie and blinking instructions are part of the identity verification process. Follow the on-screen instructions and make sure your face is clearly visible."
      },
      {
        q: "Do I need to upload any document, e.g. Address proof?",
        a: "Any additional documents required will depend on the application and verification process. Follow the instructions displayed during your application."
      },
      {
        q: "Is my application information secure and protected?",
        a: "Please refer to the bank's official privacy policy and security information to understand how your application information is handled and protected."
      },
      {
        q: "Why have I failed the identity verification and need to visit branch to complete the application?",
        a: "If identity verification cannot be completed successfully online, you may be asked to visit a branch to complete the application process."
      },
      {
        q: "Why do I need to input my personal information to apply for a banking account?",
        a: "You will need to input your latest personal information for Citibank's record during your banking account application process."
      },
      {
        q: "Do I need to open an account during business hours?",
        a: "There are no time or place restrictions on opening your banking account. You simply complete the application form online and download Citi Mobile® App to complete the rest of the application, anytime and anywhere. It takes a minimum of 10 minutes to complete the application process if you meet the application criteria. (According to our usability test, the majority of participants completed the application of banking account within 10 mins.)"
      },
      {
        q: "What's a one-time password?",
        a: "A one-time password (OTP) is a verification code used during an authentication process. Follow the instructions provided through the bank's official channels."
      },
      {
        q: "What do I have to be aware of during the registration for facial recognition?",
        a: "Follow the on-screen instructions carefully. Make sure your face is clearly visible and that the surrounding lighting is suitable for the identity verification process."
      },
      {
        q: "How can I resume my application?",
        a: "Follow the instructions provided in Citi Mobile® App or through the bank's official application channels to check whether you can resume your previous application."
      }
    ]
  },
  {
    title: "Online Banking Username / Password",
    questions: [
      {
        q: "What if I forget my Online Banking Username / Password?",
        a: "Use the official Citibank Online or Citi Mobile® App recovery options to retrieve your username or reset your password. Follow the instructions shown on the official banking service."
      },
      {
        q: "Do I need to create Online Banking Username / Password if I have already registered?",
        a: "If you have already registered for online banking, follow the instructions provided during the application process to use your existing credentials where applicable."
      }
    ]
  },
  {
    title: "Banking account services",
    questions: [
      {
        q: "How can I update my account information after the account is successfully opened?",
        a: "Please use the bank's official online banking services or contact customer support for instructions on updating your account information."
      },
      {
        q: "If I am an existing Citi credit card customer, how should I proceed to open a Citigold account?",
        a: "Follow the official account opening instructions and provide the requested information during the application process."
      },
      {
        q: "Will the banker contact me after opening the account?",
        a: "Any follow-up arrangements depend on your application and account service. Please refer to the bank's official confirmation for details."
      },
      {
        q: "After my account is successfully opened, when will I receive the ATM card?",
        a: "The ATM card will be dispatched upon the account being successfully opened. Normally you will receive the ATM card within 3 to 5 working days, excluding Saturdays, Sundays and public holidays."
      }
    ]
  },
  {
    title: "ATM Card Activation and PIN set up",
    questions: [
      {
        q: "How can I activate the ATM card and set up ATM PIN?",
        a: "You can activate your ATM card via Citibank Online or Citi Mobile® App by following the steps below:\n\nCitibank Online:\ni. Login to Citibank Online\nii. Click on ‘Services’ and 'My Profile'\niii. Select ‘Activate ATM/Debit/Credit Card’\niv. Follow the instructions and submit the request with One Time Password\n\nCiti Mobile® App:\ni. Login to Citi Mobile® App\nii. Click on ‘Profile&Settings’\niii. Select ‘Activate ATM/Debit’\niv. Follow the instructions and submit the request with One Time Password"
      },
      {
        q: "Is there any deadline for activating the ATM card and setting up ATM PIN?",
        a: "Please refer to the instructions provided with your card or contact the bank through its official customer service channels for the applicable deadline."
      },
      {
        q: "What if I forget the ATM PIN?",
        a: "Use the bank's official card services to check the available ATM PIN reset options."
      }
    ]
  }
];

const faqCategories = document.getElementById("faqCategories");

faqData.forEach((group, groupIndex) => {
  const category = document.createElement("section");
  category.className = "category";

  const categoryButton = document.createElement("button");
  categoryButton.className = "category-button";
  categoryButton.type = "button";
  categoryButton.setAttribute("aria-expanded", "false");
  categoryButton.innerHTML = `
    <span>${group.title}</span>
    <span class="category-chevron" aria-hidden="true"></span>
  `;

  const categoryContent = document.createElement("div");
  categoryContent.className = "category-content";

  group.questions.forEach((item, questionIndex) => {
    const questionItem = document.createElement("div");
    questionItem.className = "question-item";

    const questionButton = document.createElement("button");
    questionButton.className = "question-button";
    questionButton.type = "button";
    questionButton.setAttribute("aria-expanded", "false");
    questionButton.innerHTML = `
      <span>${item.q}</span>
      <span class="question-chevron" aria-hidden="true"></span>
    `;

    const answer = document.createElement("div");
    answer.className = "answer";

    // Preserve line breaks in longer answers.
    item.a.split("\n\n").forEach((paragraphText) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = paragraphText;
      answer.appendChild(paragraph);
    });

    questionButton.addEventListener("click", () => {
      const isOpen = questionItem.classList.toggle("is-open");
      questionButton.setAttribute("aria-expanded", String(isOpen));
    });

    questionItem.appendChild(questionButton);
    questionItem.appendChild(answer);
    categoryContent.appendChild(questionItem);
  });

  categoryButton.addEventListener("click", () => {
    const isOpen = category.classList.toggle("is-open");
    categoryButton.setAttribute("aria-expanded", String(isOpen));
  });

  category.appendChild(categoryButton);
  category.appendChild(categoryContent);
  faqCategories.appendChild(category);
});
