const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  //logic.. search라는 클래스 클릭하면 focus
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function (){
  searchEl.classList.add('focused'); //속성이름추가
  searchInputEl.setAttribute('placeholder', '통합검색'); //속성추가
});

searchInputEl.addEventListener('blur', function (){
  searchEl.classList.remove('focused'); //속성이름추가
  searchInputEl.setAttribute('placeholder', ''); //속성추가
});



const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0 ,
      display: 'none'
    });
    //버튼 보이기
    gsap.to(toTopEl, .2, {
      x : 0
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x : 100
    });
  }
}, 300));

//윈도우 부분 스크롤 0.3초 단위로 부하를 줘서 함수가 우루루 실행되는 것을 방지하기 위해 lodash 의 throttle라는 기능 추가함
// _.throttle(함수, 시간)


toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});



const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
});

//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 갯수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000 //500으로 하면 0.5s 의미 5000은 5s
  },

  pagination: {
    el: '.promotion .swiper-pagination', //페이지번호요소 선택자
    clickable : true //사용자의 페이지번호 요소 제어여부
  },
  navigation : {
    prevEl : '.promotion .swiper-prev',
    nextEl : '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});



//promotion 이라는 클래스 찾아서 promotionEl(엘리먼트) 에 할당하고
//toggle-promotion 이라는 클래스 찾아서 promotion togglebtn이라는 변수에 할당
// is hidepromotion 이 flase; 
//promotiontogglebtnㄱ클릭하면 함수실행되고 함수에서 ishide체크해서 
//true else에 따라 다르게 hide라는 클래스가 추가되고 
//css에서 hide에 맞게 설정해주고 
//flase가 조건문에 들어가니까 else실행
// add 와 remove는 메소드
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion //반댓값
  if (isHidePromotion) {
    //숨김처리!
    promotionEl.classList.add('hide'); //hide라는 클래스추가
  } else {
    //보임처리
    promotionEl.classList.remove('hide'); //hide라는 클래스 제거
  }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObjec(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    { //옵션
      y: 20,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}

floatingObjec('.floating1', 1, 15);
floatingObjec('.floating2', .5, 15);
floatingObjec('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook : .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


//올해가 몇년도인지 자동ㅖ산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021