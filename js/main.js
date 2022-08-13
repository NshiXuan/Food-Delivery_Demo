// 导航
const menu = document.querySelector('.nav-list')

document.querySelector('.hamburger').onclick = () => {
  menu.classList.add('show')
}

document.querySelector('.nav-list .close').onclick = () => {
  menu.classList.remove('show')
}

// 点击看视频按钮展示视频
const video = document.querySelector('.video')
const button = document.querySelector('.video-control')
const videoWrapper = document.querySelector('.wrapper')

document.querySelector('.watch-btn').onclick = () => {
  videoWrapper.classList.add('active')
}

document.querySelector('.close-video').onclick = () => {
  videoWrapper.classList.remove('active')
}

playpausevideo = () => {
  if (video.paused) {
    button.innerHTML = "<i class='bx bx-pause'></i>"
    video.play();
  } else {
    button.innerHTML = "<i class='bx bx-play'></i>"
    video.pause();
  }
}

button.addEventListener('click', playpausevideo)

// 点击登录按钮展示登录框
const signInForm = document.querySelector('.form-wrapper')

document.querySelector('.login').onclick = () => {
  signInForm.classList.add('active')
}

document.querySelector('.login-link').onclick = () => {
  signInForm.classList.add('active')
  menu.classList.remove("show")
}

// [".login-link", ".login"].forEach((item) => {
//   document.querySelector(item).onclick = () => {
//     signInForm.classList.add('active')
//     menu.classList.remove('show')
//   }
// })

document.querySelector('.close-form').onclick = () => {
  signInForm.classList.remove('active')
}

// 用户评价轮播图
const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".custom-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".custom-button-next",
    prevEl: ".custom-button-prev",
  },
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    567: {
      slidesPerView: 2,
    },
    996: {
      slidesPerView: 3,
    },
  }
});