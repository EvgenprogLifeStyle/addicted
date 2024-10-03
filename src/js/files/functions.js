
function burger() {
  const btn = document.querySelector('.header-n__burger-btn'),
    burger = document.querySelector('.burger'),
    btnDrop = document.querySelector('.burger .drop-nav__btn'),
    btnBack = document.querySelector('.burger .burger-head__back'),
    dropBody = document.querySelector('.burger .drop-nav__overlay')

  if (btn) {
    btn.addEventListener('click', () => {

      burger.classList.add('_active')
    })
    btnDrop.addEventListener('click', () => {
      btnBack.classList.add('_active')
      dropBody.classList.add('_active')
    })
    btnBack.addEventListener('click', () => {
      btnBack.classList.remove('_active')
      dropBody.classList.remove('_active')
    })

  }
}

burger()

setTimeout(() => {
  document.querySelector('.popup-n').classList.add('_active')
  document.querySelector('body').classList.add('_lock')
}, 3000)


document.addEventListener("click", (e) => {
  // console.log(e.target.classList.contains('popup-n'));
  if (e.target.classList.contains('popup-n')) {
    document.querySelector('.popup-n').classList.remove('_active')
    document.querySelector('body').classList.remove('_lock')
  }

});