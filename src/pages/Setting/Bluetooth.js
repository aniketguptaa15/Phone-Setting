import React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "../Components/Toggle";

export default function  VPN() {
    return (
        <div className="min-h-screen mx-4">
            <Link to={"/"} className="Link">
                <i className="fas fa-arrow-left mt-0"></i>
            </Link>
            <div className="mt-4 text-4xl flex   "> Bluetooth</div>
            <ul>
            <li className='mt-8'>
            <div className='flex justify-between items-center'>
              <div>
                <div>
                  Bluetooth
                </div>
                
              </div>
              <div className="ml-4"><ToggleButton/></div>
              
            </div>
          </li>
          <li ><div className=' border-b-2 justify-between mb-5 border-gray-300'>
        <Link to={"/Wi-fi"} className=' my-5 Link pb-2 flex justify-between items-center'>
          <div className="mr-12">
            Device Name
          </div>
          <div className=' text-sm text-gray-400'>
                 Redmi Note 8 pro
                </div>
          <i className="fa-solid fa-angle-right "></i>
        </Link>
        </div></li>
        <li>
        <div className='text-base text-gray-400'>
                   Bluetooth Settings
                </div>
                <Link to={"/Wi-fi"} className=' my-5 Link pb-2 flex justify-between items-center'>
          <div >
            Additional settings
          </div>
          <i className="fa-solid fa-angle-right "></i>
        </Link>
        </li>
          </ul>
          
            
        </div>
    );
}
