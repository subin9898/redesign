$(document).ready(function () {


  //---header고정

  $(window).scroll(function () {
    let winTop = $(window).scrollTop()
    if (winTop >= 100) {
      $("header").addClass("small")
    } else {
      $("header").removeClass("small")
    }
  })

//------------------------------------------------------
//mobile ver


  $(window).scroll(function(){
    let winTop = $(window).scrollTop()
    if (winTop >=100){
      $(".mologo").css("display","block")
    }else{
      $(".mologo").css("display","none")
    }
  })


//---------------------------------------------------
//mo .ver
// let menuState = false;
// $(".btnMoMenu").click(function(){
//   if(menuState == flase){
//     $(".moMenu").addClass("show")

//     menuState = true
//   }else{
//     $(".moMenu").removeClass("show")

//     menuState = flase

//   }
// })

//---------------------------------------------------------




  //--main_product

  $(window).scroll(function () {
    let main_product = $(window).scrollTop()
    if (main_product >= 100) {
      $(".inner_product>ul").addClass("on")
    }
  })

  //----top버튼

  $(".top_button").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500)
  })

  //---------------------------------------------------------
  $(".promo_list>li").click(function (e) {
    e.preventDefault()
    $(".promo_list>li").removeClass("on")
    $(this).addClass("on")
  })
  //--------------------------------------------------------



  //---- promotion 슬라이드

  let station1 = new Swiper(".vid_station", {
    loop: true,
    direction: "horizontal",
    slidesPerView: 3,  //슬라이드 개수의 반만큼 최대 적용 가능
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: ".csNextBtn",
      prevEl: ".csPrevBtn",
    },


    // breakpoints: {
    //   320: {
    //     slidesPerView: 1,
    //     spaceBetween: 0
    //   },
    //   768: {
    //     slidesPerView: 2,
    //     spaceBetween: 10
    //   },
    //   1024: {
    //     slidesPerView: 3,
    //     spaceBetween: 20
    //   }
    // }
  })

  let station2 = new Swiper(".img_station", {
    loop: true,
    direction: "horizontal",
    slidesPerView: 3,  //슬라이드 개수의 반만큼 최대 적용 가능
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: ".csNextBtn",
      prevEl: ".csPrevBtn",
    },
  })
  //----------------------promo popup1
  $(".mak").click(function (e) {
    e.preventDefault()
    $(".vid_popup1").addClass("on")
  })
  $(".btnMenu").click(function (e) {
    e.preventDefault()
    $(".vid_popup1").removeClass("on")
  })
  //-------------------------------------
  $(".beak").click(function (e) {
    e.preventDefault()
    $(".vid_popup2").addClass("on")
  })
  $(".btnMenu").click(function (e) {
    e.preventDefault()
    $(".vid_popup2").removeClass("on")
  })

  //-----------------woori_popup

  $(".woori_1-2>ul>li.rawrice").click(function (e) {
    e.preventDefault()
    $(".woori_popup1").addClass("on")
  })

  $(".btnMenu").click(function (e) {
    e.preventDefault()
    $(".woori_popup1").removeClass("on")
  })
  //-----------------------------------------------------------
  $(".woori_1-2>ul>li.jurice").click(function (e) {
    e.preventDefault()
    $(".woori_popup2").addClass("on")
  })

  $(".btnMenu").click(function (e) {
    e.preventDefault()
    $(".woori_popup2").removeClass("on")
  })
  //---------------------------------------------------------------
  $(".woori_1-2>ul>li.promise").click(function (e) {
    e.preventDefault()
    $(".woori_popup4").addClass("on")
  })

  $(".btnMenu").click(function (e) {
    e.preventDefault()
    $(".woori_popup4").removeClass("on")
  })




  //-------------- woori_content2

  $(window).scroll(function () {
    let winTop = $(window).scrollTop()
    if (winTop >= 1300) {
      $(".woori_2").addClass("on")
    }
  })
  $(window).scroll(function () {
    let winTop = $(window).scrollTop()
    if (winTop >= 1350) {
      $(".woori_2-2").addClass("on")
    }
  })
  $(window).scroll(function () {
    let winTop = $(window).scrollTop()
    if (winTop >= 1450) {
      $(".woori_2-3").addClass("on")
    }
  })




})




























