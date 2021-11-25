const loaderRef = document.querySelector('.loader');

document.body.onload = () => {
  setTimeout(() => {
    if (!loaderRef.classList.contains('hide-loader')) {
      loaderRef.classList.add('hide-loader');
    }
  }, 500);
};

export const loader = {
  stop: function () {
    setTimeout(() => {
      loaderRef.classList.add('hide-loader');
    }, 1000);
  },

  start: function () {
    loaderRef.classList.remove('hide-loader');
  },
};
