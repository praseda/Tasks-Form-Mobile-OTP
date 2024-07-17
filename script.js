document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
const dobInput = document.getElementById('dob');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const ageInput = document.getElementById('age');
const addressInput = document.getElementById('address');
const inquiryInput = document.getElementById('inquiry');
const successMessage = document.getElementById('success-message');



form.addEventListener('submit', function(event) {
	event.preventDefault();

  let valid = true;

	// Validate name
  if (!/^[a-zA-Z\s]+$/.test(nameInput.value)) {
    const nameErrorElement = document.getElementById('name-error');
    nameErrorElement.innerHTML = 'Please enter only alphabets for the name';
    nameErrorElement.className = 'error'; // Add the error class
  valid = false;
  }
  else {
    const nameErrorElement = document.getElementById('name-error');
    nameErrorElement.innerHTML = '';
    nameErrorElement.className = '';
  }

	// Validate email
	if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value)) {
    const emailErrorElement = document.getElementById('email-error');
    emailErrorElement.innerHTML = 'Please enter a valid email address';
    emailErrorElement.className = 'error'; // Add the error class
     valid = false;
	}
  else {
    const nameErrorElement = document.getElementById('email-error');
    nameErrorElement.innerHTML = '';
    nameErrorElement.className = '';
  }

	// Validate phone number
	if (!/^[6-9][0-9]{9,9}$/.test(phoneInput.value)) {
		const phoneErrorElement = document.getElementById('phone-error');
    phoneErrorElement.innerHTML = 'Please enter a valid phone number';
    phoneErrorElement.className = 'error'; // Add the error class
    valid = false;
	}
  else {
    const nameErrorElement = document.getElementById('phone-error');
    nameErrorElement.innerHTML = '';
    nameErrorElement.className = '';
  }

	// Validate age
	if (ageInput.value < 1 || ageInput.value > 150) {
		const ageErrorElement = document.getElementById('age-error');
    ageErrorElement.innerHTML = 'Please enter a valid age (1-150)';
    ageErrorElement.className = 'error'; // Add the error class
    valid = false;
	}
  else {
    const nameErrorElement = document.getElementById('age-error');
    nameErrorElement.innerHTML = '';
    nameErrorElement.className = '';
  }

	// Validate address
	if (addressInput.value.trim() === '') {
		const addressErrorElement = document.getElementById('address-error');
    addressErrorElement.innerHTML = 'Please enter a valid address';
    addressErrorElement.className = 'error'; // Add the error class
    valid = false;
	}
  else {
    const nameErrorElement = document.getElementById('address-error');
    nameErrorElement.innerHTML = '';
    nameErrorElement.className = '';
  }

	// If all fields are valid, display success message
  if (valid) {
    sendMail();
    alert("Registration Successful!!");
  }
});

function sendMail () {
  var parms = {
    from_name : nameInput.value,
    email : emailInput.value,
    inquiry : inquiryInput.value,
  }
  emailjs.send("service_o8j1fqh", "template_wxnhn6b",parms)
  .then(function(res)
   {
      alert ("Email Send Successfully" + res.status);
  }, function(error) {
    alert("Failed to send email. Error: " + error);
  });
}
});

S



