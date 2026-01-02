export default function loadHome() {
  const content = document.getElementById('content');
  const homeDiv = document.createElement('div');
  homeDiv.innerHTML = `
    <h1>Welcome to Our Restaurant</h1>
    <p>We serve delicious food made with love.</p>
    <img src="https://via.placeholder.com/300" alt="Restaurant Image" />
  `;
  content.appendChild(homeDiv);
}
