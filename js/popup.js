window.onload = function (){
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
  })
  document.querySelector(".mySwiper").addEventListener("mouseover", function () {
    swiper.autoplay.stop()
    // let popupinfo = document.querySelector(".swiper-slide> div")
    // popupinfo.style.display = "block"
  })
  document.querySelector(".mySwiper").addEventListener("mouseout", function () {
    swiper.autoplay.start()
    // popupinfo.style.display = "none"
  })
  


}