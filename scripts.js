document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous errors
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.style.display = 'none');

    // Get form values
    const firstName = document.getElementById('first_name').value.trim();
    const lastName = document.getElementById('last_name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation flags
    let isValid = true;

    // First Name validation
    if (firstName === '') {
        document.getElementById('firstNameError').textContent = 'First name is required';
        document.getElementById('firstNameError').style.display = 'block';
        isValid = false;
    }

    // Last Name validation
    if (lastName === '') {
        document.getElementById('lastNameError').textContent = 'Last name is required';
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Valid email is required';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Subject validation
    if (subject === '') {
        document.getElementById('subjectError').textContent = 'Subject is required';
        document.getElementById('subjectError').style.display = 'block';
        isValid = false;
    }

    // Message validation
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    // If form is valid, allow form submission
    if (isValid) {
        alert('Form submitted successfully!');
        // Inside the if (isValid) block
        if (isValid) {
            // AJAX call to submit form data
            const formData = new FormData(document.getElementById('contactForm'));

            fetch('contact.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                alert('Form submitted successfully!');
                console.log(data);
            })
            .catch(error => {
                alert('There was an error submitting the form. Please try again.');
                console.error('Error:', error);
            });
        }

    }
});