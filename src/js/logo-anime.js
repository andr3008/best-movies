import Vivus from 'vivus';
const logoIcon = new Vivus('logo', {
  type: 'oneByOne',
  duration: 200,
});

function playLogo() {
  logoIcon.stop().reset().play();
}

export default playLogo;
