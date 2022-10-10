export default function clearData() {
  const section = document.querySelector('.bottom-content');
  if (section) {
    section.innerHTML = '';
  }
}
