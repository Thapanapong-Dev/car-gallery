import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Image,
  Dropdown,
  DropdownButton,
  Card,
  CardGroup,
  Row,
} from "react-bootstrap";
import { Button } from "bootstrap";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
      filtered_cars : []
    };
  }
  componentDidMount() {
    this.getCar()
  }

  getCar = () => {
    axios
      .get("http://127.0.0.1:4000/cars", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        this.setState({
          cars: res.data,
        });
        // return res.data
        console.log(this.state.cars);
      })
      .catch((error) => {
        console.log(error);
        console.log("Invalid data");
      });
  };

  getSort = (e) => {
    var _data = this.state.filtered_cars.length > 0 ? this.state.filtered_cars: this.state.cars;
    if (e === "1") {
      console.log("A - Z");
      _data.sort((a, b) => a.model.localeCompare(b.model));
      console.log(_data);
      this.setState({ cars: _data });
    } else if (e === "2") {
      console.log("Z - A");
      _data.sort((a, b) => b.model.localeCompare(a.model));
      console.log(_data);
      this.setState({ cars: _data });
    } else if (e === "3") {
      console.log("0 - 100");
      _data.sort((a, b) => a.price - b.price);
      console.log(_data);
      this.setState({ cars: _data });
    } else if (e === "4") {
      console.log("100 - 0");
      _data.sort((a, b) => a.price - b.price);
      console.log(_data);
      this.setState({ cars: _data.reverse() });
    }
  };

  getBrand = (e) => {
    var _data = this.state.cars;
    this.setState({filtered_cars:[]})
    if (e === "1") {
      var _data = this.state.cars;
      var ret = [];
      for (var i = 0; i < _data.length; i++) {
        if (_data[i].brand === "bmw") {
          ret.push(_data[i]);
        }
      }

      this.setState({ filtered_cars: ret });
    } else if (e === "2") {
      var _data = this.state.cars;
      var ret = [];
      for (var i = 0; i < _data.length; i++) {
        if (_data[i].brand === "audi") {
          ret.push(_data[i]);
        }
      }

      this.setState({ filtered_cars: ret });
    }
    else if (e === "3") {
      var _data = this.state.cars;
      var ret = [];
      for (var i = 0; i < _data.length; i++) {
        if (_data[i].brand === "aston-martin") {
          ret.push(_data[i]);
        }
      }

      this.setState({ filtered_cars: ret });
    }
    else if (e === "4") {
      var _data = this.state.cars;
      var ret = [];
      for (var i = 0; i < _data.length; i++) {
        if (_data[i].brand === "ferrari") {
          ret.push(_data[i]);
        }
      }

      this.setState({ filtered_cars: ret });
    }
  };

  data = (dt) => {
    return dt.map((res) => {
      return (
        <Card
          className="text-center"
          style={{ width: "20vw", margin: "1vw", backgroundColor: "#DCDCDC" }}
        >
          <Card.Img
            variant="top"
            src={res.images.split(",")[0]}
            style={{ height: "25vh", paddingTop: "0.5vw" }}
          />
          <Card.Body>
            <Card.Title style={{ textDecoration: "none" }}>
              {res.model}
            </Card.Title>
            <Card.Footer className="text-muted">
              {res.price.toLocaleString("en-US")} บาท
            </Card.Footer>
          </Card.Body>
        </Card>
      );
    });
  };

  render() {
    return (
      <div style={{ display: "flex", width: "100%" }}>
        <Link
          to={{
            pathname: "/brand/car/details",
            state: {
              //   model: this.props.cars.model,
              //   price: data.price,
              //   type: data.type,
              //   engine: data.engine,
              //   engineDetails: data.engineDetails,
              //   drivertrain: data.drivertrain,
              //   transmission: data.transmission,
              //   fuel: data.fuel,
              //   fuelSupplySystem: data.fuelSupplySystem,
              //   upholsteryMat: data.upholsteryMat,
              //   elecSeat: data.elecSeat,
              //   sound: data.sound,
              //   absBreak: data.absBreak,
              //   airBags: data.airBags,
              //   elecGlass: data.elecGlass,
              //   equipOut: data.equipOut,
              //   equipIn: data.equipIn,
              //   equipSec: data.equipSec,
              //   equipLivable: data.equipLivable,
              //   note: data.note,
              //   advice: data.advice,
              //   update: data.update
            },
          }}
          className="container"
        >
          <Row>{this.data(this.state.filtered_cars.length > 0 ? this.state.filtered_cars : this.state.cars)}</Row>
        </Link>
        <div>
          <div
            style={{
              width: "20vw",
              height: "100vh",
              padding: "20px",
              paddingTop: "10vh",
              backgroundColor: "pink",
              position: "-webkit-sticky",
              position: "sticky",
              top: "0",
            }}
          >
            <DropdownButton
              id="sorting"
              title="sort by"
              onSelect={(e) => this.getSort(e)}
            >
              <Dropdown.Item eventKey="1">ก - ฮ</Dropdown.Item>
              <Dropdown.Item eventKey="2">ฮ - ก</Dropdown.Item>
              <Dropdown.Item eventKey="3">ราคาต่ำ - สูง</Dropdown.Item>
              <Dropdown.Item eventKey="4">ราคาสูง - ต่ำ</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              id="brand-filter"
              title="Brand"
              onSelect={(e) => this.getBrand(e)}
            >
              <Dropdown.Item eventKey="1">bmw</Dropdown.Item>
              <Dropdown.Item eventKey="2">audi</Dropdown.Item>
              <Dropdown.Item eventKey="3">aston martin</Dropdown.Item>
              <Dropdown.Item eventKey="4">ferrari</Dropdown.Item>
            </DropdownButton>
            <p>filter</p>
          </div>
        </div>
      </div>
    );
  }
}
