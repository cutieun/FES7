import { useEffect, useState } from "react";

function useScroll() {
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        // console.log('뷰포트의 높이 :', window.innerHeight);
        // console.log('총 높이 :', document.documentElement.offsetHeight);
        
        window.addEventListener("scroll", () => {
            // innerHight : 뷰포트의 높이
            // scrollTop : 타겟요소가 화면 상단으로부터 스크롤된 길이
            // offset : 페이지의 전체 높이(컨텐츠를 가진 화면의)
            // 뷰포트 높이 : 사용자가 보고있는 컨텐츠를 담고있는 화면의 높이

            // 뷰포트의 높이 + 스크롤의 값이 화면 전체의 높이보다 크거나 같다면
           setIsBottom(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight);
        });
    }, []);

    return isBottom;
}

export default useScroll;