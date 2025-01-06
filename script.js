document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('home-loader');
  if (loader) {
    loader.style.display = 'block'; // Show loader on DOMContentLoaded
  }
});

window.onload = () => {
  const loader = document.getElementById('home-loader');
  const homeText = document.querySelector('.home-text');

  if (loader && homeText) {
    setTimeout(() => {
      loader.style.display = 'none'; // Hide loader after 2 seconds
      homeText.style.display = 'block'; // Show home text
    }, 2000);
  }
};
