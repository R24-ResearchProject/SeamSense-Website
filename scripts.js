const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_gi4wxds';
   const templateID = 'template_6egkx5t';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
      this.reset(); // Clear the form fields
      location.reload(); // Refresh the page
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});