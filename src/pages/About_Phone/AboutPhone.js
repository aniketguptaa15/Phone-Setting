import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import phoneImage from "../images/MIUI.png";

export default function AboutPhone() {
  return (
    <Container>
      <Link to={"/"} className="Link mx-4">
        <i className="fas fa-arrow-left"></i>
      </Link>
      <div className="text-4xl m-4" style={{ marginTop: "15px" }}>
        About Phone
      </div>

      <div className="flex rounded-full  justify-between m-4">
        <div className=" border   mt-5  rounded-xl border-transparent bg-gray-100  w-44 h-1/2  ">
         
          <div className="h-min w-5/12 m-4 mt-10">
            <img src={phoneImage} alt="Phone" />
          </div>
          <div className="m-4">
           
            <div className="text-lg">MIUI version</div>
            <div className="text-gray-500 text-xs italic ">
              <div> MIUI Global</div>
              <div>12.5.2 </div>
              <div>Stable</div>
            </div>
          </div>
        </div>
        <div className="ml-2">
          <div className="border border-transparent  rounded-xl w-40 h-1/3 mt-5 mb-2.5  bg-gray-100 ">
            <div className="m-4 text-lg">
              Device name
              <div className="italic text-xs my-1" style={{ color: "gray" }}>
                Redmi Note 8 Pro
              </div>
            </div>
          </div>

          <div className=" border-transparent border-2 rounded-xl w-40 h-auto   bg-gray-100">
            <div className="mt-4 ml-4 text-lg">
              Storage
              <div className="italic text-xs mt-3" style={{ color: "gray" }}>
                <br />
                Occupied
              </div>
              <div className=" text-lg mb-1"> 56.6GB/64GB</div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-4 flex items-center">
        <div className="w-1/2">MIUI version</div>
        <div className="w-1/2 text-right">
          <div className="text-gray-500 text-lg">
            MIUI Global 12.5.2
            <br />
            stable
            <br />
            12.5.2.0(RCONINXM)
          </div>
        </div>
      </div>
      <div className="m-4 flex items-center">
        <div className="w-1/2">Android Version</div>
        <div className="w-1/2 text-right">
          <div className="text-gray-500 text-lg">
            11
            <br />
            RKQ1.201004.002
          </div>
        </div>
      </div>
      <div className="ml-4 mr-4 flex items-center">
        <div className="w-1/2">Android security update</div>
        <div className="w-1/2 text-right text-gray-500">
          <div className="text-gray-500 text-lg">2022-05-01</div>
        </div>
      </div>
      <Link to={"/Specs"} className="Link">
        <div className="m-4 mr-4 flex rounded">All specs</div>
        <i className="fa-solid fa-angle-right m-4"></i>
      </Link>
      <div className="border-y-2 border-gray-300 m-4">
        <Link to={"/BackUp&Restore"} className="Link">
          <div className="  flex rounded my-4 pt-4">Back up and restore</div>
          <i className="fa-solid fa-angle-right "></i>
        </Link>
        <Link to={"/Reset"} className="Link">
          <div className="  flex rounded my-3 pb-4">Factory reset</div>
          <i className="fa-solid fa-angle-right "></i>
        </Link>
      </div>
      <Link to={"/importa"} className="Link">
        <div className="m-4 mt-1 flex rounded">
          Important safety information
        </div>
        <i className="fa-solid fa-angle-right m-4"></i>
      </Link>
      <Link to={"/certification"} className="Link">
        <div className="m-4 mt-1 flex rounded">Certification</div>
        <i className="fa-solid fa-angle-right m-4"></i>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  .Link {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
