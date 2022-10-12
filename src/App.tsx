import "./App.css";
import {Route, Routes} from "react-router-dom";
import Search from "./components/Search/Search";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Result from "./pages/Result/Result";

function App() {
  return <div className="App">
    <div className="App-wrapper">
      <Search/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:id' element={<Result/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  </div>;
}

export default App;
