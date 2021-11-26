import getRefs from './get-refs';
const refs = getRefs();
import trottle from 'lodash.throttle';

const rootElement = document.documentElement;
const handleScroll = () => {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.2) {
    refs.scrollToTopBtn.classList.add('showBtn');
    refs.scrollToTopBtn.addEventListener('click', scrollBtnHandler);
  } else {
    refs.scrollToTopBtn.classList.remove('showBtn');
    refs.scrollToTopBtn.removeEventListener('click', scrollBtnHandler);
  }
};

document.addEventListener('scroll', trottle(handleScroll, 300));

const scrollBtnHandler = () => {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
