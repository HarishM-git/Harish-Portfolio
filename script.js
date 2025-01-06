document.addEventListener('DOMContentLoaded', () => {
  const homeSection = document.getElementById('home');
  const homeText = document.querySelector('.home-text');
  const loader = document.getElementById('home-loader');

  if (!homeSection || !homeText || !loader) {
    console.error('Home section, text, or loader not found');
    return;
  }

  // Initially hide the home text and show the loader
  homeText.style.display = 'none';
  loader.style.display = 'block';
});

window.onload = () => {
  const loader = document.getElementById('home-loader');
  const homeText = document.querySelector('.home-text');

  if (loader && homeText) {
    // Hide the loader and show the home text after all resources are loaded
    loader.style.display = 'none';
    homeText.style.display = 'block';
  }
};
