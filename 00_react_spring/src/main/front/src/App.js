
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./page/Main";
import MenuPage from "./page/MenuPage";


function App() {



  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path="menuPage" element={<MenuPage/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}


export default App;
