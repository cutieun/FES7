import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom'

export default function Quiz() {
  return (
    <BrowserRouter>
        <a href="/cart">카트페이지</a>
        <Link to="/">홈으로</Link>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/cart" element={<Cart/>}/>
            {/* Outlet은 라우트에서 자식으로 있는 컴포넌트를 꺼내서 보여주는 컴포넌트 */}
            {/* <Route path="/users/*" element={<Outlet/>}> */}
            <Route path="/users/*" element={<Users/>}>
                {/* <Route path="" element={<Users/>}/> */}
                <Route path="coupon" element={<Coupon/>}/>
                <Route path="question" element={<Question/>}/>
                <Route path="notice" element={<Notice/>}/>
            </Route>
            <Route path="/products/:id" element={<ProductDetailPage/>}/>
            <Route path="/products/:id/notice" element={<ProductDetailNoticePage/>}/>
        </Routes>
        <Button/>
    </BrowserRouter>
  )
}

function HomePage(){
    return <h1>홈페이지</h1>
}

function Cart(){
    return <h1>카트</h1>
}

function Users(){
    return (
        <div>
            <h1>사용자</h1>
            {/* Outlet은 여기서도 사용 가능하다. 
            부모 컴포넌트를 유지하면서 자식 컴포넌트를 바꿀 수 있다. */}
            <Outlet/>
        </div>
    )
}

function Coupon(){
    return <h1>쿠폰</h1>
}

function Question(){
    return <h1>질문</h1>
}

function Notice(){
    return <h1>알림</h1>
}

function ProductDetailPage(){
    const {id} = useParams();
    return <h1>{id} 상품 상세</h1>
}

function ProductDetailNoticePage(){
    const {id} = useParams();
    return <h1>{id} 상품 상세 알림</h1>
}

function Button() {
    // link는 컴포넌트, navigate는 이벤트를 통해서 함수로 사용
    const navigate = useNavigate(); 
    return <button onClick={()=>navigate("/users")}>유저보기</button>
}