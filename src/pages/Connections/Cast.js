import React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "../Components/Toggle";

export default function cast() {
    return (
        <div className="min-h-screen mx-4">
            <Link to={"/connections"} className="Link">
                <i className="fas fa-arrow-left mt-0"></i>
            </Link>
            <div className="mt-4 text-4xl flex   "> Cast</div>

            
        < div className='flex items-center justify-between mt-6'>
            <div>
              <div className=''>
                Cast
              </div>
              <div className='text-base text-gray-400 '>
             Cast screen content to a external moniter
              </div>
            </div>
            <div className='text-gray-400 flex'>
            <ToggleButton/>
            </div>
            </div>
            <Link to={"/Backup"} className="Link ">
          <div className="flex justify-between   mt-4 mb-6 ">
            <div className=" ">
              <div className=" justify-between  ">Demos</div>
              <div className=" text-sm text-gray-500  ">Casting documents, games, photos and videos</div>
            </div>

            <div className="flex items-center ">
              <i className="fa-solid fa-angle-right  "></i>
            </div>
          </div>
        </Link>
        <div className="text-gray-500 text-lg pt-4  italic border-t-2 ">other</div>

        <Link to={"/Backup"} className="Link ">
          <div className="flex justify-between   mt-4 ">
            <div className=" ">
              <div className=" justify-between  ">Help</div>
            </div>

            <div className="flex items-center ">
              <i className="fa-solid fa-angle-right  "></i>
            </div>
          </div>
        </Link>
        <Link to={"/Backup"} className="Link ">
          <div className="flex justify-between   mt-4 ">
            <div className=" ">
              <div className=" justify-between  ">Privacy Policy</div>
            </div>

            <div className="flex items-center ">
              <i className="fa-solid fa-angle-right  "></i>
            </div>
          </div>
        </Link>
            
        </div>
    );
}
