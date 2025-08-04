// Q&A form: add submitted questions to the list (demo only, not saved after refresh)
document.addEventListener('DOMContentLoaded', function() {
    const qaForm = document.getElementById('qa-form');
    const qaList = document.querySelector('#qa-list ul');
    if (qaForm) {
        qaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const questionInput = document.getElementById('question');
            if (questionInput.value.trim()) {
                const li = document.createElement('li');
                li.textContent = questionInput.value.trim();
                qaList.prepend(li);
                questionInput.value = '';
            }
        });
    }

    // Contact form: basic alert (demo only)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Thank you for your message! We'll get back to you soon.");
            contactForm.reset();
        });
    }
});