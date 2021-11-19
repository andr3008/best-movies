import Vivus from 'vivus';
const logoIcon = new Vivus('logo', {
  type: 'oneByOne',
  duration: 100,
});

function playLogo() {
  logoIcon.stop().reset().play();
}

export default playLogo;
