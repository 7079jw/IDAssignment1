// Create Thread

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



// Library Edit

let activeCardId = null; // Track the currently active card

function openModal(id, cardId) {
  document.getElementById(id).style.display = 'flex';
  activeCardId = cardId; // Save the ID of the card being edited

  // Pre-fill the modal with the current values
  const activeCard = document.querySelector(`.novel-card[data-id="${activeCardId}"]`);
  if (activeCard) {
    const currentProgress = activeCard.querySelector('.chapters-read').textContent;
    const currentRating = activeCard.querySelector('.rating').textContent;

    document.getElementById('chapter-progress').value = currentProgress;
    document.getElementById('score').value = currentRating;
  }
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
  activeCardId = null; // Clear the active card ID
}

function saveChanges() {
  const chapterProgress = parseInt(document.getElementById('chapter-progress').value, 10);
  const score = parseInt(document.getElementById('score').value, 10);

  if (isNaN(chapterProgress) || chapterProgress < 0) {
    alert('Please enter a valid chapter progress.');
    return;
  }
  if (isNaN(score) || score < 0 || score > 10) {
    alert('Please enter a score between 0 and 10.');
    return;
  }

  if (activeCardId) {
    // Find the card with the matching data-id
    const activeCard = document.querySelector(`.novel-card[data-id="${activeCardId}"]`);
    
    if (activeCard) {
      // Update the card's details
      activeCard.querySelector('.chapters-read').textContent = `${chapterProgress}`;
      activeCard.querySelector('.rating').textContent = `${score}`;
    } else {
      console.error(`Card with ID ${activeCardId} not found.`);
    }
  } else {
    console.error('No active card ID is set.');
  }

  // Close the modal
  closeModal('modal-id');
}
