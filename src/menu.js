export default function loadMenu() {
  const content = document.getElementById('content');
  const menuDiv = document.createElement('div');
  menuDiv.innerHTML = `
    <h2>Menu</h2>
    <ul>
      <li>Pasta</li>
      <li>Pizza</li>
      <li>Salad</li>
    </ul>
  `;
  content.appendChild(menuDiv);
}
