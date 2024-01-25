import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import FindText from "./pages/FindText";
import DetailText from "./pages/DetailText";
import Blog from "./pages/Blog";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="main" element={<Main/>}/>
          <Route path="blog">
            <Route index  element={<Blog/>}/>
            <Route path="search" element={<FindText/>}/>
            <Route path=":textCode" element={<DetailText/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
