var pageWidth = window.innerWidth

if (window.innerWidth < 768) {
  const swiper = new Swiper('.wrapper-slider', {
    watchOverflow: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    breakpoints: {
      320: {
        slidesPerView: 'auto'
      }
    }
  })
}

var slid1 = document.querySelectorAll('.swiper-slide_none-1')
var slid2 = document.querySelectorAll('.swiper-slide_none-2')

var slid3 = document.querySelectorAll('.swiper2-slide_none-1')
var slid4 = document.querySelectorAll('.swiper2-slide_none-2')

var buttonElement = document.getElementById('button1')
buttonElement.addEventListener('click', function () {
  buttonElementActive(buttonElement)
})
var buttonElement2 = document.getElementById('button2')
buttonElement2.addEventListener('click', function () {
  buttonElementActive(buttonElement2)
})

function buttonElementActive(buttonElement) {
  if (pageWidth >= 1120) {
    var slid = buttonElement.id === 'button1' ? slid2 : slid4
  } else {
    var slid = buttonElement.id === 'button1' ? slid1 : slid3
  }

  if (buttonElement.classList.contains('expanded')) {
    buttonElement.classList.remove('expanded')
    buttonElement.innerText = 'Показать всё'
    slid.forEach(function (slide) {
      slide.style.display = 'none'
    })
  } else {
    buttonElement.classList.add('expanded')
    buttonElement.innerText = 'Скрыть'
    slid.forEach(function (slide) {
      slide.style.display = 'flex'
    })
  }
}

var fogOfWar = document.querySelector('.fogofwar')

var burgerMenuOpen = document.getElementById('open-burger')
var burgerMenuClose = document.getElementById('close-burger')
var burgerItem = document.querySelector('.burger')

burgerMenuOpen.addEventListener('click', function () {
  burgerItem.style.display = 'block'
  fogOfWar.style.display = 'block'
})
burgerMenuClose.addEventListener('click', function () {
  burgerItem.style.display = 'none'
  fogOfWar.style.display = 'none'
})

var feedbackOpen = document.getElementById('repair')
var feedbackClose = document.getElementById('close-feedback')
var callOpen = document.getElementById('heckstatus')
var callClose = document.getElementById('close-call')
var rightBlock = document.querySelector('.page-content__right-block')
var feedbackBlock = document.querySelector('.feedback')
var callBlock = document.querySelector('.call')

feedbackOpen.addEventListener('click', function () {
  rightBlock.style.display = 'block'
  feedbackBlock.style.display = 'block'
  fogOfWar.style.display = 'block'
})
feedbackClose.addEventListener('click', function () {
  rightBlock.style.display = 'none'
  feedbackBlock.style.display = 'none'
  fogOfWar.style.display = 'none'
})
callOpen.addEventListener('click', function () {
  rightBlock.style.display = 'block'
  callBlock.style.display = 'block'
  fogOfWar.style.display = 'block'
})
callClose.addEventListener('click', function () {
  rightBlock.style.display = 'none'
  callBlock.style.display = 'none'
  fogOfWar.style.display = 'none'
})

fogOfWar.addEventListener('click', function () {
  burgerItem.style.display = 'none'
  rightBlock.style.display = 'none'
  callBlock.style.display = 'none'
  feedbackBlock.style.display = 'none'
  fogOfWar.style.display = 'none'
})
