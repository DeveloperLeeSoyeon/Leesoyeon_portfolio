

    // 구현 계획
    // 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고 온다.
    // 2. Intersection Observer 사용하여 모든 섹션 관찰해야 한다.
    // 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
    // 보여지는 섹션 : 
    // - 다수의 섹션이 동시에 보여진다면, 가장 첫번째 섹션을 선택 ->  현재화면에 보이는 섹션들을 알아야함
    // - 마지막 footer가 완전히 보이는 상황에는 가장 마지막 contact 를 활성화

    // 아이디들을 가지고 섹션 요소들 가지고 오기
    const sectionIds = [
        '#home',
        '#about',
        '#skills',
        '#work',
        '#testimonial',
        '#contact',
      ];

    // 각각의 문자열 아이디를 querySelector로 id를 전달해줘서 해당하는 요소들을 가져와서 매핑
    const sections = sectionIds.map((id) => document.querySelector(id));
    const navItems = sectionIds.map((id) =>
      document.querySelector(`[href="${id}"]`)
    );

    // 현재 섹션들이 보여지고 있는지 가지는 배열
    const visibleSections = sectionIds.map(() => false); //기본적으로 모든 요소들은 보여지지않는다고 설정 
    let activeNavItem = navItems[0];

    const options = {
        rootMargin: '-20% 0px 0px 0px',
        threshold: [0, 0.98],
      };
    const observer = new IntersectionObserver(observerCallback, options);
    sections.forEach((section) => observer.observe(section));

    function observerCallback(entries) {
        let selectLastOne;
        entries.forEach((entry) => {
          const index = sectionIds.indexOf(`#${entry.target.id}`);
          visibleSections[index] = entry.isIntersecting;
          selectLastOne =
            index === sectionIds.length - 1 &&
            entry.isIntersecting &&
            entry.intersectionRatio >= 0.95;
        });


        const navIndex = selectLastOne
        ? sectionIds.length -1 
        : findFirstIntersecting(visibleSections);

        selectNavItem(navIndex);
    
    }
    
    function findFirstIntersecting(intersections) {
        const index = intersections.indexOf(true);
        return index > 0? index : 0;
    }

    function selectNavItem(index) {
        const navItem = navItems[index];
        if (!navItem) return;
        activeNavItem.classList.remove('active');
        activeNavItem = navItem;
        activeNavItem.classList.add('active');
    }