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



//올해가 몇년도인지 자동계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021