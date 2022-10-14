import "../App.css";
import {Route, Routes} from "react-router-dom";
import Search from "./Search/Search";
import Home from "../pages/Home/Home";
import Result from "../pages/Result/Result";
import NotFound from "../pages/NotFound/NotFound";

function App() {
  return <div className="App">
    <div className="App-wrapper">
      <Search/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Result/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  </div>;
}

export default App;
