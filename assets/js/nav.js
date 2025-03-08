// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Connect Wallet Button
  document.getElementById('connectWallet').addEventListener('click', () => {
    alert('Wallet connection feature coming soon!');
  });
  
  // Search Functionality
  document.querySelector('.search-bar button').addEventListener('click', (e) => {
    e.preventDefault();
    const query = document.querySelector('.search-bar input').value;
    alert(`Searching for: ${query}`);
  });