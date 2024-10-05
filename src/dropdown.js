function toggleClass(el, name) {
  if (el.classList.contains(name)) {
    el.classList.remove(name);
  } else {
    el.classList.add(name);
  }
}

export default function dropdownListener(btn, menu, name) {
  btn.addEventListener('click', () => {
    toggleClass(menu, name);
  });
}
