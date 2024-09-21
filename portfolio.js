// modal script start
// const openModalBtn = document.getElementById('openModalBtn');
// const closeModalBtn = document.getElementById('closeModalBtn');
// const modal = document.getElementById('modal');

// openModalBtn.addEventListener('click', function() {
//   modal.style.display = 'block';
// });

// closeModalBtn.addEventListener('click', function() {
//   modal.style.display = 'none';
// });

// window.addEventListener('click', function(event) {
//   if (event.target === modal) {
//     modal.style.display = 'none';
//   }
// });



// Get all modal open buttons
const modalButtons = document.querySelectorAll('.open-modal');

// Get all modals
const modals = document.querySelectorAll('.modal');

// Get all close buttons
const closeButtons = document.querySelectorAll('.close');

// Add event listeners to each open button
modalButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // Get the modal ID from the data-modal attribute
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    
    // Show the corresponding modal
    modal.style.display = 'block';
  });
});

// Add event listeners to each close button
closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Hide all modals
    modals.forEach((modal) => {
      modal.style.display = 'none';
    });
  });
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  modals.forEach((modal) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});





// modal script end


// form submit script start
// Get the form element
const form = document.getElementById('contactForm');

// Add event listener to the form
form.addEventListener('submit', function(event) {
  // Get the form fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const location = document.getElementById('location').value;
  const budget = document.getElementById('budget').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Simple validation to check if all fields are filled
  if (name === '' || email === '' || location === '' || budget === '' || subject === '' || message === '') {
    // Prevent the form from submitting
    event.preventDefault();
    alert("All fields are required. Please fill out the form completely.");
  } else {
    // You can add a message here if you want to show a confirmation
    alert("Form submitted successfully!");
  }
});
// form submit script end