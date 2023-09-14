import { BrowserRouter, Routes, Route, Link, useLocation, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name='jieun' />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three/*" element={<Outlet />}>
          <Route path="" element={<JieunIndex/>}/>
          <Route path="jieunnone/" element={<JieunOne/>}/>
          <Route path="jieuntwo/" element={<JieunTwo/>}/>
        </Route>
        <Route path="/blog/:id" element={<Blog />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One({name}){
  return <h1>{name} world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

function Blog(){
    const location = useLocation();
  console.log(location)
  return <h1>hello Blog</h1>
}

function JieunIndex(){
    const location = useLocation();
  console.log(location)
  return <h1>hello Jieun index</h1>
}

function JieunOne(){
    const location = useLocation();
  console.log(location)
  return <h1>hello Jieun 1</h1>
}

function JieunTwo(){
    const location = useLocation();
  console.log(location)
  return <h1>hello Jieun 2</h1>
}

export default App;