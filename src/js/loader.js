const loaderRef = document.querySelector('.loader');

function startLoader() {
  loaderRef.classList.remove('hide-loader');
}

function stopLoader() {
  setTimeout(function () {
    loaderRef.classList.add('hide-loader');
  }, 300);
}

export { startLoader, stopLoader };
