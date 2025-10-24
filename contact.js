// BURGER MENU TOGGLE
const burgers = document.querySelectorAll('.burger');
const navs = document.querySelectorAll('.nav-links');

burgers.forEach((burger, index) => {
    burger.addEventListener('click', () => {
        navs[index].classList.toggle('nav-active');
        burger.classList.toggle('toggle'); // optional animation
    });
});

// EmailJS initialization and form handled inline in HTML




document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;

    // WhatsApp number of trainer (include country code)
    const phone = "918669147590"; // +91 number

    // Pre-filled message
    const text = `Hi Bhushan! My name is ${name}. My email is ${email}. Message: ${message}`;

    // WhatsApp link
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    // Optionally, reset form
    this.reset();
});
