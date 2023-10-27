import React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "../Components/Toggle";

export default function VPN() {
  return (
    <div className="min-h-screen mx-4">
      <Link to={"/"} className="Link">
        <i className="fas fa-arrow-left mt-0"></i>
      </Link>
      <div className="mt-4 text-4xl flex   "> Security Status</div>
      <div className="items-center justify-between flex mt-6 ">
        <div className=" ">
          <div className="flex-row">Find Device</div>
        </div>
        <div className=" text-lg text-gray-500">off</div>
      </div>
      <div className="items-center justify-between flex mt-6 ">
        <div className=" ">
          <div className="flex-row">Security Update</div>
        </div>
        <div className=" text-lg text-gray-500">2022/05/01</div>
      </div>
      <div className="flex justify-between mt-6 ">
        <div>
          <div className=" justify-between  ">Google Play Protect</div>
          
        </div>
        <div className="flex items-center ">
          <i className="fa-solid fa-angle-right  "></i>
        </div>
      </div>
      <div className="flex justify-between mt-6 ">
        <div>
          <div className=" justify-between  ">Google Play system Update</div>
          <div className=" text-sm text-gray-500  ">
            Connect to a display wirelessly
          </div>
        </div>
        <div className="flex items-center ">
          <i className="fa-solid fa-angle-right  "></i>
        </div>
      </div>
    </div>
  );
}
