import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import Details from "./components/Details";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Car from "./components/Car";
import ThemeContext from "./components/ThemeContext";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CarImgSlider from "./components/CarImgSlider";
import {CarImgGallery} from "./components/CarImgGallery";

export default function App() {
  return (
    <div>
      <Navbar
        className="Navbar"
        bg="purple"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Brand>CARGallery</Navbar.Brand>
      </Navbar>
      <Dashboard></Dashboard>
      {/* <CarImgSlider slides={CarImgGallery}/> */}
      {/* <Details/> */}
    </div>
  );
}
// export default class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <BrowserRouter>
//           <div>
//             <Link to="/" style={{ margin: "10px" }}>
//               Dashdoard
//             </Link>
//           </div>
//           <Routes>
//             <Route path="/" element={<Dashboard />}></Route>
//             <Route
//               path="/car"
//               element={
//                 <ThemeContext.Provider value="เอาไอดีไปไงดีครับ">
//                   <Car />
//                 </ThemeContext.Provider>
//               }
//             ></Route>
//           </Routes>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }
