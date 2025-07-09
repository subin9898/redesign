$(document).ready(function () {
  // let pathLength = $(".letter").get(0).getTotalLength()
  //  get(0)-> 제이쿼리 문서객체를 자바스크립트 문서객체로 변환하여 리턴함
  // $(".letter").css("stroke-dasharray", pathLength)
  // $(".letter").css("stroke-dashoffset", pathLength)

  $("#introtxt path").each(function () {
    let path = $(this)
    let idx = path.index()
    let secondTerm = 0.1
    let delay = idx * secondTerm


    let pathLength = $(this).get(0).getTotalLength()
    $(this).css("stroke-dasharray", pathLength)
    $(this).css("stroke-dashoffset", pathLength)

    setTimeout(function () {
      path.css("transition", `stroke-dashoffset 1s ease ${delay}s, fill 1s ease ${delay + 1}s`)
    }, 300)
  })

  setTimeout(function () {
    $("#introtxt").addClass("on")

  }, 500)
  //-> 메인페이지 svg설정

  //------------------------------------------------------------------
  $(".all>div").on("wheel DOMMouseScroll", function (event) {
    // div에 마우스 휠 이벤트와 돔마우스스크롤 이벤트를 걸었습니다.
    //on -> 이벤트를 여러개 묶어 사용할 수 있다.
    // console.log(event)
    let E = event.originalEvent
    //변수 E 에 이벤트 객체의 속성으로 사용할 수 있는 속성인 originalEvent 를 넣었습니다.
    let delta = 0;
    //변수 delta 에 숫자 자료형 0 을 넣어 두었습니다.
    if (E.detail) {
    // 이 조건에서는 e.originalEvent 의 속성으로 detail 가 있다면 입니다.
    // 익스, 크롬 등은 e.originalEvent 에 detail 의 속성이 없으나,
    // 파이어 폭스 일 경우엔 detail 속성이 있습니다.
    // 그래서 이 조건을 실행 시킵니다.
      delta = E.detail * -40
    //이렇게 해주는 이유는 detail 의 값이 익스와 크롬과는 다르게 3 이 찍힙니다.
    // 익스, 크롬은 120 이 찍히죠.
    // 익스, 크롬과 동일하게 해주기 위해서 이렇게 해줍니다.
    } else {
      // 이곳에서는 익스, 크롬의 e.originalEvent 의 속성으로 wheelDelta 를 사용할 수 있습니다.
      delta = E.wheelDelta
    }
    //--->  브라우저 호환성을 맞취주는 설정

    if ($(this).attr("class") == "redesign") {
      return
    }

    if ($(this).attr("end") == "redesign") {
      return
    }

    if (delta < 0) {
      //마우스 휠을 내렸을 때
      if ($(this).next().length != 0) {
        let posTop = $(this).next().offset().top
        // console.log(posTop)
        $("html,body").stop().animate({ scrollTop: posTop }, 1000)
      }
    } else {
      //마우스 휠을 올렸을 때
      if ($(this).prev().length != 0) {
        let posTop = $(this).prev().offset().top
        // console.log(posTop)
        $("html,body").stop().animate({ scrollTop: posTop }, 1000)
      }
    }
    return false
  })
  // -> 스크롤 한뼘이동





  // -----------------------------------------------------------------

  let menuState = false;


  $(".Menubtn").click(function () {
    if (menuState == false) {
      $(".Menubtn").addClass("close")
      $(".back").addClass("show")
      $("html").css("overflow", "hidden")
      menuState = true
    } else {
      $(".Menubtn").removeClass("close")
      $(".back").removeClass("show")
      $("html").css("overflow", "auto")

      menuState = false
    }
  })

  //->메인페이지 메뉴창
  //-----------------------------------------
  

  $(".gnb>ul>li").click(function(){
    $(".Menubtn").removeClass("close")
    $(".back").removeClass("show")
    $("html").css("overflow", "auto")
    menuState = false
  })


  //-----------------------------------------------------------------------

  let pathLength = $("rect").get(0).getTotalLength()
  // console.log(pathLength)
  $(".rect rect").css("stroke-dasharray", pathLength)
  $(".rect rect").css("stroke-dashoffset", pathLength)

  //LANGUAGES창에 닿으면 drawSquare가 실행되도록

  $(window).scroll(function () {
    //스크롤바가 움직일 때 마다 실행되는 소스코드
    let a = $(window).scrollTop()//스크롤바가 위에서 얼만큼 내려와있는지 계산
    let b = $(".LANGUAGES").offset().top
    let c = $(window).height() * 0.5

    if (a + c >= b) {
      if ($(".LANGUAGES").hasClass("on") == false) {

        $(".LANGUAGES").addClass("on")
        drawSquare()
      }
    }
  })


  // drawSquare()
  // $(".rect1 rect").css("stroke-dashoffset", pathLength - (pathLength * 0.85))
  // $(".rect2 rect").css("stroke-dashoffset", pathLength - (pathLength * 0.8))
  // $(".rect3 rect").css("stroke-dashoffset", pathLength - (pathLength * 0.7))
  // $(".rect4 rect").css("stroke-dashoffset", pathLength - (pathLength * 0.75))


  function drawSquare() {
    $(".skillper").each(function () {
      let div = $(this)
      let rect = $(this).find("rect")
      let percent = Number($(this).find(".per").text())
      let count = 0
      let timer = setInterval(function () {
        count++
        div.find(".per").text(count + "%")
        rect.css("stroke-dashoffset", pathLength - (pathLength * (count / 100)))
        if (count >= percent) {
          clearInterval(timer)
        }
      }, 10)
    })
  }


  //-> svg퍼센트


  // --------------------------------------------------------------------------

  let count = 0;
  $(".fa-angle-right").click(function () {
    count++
    if (count > 3) { count = 0 }
    $(".train>li").css("transform", "translateX(" + -1290 * count + "px)")
  })

  $(".fa-angle-left").click(function () {
    count--
    if (count < 0) { count = 3 }
    $(".train>li").css("transform", "translateX(" + -1290 * count + "px)")
  })

  //->배너 슬라이드

  // ----------------------------------------------------------------------------


  $(".train>li").click(function (e) {
    e.preventDefault()
    let idx = $(this).index()
    // alert(idx)
    $(".banner > div").removeClass("show")
    $(".banner > div").eq(idx).addClass("show")

  })

  $(".popupclosebtn").click(function (e) {
    e.preventDefault()
    // $(".bannerPopup").removeClass("show")
    $(".banner > div").removeClass("show")
    // $(".banner > div").eq(idx).removeClass("show")

  })

  //->배너 팝업


  // ---------------------------------------------------------------------------------
  let count2 = 0;
  $(".station2").on("wheel DOMMouseScroll", function (event) {
    //on -> 이벤트를 여러개 묶어 사용할 수 있다.
    // console.log(event)
    let E = event.originalEvent
    let delta = 0;
    if (E.detail) {
      delta = E.detail * -40
    } else {
      delta = E.wheelDelta
    }
    //--->  브라우저 호환성을 맞취주는 설정

    if (delta < 0) {
      //마우스 휠을 내렸을 때
      count2++
      console.log(count2)
      if (count2 > 7) { count2 = 0 }
      $(".train2").css("transform", "translateX(" + (-1020 * count2) + "px)")
    } else {
      //마우스 휠을 올렸을 때
      count2--
      console.log(count2)
      if (count2 < 0) { count2 = 7 }
      $(".train2").css("transform", "translateX(" + (-1020 * count2) + "px)")
    }
    return false
    //이벤트 버블링을 막아줌
  })

  // -> popup 스크롤버전
//---------------------------------------------------------------------------------------






})
