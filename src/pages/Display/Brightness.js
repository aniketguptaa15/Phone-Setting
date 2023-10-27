import React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "../Components/Toggle";
import ToggleSlider from "../Components/Slider";

export default function backup() {
  return (
    <div className="min-h-screen mx-4">
      <Link to={"/Display"} className="Link">
        <i className="fas fa-arrow-left mt-0"></i>
      </Link>
      <div className="mt-4 text-4xl flex my-4 "> Brightness level</div>
      <div className="flex items-center justify-between">
        <div className="flex-row">Automatic brightness</div>
        <div>
          <ToggleButton />
        </div>
      </div>
      <div>
        <ToggleSlider />
      </div>
      <div className="justify-between text-sm  text-gray-500">
        You can adjust screen screen brightness manually now. It will remain
        constant until you adjust it again.
      </div>
      <div className="flex   justify-between  mb-2">
        <div>
        <div className="mt-6">Sun light Mode</div>
      
      <div className="justify-between text-sm  text-gray-500">
        You can adjust brightness to strong ambient light when automatic
        brightness is off
      </div>
      </div>
      <div className="flex ">
        <ToggleButton />
      </div>
      </div>
    </div>
  );
}
