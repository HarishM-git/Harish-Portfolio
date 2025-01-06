// Function to execute when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const homeSection = document.getElementById('home');
  const homeLoader = document.getElementById('home-loader');

  // Ensure elements exist before proceeding
  if (!homeSection || !homeLoader) {
    console.error('Home section or loader not found');
    return;
  }

  // Show the loader initially
  homeLoader.style.display = 'block';

  // Function to handle image loading
  const handleImageLoad = () => {
    // Hide the loader
    homeLoader.style.display = 'none';
  };

  // Get the background image URL
  const backgroundImageStyle = window.getComputedStyle(homeSection).backgroundImage;
  const imageUrl = backgroundImageStyle.slice(4, -1).replace(/"/g, '');

  // If there's a background image, wait for it to load
  if (imageUrl) {
    const backgroundImg = new Image();
    backgroundImg.onload = handleImageLoad;
    backgroundImg.src = imageUrl;
  } else {
    // If no background image, hide the loader immediately
    handleImageLoad();
  }
});
