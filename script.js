// Contact Form Validation
const contactForm = document.getElementById('contactForm');
if(contactForm){
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if(name === "" || email === "" || message === ""){
            formMessage.textContent = "Please fill in all fields!";
            formMessage.style.color = "red";
            return;
        }

        formMessage.textContent = "Thank you! Your message has been sent.";
        formMessage.style.color = "green";

        contactForm.reset();
    });
}

// Property Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const propertyCards = document.querySelectorAll('.property-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-type');
        propertyCards.forEach(card => {
            if(type === 'all' || card.getAttribute('data-type') === type){
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
