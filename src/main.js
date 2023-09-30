'use strict';

// 1. Header에 페이지 아래로 스크롤시 다크 스타일링 적용

// (1) 헤더의 요소를 가져옴
// document : 문서 전체에 대한 정보를 가지고 있는 객체
const header = document.querySelector('.header');

// (2) 헤더의 높이 알기
const headerHeight = header.offsetHeight;

// (3) 스크롤링되는 이벤트를 알려주기
// (4) 현재스크롤링되는 문서의 y좌표와 헤더의 높이를 비교해서 y 좌표가 높이보다 크다면
//    스타일링 바꿔주기 -> 헤더의 클래스이름을 다른 클래스이름으로 바꿔주기 -> css에서 지정해주기
document.addEventListener('scroll', () => {
    // 스크롤되는 y좌표가 headerHeight보다 크다면 다른 스타일링!

    if(window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});



// 2. Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
    
    home.style.opacity = 1 - window.scrollY/homeHeight;
    // 오답 (수학적 사고 기르자 소연아 ...)
    // if(window.scrollY/homeHeight*100 == 0) {
    //     home.style.opacity = 1;
    // }else if (window.scrollY/homeHeight*100 == 50){
    //     home.style.opacity = 0.5;
    // }else if (window.scrollY/homeHeight*100 == 100){
    //     home.style.opacity = 0;
        
    // } 
});


// 3. Arrow up 버튼을 아래로 스크롤시 투명하게 처리함
const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', ()=> {
    if(window.scrollY > homeHeight/2 ) { // 스크롤이 homeHeight의 절반정도가 된다면
        arrowUp.style.opacity = 1;
    } else {
        arrowUp.style.opacity = 0;
    }
});


// 4. Navbar 토글버튼 클릭 처리 ***********
// 각 메뉴 선택시 해당으로 가기, 메뉴 자동 닫히기
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open');
});