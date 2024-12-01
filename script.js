// Get elements
const createThreadBtn = document.getElementById('create-thread-btn');
const modalOverlay = document.getElementById('create-thread-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const threadForm = document.getElementById('thread-form');

// Show the modal
createThreadBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'flex';
});

// Hide the modal
closeModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

// Close modal when clicking outside the content
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = 'none';
  }
});

// Handle form submission
threadForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Gather form data
  const title = document.getElementById('thread-title').value;
  const category = document.getElementById('thread-category').value;
  const content = document.getElementById('thread-content').value;

  // Handle the data (e.g., log it or send it to a server)
  console.log(`Thread Created: Title - ${title}, Category - ${category}, Content - ${content}`);

  // Close the modal
  modalOverlay.style.display = 'none';

  // Clear the form
  threadForm.reset();
});
