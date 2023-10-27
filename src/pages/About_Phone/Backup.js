import React from "react";
import { Link } from "react-router-dom";
import  ToggleButton  from "../Components/Toggle";

export default function backup() {
  return (
    <div className="min-h-screen mx-4">
      <Link to={"/About_Phone"} className="Link">
        <i className="fas fa-arrow-left mt-0"></i>
      </Link>
      <div className="mt-4 text-4xl flex my-4 "> Back up and restore</div>

      <div className="flex flex-col ">
        <div className="text-sm text-gray-500 my-4">LOCAL </div>{" "}
        <div className="border border-transparent  rounded-xl w-auto h-1/3 mt-2 mb-2.5  bg-gray-100 ">
          <div className="m-4 text-lg">
            Mobile Device
            <div className="italic text-xs my-1" style={{ color: "gray" }}>
              Back up and restore items on this device
            </div>
          </div>
        </div>
        <div className="border border-transparent  rounded-xl w-auto h-1/3  mb-2.5  bg-gray-100 ">
          <div className="m-4 text-lg">
            Computer
            <div className="italic text-xs my-1" style={{ color: "gray" }}>
              Back up and restore items using a computer
            </div>
          </div>
        </div>
        <div className="border-y-2  my-4">
          <div className="text-sm mt-5 text-gray-500 mb-2">CLOUD </div>{" "}
          <div className="flex flex-col gap-2">
            <Link to={"/cloud"} className="Link">
              <div className="flex justify-between mb-6 ">
                <div className=" ">
                  <div className=" justify-between  ">Xiomi Cloud</div>
                  <div className=" text-sm text-gray-500  ">
                    Syncthe list of apps, back up system settings and Home
                    screen layout{" "}
                  </div>
                </div>
                <div className="flex items-center ">
                  <i className="fa-solid fa-angle-right ml-4 "></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="text-sm text-gray-500 mb-4">GOOGLE BACKUPS </div>{" "}
        <Link to={"/Backup"} className="Link">
          <div className="flex justify-between     pt-2 ">
            <div className=" ">
              <div className=" justify-between  ">Back up my data</div>
              <div className=" text-sm text-gray-500  ">on</div>
            </div>

            <div className="flex items-center ">
              <i className="fa-solid fa-angle-right  "></i>
            </div>
          </div>
        </Link>
        <Link to={"/Backup"} className="Link">
          <div className="flex justify-between     mt-4 ">
            <div className=" ">
              <div className=" justify-between  ">Back account</div>
              <div className=" text-sm text-gray-500  ">Add a back up account now</div>
            </div>

            <div className="flex items-center ">
              <i className="fa-solid fa-angle-right  "></i>
            </div>
          </div>
        </Link>
        < div className='flex items-center justify-between mt-4'>
            <div>
              <div className=''>
                Automatic restore
              </div>
              <div className='text-base text-gray-400 '>
              When reinstalling an app , restore backed-up settings anda data
              </div>
            </div>
            <div className='text-gray-400 flex'>
            <ToggleButton/>
            </div>
            </div>
            <div className="border-t-2 mt-8">
            <Link to={"/Backup"} className="Link">
          <div className="flex justify-between  pt-6 ">
            <div className=" ">
              <div className=" justify-between  ">Help and feedback</div>
            </div>

            <div className="flex items-center ">
              <i className="fa-solid fa-angle-right  "></i>
            </div>
          </div>
        </Link>
        <Link to={"/Backup"} className="Link">
          <div className="flex justify-between pt-4 ">
            <div className=" ">
              <div className=" justify-between  ">Google account</div>
            </div>

            <div className="flex items-center ">
              <i className="fa-solid fa-angle-right  "></i>
            </div>
          </div>
        </Link>
        </div>
      </div>
    </div>
  );
}
