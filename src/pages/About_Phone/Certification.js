import React from "react";
import { Link } from "react-router-dom";
import certificateImage from '../images/Certification.jpg'

export default function certification() {
  return (
    <div className="min-h-screen mx-4">
         <Link to={"/About_Phone"} className="Link">
        <i className="fas fa-arrow-left mt-0"></i>
      </Link>
      <div className="mt-4 text-4xl flex my-4 ">Certification</div>
      <div className="rounded-full m-3 flex-col flex items-center">
          <img src={certificateImage} alt="cerficate_image"  />
        </div>

      
    </div>
  );
}
