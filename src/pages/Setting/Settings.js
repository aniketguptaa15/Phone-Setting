import React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "../Components/Toggle";
import styled from "styled-components";
import  {BiBluetooth} from "react-icons/bi"

export default function Settings() {
  return (
    <Container className="h-screen mx-2">
      <div className="text-5xl  mt-5">Settings</div>

      <div
        className="flex rounded-full mb-5"
        style={{ backgroundColor: "lightgray", marginTop: "20px" }}>
        <i className="fa fa-search px-3" style={{ marginTop: "13px" }}></i>
        <input
          type="text"
          className="w-full py-1.5 px-3 text-black rounded-full focus:outline-none "
          placeholder=" Search Settings"
          style={{ backgroundColor: "lightgray" }}
        />
      </div>

      <ul className="flex flex-col justify-evenly  mt-0">
        <li>
          <Link to={"/About_phone"} className="Link">
            <div className="flex">
              <div className="px-1 rounded-md mr-4 ">
                <i
                  class="fas fa-mobile "
                  style={{ color: "lightblue", fontSize: "28px" }}></i>
              </div>
              About Phone
            </div>
            <div className="text-gray-600 italic text-sm mr-0">
              MIUI Global 12.5.2
            </div>
            <i className="fa-solid fa-angle-right ml-0"></i>
          </Link>
        </li>

        <li>
          <Link to={"/display"} className="Link">
            <div className="flex">
              <div className="w-7 px-1 mr-4 bg-white-500 rounded">
                <i
                  className="fa-solid fa-sun"
                  style={{ color: "#ecd95f", fontSize: "28px" }}></i>
              </div>
              Display & Brightness
            </div>
            <i className="fa-solid fa-angle-right"></i>
          </Link>
        </li>

        <li>
          <Link to={"/sound"} className="Link">
            <div className="flex">
              <div className="w-7 px-1 mr-4  rounded">
                <i
                  className="fa-solid fa-volume-low"
                  style={{ color: "#37e189", fontSize: "28px" }}></i>
              </div>
              Sound & Vibration
            </div>
            <i className="fa-solid fa-angle-right"></i>
          </Link>
        </li>

        <li>
          <Link to={"/connections"} className="Link">
            <div className="flex">
              <div className="w-7 px-1 mr-4 rounded">
                <i
                  className="fas fa-share"
                  style={{ color: "lightcoral", fontSize: "28px" }}></i>
              </div>
              Connections & Sharing
            </div>
            <i className="fa-solid fa-angle-right"></i>
          </Link>
        </li>
        <li className="flex justify-between">
          <div className="flex">
            <div className="w-7 px-1 mr-4  rounded">
              <i
                className="fas fa-plane-up"
                style={{ color: "teal", fontSize: "28px" }}></i>
            </div>
            Aerpolane Mode
          </div>
          <div className="mt-2">
            <ToggleButton />
          </div>
        </li>
        <div className=" border-t-2 border-gray-300 mb-8 "></div>

        <li>
          <Link to={"/WIFI"} className="Link  ">
            <div className="flex items-center ">
              <div className=" mx-2 text-blue-500">
                <i class="fa-solid fa-wifi"></i>
              </div>
              <div className="ml-1">WIFI</div>
            </div>
            <i className="fa-solid fa-angle-right"></i>
          </Link>
        </li>
        <li>
          <Link to={"/Bluetooth"} className="Link  ">
            <div className="flex items-center ">
              <div className="text-2xl mx-2 text-blue-500">
              <BiBluetooth/>
              </div>
              <div className="ml-1">Bluetooth</div>
            </div>
            
            <i className="fa-solid fa-angle-right"></i>
          </Link>
        </li>
        <li>
          <Link to={"/Bluetooth"} className="Link  ">
            <div className="flex items-center ">
              <div className="text-2xl mx-2 text-blue-500">
              <BiBluetooth/>
              </div>
              <div className="ml-1">Bluetooth</div>
            </div>
            
            <i className="fa-solid fa-angle-right"></i>
          </Link>
        </li>
      </ul>
    </Container>
  );
}
const Container = styled.div`
  .Link {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul li {
    padding: 0.5rem;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  ul li:hover {
    background-color: lightgray;
  }
`;
