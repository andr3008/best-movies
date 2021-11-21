import getRefs from './getRefs';
const refs = getRefs();
refs.body.classList.add(localStorage.getItem('theme'));
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
if (localStorage.getItem('theme') === Theme.DARK) {
  refs.theme.checked = true;
} else refs.body.setAttribute('class', 'light-theme');
refs.body.addEventListener('change', onThemeChange);
function onThemeChange(event) {
  if (refs.theme.checked) {
    localStorage.setItem('theme', Theme.DARK);
    refs.body.setAttribute('class', 'dark-theme');
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    refs.body.setAttribute('class', 'light-theme');
  }
}