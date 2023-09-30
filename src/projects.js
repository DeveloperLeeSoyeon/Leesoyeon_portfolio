'use strict';

// 프로젝트 필터링 관련 로직 처리
// data custom property 사용해서 data-category, data-project 작성해 준 다음 해주기.
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectContainer = document.querySelector('.projects');

categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category;
    
    if(filter == null) { //all눌렀을 경우 null나옴 -> null나왔을 경우 콜백에서 처리X 바로 나가기
        return;
    }

    handActiveSelection(event.target);
    filterProjects(filter);
    

});



// Active 메뉴 재설정
// : 클릭하면 보여지고있는 카테고리를 활성화 시켜주기
function handActiveSelection(target) {
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    event.target.classList.add('category--selected'); //event(위 콜백함수에서 클릭된 event에 추가해주기)
}


//프로젝트 필터링 로직
function filterProjects(filter) {
    // 애니메이션
    projectContainer.classList.add('anim-out')


    projects.forEach((project) => {
    if(filter === 'all' || filter === project.dataset.type) {
        project.style.display = 'block';
    } else {
        project.style.display = 'none';
    }
    });

    setTimeout( () => {
        projectContainer.classList.remove('anim-out');
    }, 250);
}
