import React, { Component } from "react";
import axios from "axios";
import DashboardData from "./DashboardData";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
    };
    
  }
  

  componentDidMount() {
    axios
      .get("http://127.0.0.1:4000/cars/brand/audi",{
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((res) => {
        this.setState({
          cars: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("Invalid data");
      });
  }

  data = () => {
    return this.state.cars.map((res, i) => {
      return <DashboardData obj={res} key={i} />;
    });
  };

  render() {
    return (
      <div>
        kampoo
        <div>{this.data()}</div>
      </div>
    );
  }
}

//  <div>
//     <div
//       style={{
//         alignItems: "center",
//         display: "flex",
//         flexFlow: "row wrap",
//       }}
//     >
//       {/*car1*/}
//       <div
//         style={{
//           alignItems: "center",
//           border: "2px solid red",
//           width: "500px",
//           height: "350px",
//           margin: 5,
//           borderRadius: 15,
//         }}
//       >
//         {/* รูปรถ */}
//         <img
//           src="https://cf.shopee.co.th/file/fb971be3bb71f54aff61fcd2b840aa09"
//           style={{
//             borderRadius: 15,
//             width: "100%",
//             height: "100%",
//             boxShadow: "1px 1px 2px 2px grey",
//           }}
//         />
//         <div
//           style={{
//             border: "3.5px solid white",
//             borderRadius: 50,
//             width: "40px",
//             height: "40px",
//             top: "-110px",
//             position: "relative",
//             left: "230px",
//           }}
//         >
//           {/* โลโก้ยี่ห้อ */}
//           <img
//             src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/09/Ferrari-Logo-Font-1-e1630937810238.jpg?fit=888%2C690&ssl=1"
//             style={{
//               borderRadius: 50,
//               width: "100%",
//               height: "100%",
//             }}
//           />
//         </div>
//         <h5
//           style={{
//             textAlign: "center",
//             top: "-110px",
//             position: "relative",
//             color: "white",
//           }}
//         >
//           Lamborghini Aventador
//         </h5>
//         <h6
//           style={{
//             textAlign: "center",
//             top: "-110px",
//             position: "relative",
//             color: "white",
//           }}
//         >
//           45,000,000 บาท
//         </h6>
//       </div>
//     </div>
//   </div>