import dropdownListener from './dropdown';
import './styles.css';

(function main() {
  const btn = document.getElementById('dropdown-button');
  const menu = document.getElementById('dropdown-menu-container');
  const className = 'visible';
  dropdownListener(btn, menu, className);
}());
