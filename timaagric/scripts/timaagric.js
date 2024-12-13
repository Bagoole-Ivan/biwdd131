// Wait for the document to load
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Loaded!');

    // 1. Display Current Date and Time
    displayDateTime();

    // 2. Dynamic Greeting Message (based on time of day)
    displayGreeting();

    // 3. Add Scroll-to-Top Button functionality
    setupScrollToTopButton();

    // 4. Form validation (only for pages with a form)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        setupFormValidation(contactForm);
    }
});

/**
 * Function to display current date and time
 */
function displayDateTime() {
    const dateElement = document.createElement('p');
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    });
    const formattedTime = now.toLocaleTimeString('en-US');
    dateElement.textContent = `Today is ${formattedDate}, and the current time is ${formattedTime}.`;
    dateElement.style.textAlign = 'center';
    dateElement.style.marginBottom = '20px';
    document.body.insertBefore(dateElement, document.body.firstChild);
}

/**
 * Function to display a dynamic greeting message
 */
function displayGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    const greetingElement = document.createElement('h2');
    greetingElement.textContent = greeting;
    greetingElement.style.textAlign = 'center';
    greetingElement.style.color = '#4CAF50';
    document.body.insertBefore(greetingElement, document.body.firstChild);
}

/**
 * Function to add a Scroll-to-Top button
 */
function setupScrollToTopButton() {
    // Create the button element
    const topButton = document.createElement('button');
    topButton.textContent = '↑ Back to Top';
    topButton.id = 'scrollToTop';
    topButton.style.position = 'fixed';
    topButton.style.bottom = '20px';
    topButton.style.right = '20px';
    topButton.style.backgroundColor = '#4CAF50';
    topButton.style.color = 'white';
    topButton.style.border = 'none';
    topButton.style.padding = '10px 20px';
    topButton.style.borderRadius = '5px';
    topButton.style.cursor = 'pointer';
    topButton.style.display = 'none'; // Hidden by default

    document.body.appendChild(topButton);

    // Show button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            topButton.style.display = 'block';
        } else {
            topButton.style.display = 'none';
        }
    });

    // Scroll to top on button click
    topButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/**
 * Function to set up simple form validation
 * @param {HTMLFormElement} form - The form element to validate
 */
function setupFormValidation(form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const nameInput = form.querySelector('input[name="name"]');
        const emailInput = form.querySelector('input[name="email"]');
        const messageInput = form.querySelector('textarea[name="message"]');
        let errors = [];

        if (!nameInput.value.trim()) {
            errors.push('Name is required');
            nameInput.style.border = '2px solid red';
        } else {
            nameInput.style.border = '2px solid #4CAF50';
        }

        if (!validateEmail(emailInput.value)) {
            errors.push('A valid email is required');
            emailInput.style.border = '2px solid red';
        } else {
            emailInput.style.border = '2px solid #4CAF50';
        }

        if (!messageInput.value.trim()) {
            errors.push('Message cannot be empty');
            messageInput.style.border = '2px solid red';
        } else {
            messageInput.style.border = '2px solid #4CAF50';
        }

        if (errors.length > 0) {
            alert(`Please fix the following errors:\n- ${errors.join('\n- ')}`);
        } else {
            alert('Form submitted successfully!');
            form.reset(); // Clear the form
        }
    });
}

/**
 * Function to validate an email address using a simple regular expression
 * @param {string} email - The email address to validate
 * @return {boolean} True if the email is valid, otherwise false
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
