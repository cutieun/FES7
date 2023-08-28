const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const modal = document.querySelector('.modal');
const dim = document.querySelector('.dim');
const modalEl = modal.querySelectorAll('a, button');
const firstEl = modalEl[0];
const lastEl = modalEl[modalEl.length-1];

// 1. 모달창 열기
btnOpen.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
})

// 2. 모달창 닫기
btnClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.removeProperty('overflow');
})

// 3. dim 눌렀을 때 창닫기
dim.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow='auto';
})

// 4. tab 눌렀을 때 포커스 -> 웹접근성
modal.addEventListener('keydown', (e) => {
    console.log(e.key);
    // 1. tab
    // 2. tab+shift
    // first / last 에 따라 focus 주기

    const activeEl = document.activeElement;
    console.log(activeEl);
     if(e.key === 'Escape'){
        modal.classList.remove('active');
        // window.close(); -> 탭이 닫힘.
    }
    if(e.key === 'Tab'){
        if(e.shiftKey) {
            if(activeEl === firstEl){
                e.preventDefault();
                lastEl.focus();
            }
        }
        else {
            if(activeEl === lastEl){
                e.preventDefault();
                firstEl.focus();
            }
        }
    }
})

document.addEventListener('keydown', (e) => {
    if(modal.classList.contains('active') && e.key === 'Escape') {
        modal.classList.remove('active');
    }
})