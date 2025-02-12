const paperCutRainContainer = document.querySelector('.paper-cut-rain');

// Function to create a single paper cut
function createPaperCut() {
  const paperCut = document.createElement('div');
  paperCut.classList.add('paper-cut');

  // Randomize color (vibrant colors)
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff8c00', '#8a2be2'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  paperCut.style.backgroundColor = randomColor;

  // Randomize size
  const width = Math.random() * 10 + 10; // Between 10px and 20px
  const height = Math.random() * 10 + 10; // Between 10px and 20px
  paperCut.style.width = `${10}px`;
  paperCut.style.height = `${60}px`;

  // Randomize starting position (top of the screen)
  paperCut.style.left = `${Math.random() * 100}vw`;
  paperCut.style.top = `-50px`; // Start just above the screen

  // Randomize animation duration (falling speed)
  const duration = Math.random() * 5 + 3; // Between 3s and 8s
  paperCut.style.animationDuration = `${2}s`;

  // Add the paper cut to the container
  paperCutRainContainer.appendChild(paperCut);

  // Remove the paper cut after it falls out of view
  setTimeout(() => {
    paperCut.remove();
  }, duration * 1000);
}

// Generate paper cuts continuously
function generatePaperCutRain() {
  const intervalId = setInterval(createPaperCut, 100); // Create a new paper cut every 100ms

  // Stop the rain after 30 seconds
  setTimeout(() => {
    clearInterval(intervalId); // Stop generating new paper cuts
  }, 5000); // 40 seconds
}

// Start the paper cut rain
generatePaperCutRain();


//learning button
function goToPage(page) {
  window.location.href = page;
}







// Handle Contact Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

