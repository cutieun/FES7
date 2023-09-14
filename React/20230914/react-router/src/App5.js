import { BrowserRouter, Routes, Route, useParams, Outlet } from "react-router-dom";

export default function App5() {
    return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/products/:id/*" element={<Outlet/>}>
            <Route path="" element={<Product/>}/>
            <Route path="notice" element={<ProductNotice/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/users/*" element={<Outlet />}>
            <Route path="" element={<User user="jieun" />}/>
            <Route path="coupon/" element={<Coupon/>}/>
            <Route path="question/" element={<Question/>}/>
            <Route path="notice/" element={<Notice/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )

    function Index(){
        return <h1>Home Page</h1>
    }

    function Product(){
        const {id} = useParams();
        return <h1>{id} Product</h1>
    }

    function ProductNotice(){
        const {id} = useParams();
        return <h1>{id} ProductNotice</h1>
    }

    function Cart(){
        return <h1>Cart</h1>
    }

    function User({user}){
        return <h1>User : {user}</h1>
    }

    function Coupon(){
        return <h1>Coupon</h1>
    }

    function Question(){
        return <h1>Question</h1>
    }

    function Notice(){
        return <h1>Notice</h1>
    }
  
}
