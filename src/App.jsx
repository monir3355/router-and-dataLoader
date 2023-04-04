import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Rechart from "./components/Rechart/Rechart";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container mx-auto">
        <Outlet></Outlet>
        {/* <Rechart></Rechart> */}
      </div>
    </div>
  );
}

export default App;
