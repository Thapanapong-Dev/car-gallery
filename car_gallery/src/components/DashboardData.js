import React, { Component } from "react";
import { Link } from "react-router-dom";
import CarImgSlider from "./CarImgSlider";
import { CarImgGallery } from "./CarImgGallery";
export default class DashboardData extends Component {
  // เอาไอดีมาเก็บไว้ในสเตดอีกตัวแปรนึงเพื่อค่าจะได้ไม่เปลี่ยน แล้วค่อยใช้ตัวแปรโกลบอลส่งให้ลูก
  render() {
    const images = this.props.obj.images.split(",");
    return (
      <div>
        <h1>{this.props.obj.brand}</h1>
        <h1>{this.props.obj.model}</h1>
{/* 
        <img
          src={images[0]}
          alt="{{images[0]}}"
          style={{ height: "200px", width: "auto" }}
        ></img> */}
        <CarImgSlider slides = {images}></CarImgSlider>
        {/* <Link to="/car">See</Link> */}
      </div>
    );
  }
}

// {images.map((url) => {
//   return(
//     <img src={url}></img>)
//   })}
