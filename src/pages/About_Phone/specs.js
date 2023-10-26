import React from "react";
import { Link } from "react-router-dom";

export default function specs() {
  return (
    <div className="min-h-screen mx-4">
      <Link to={"/About_Phone"} className="Link">
        <i className="fas fa-arrow-left mt-0"></i>
      </Link>
      <div className="mt-4 text-4xl "> All specs</div>
      <div className="border border-zinc-400 rounded-lg mt-4">
        <div className="flex ml-2">
          <div className=" mt-4 ">
            <div className="text-gray-400 text-xs m-2"> Device </div>
            <div className="text-sm m-2"> Redmi Note 8 </div>
          </div>
          <div>
            <div className="text-gray-400 text-xs m-2 mt-6 mx-8 ml-12">RAM</div>
            <div className="text-sm ml-12 ">4.00 GB</div>
          </div>
        </div>
        <div className="ml-2">
          <div>
            <div className="text-gray-400 text-xs mt-6 m-2">CPU </div>
            <div className="text-sm m-2">Octa-core Max2.01GHZ</div>
          </div>
        </div>
      </div>
      <div className="border border-zinc-400 rounded-lg mt-4">
        <div className="text-sm mx-4 mt-4">Android Version</div>
        <div className="text-gray-400 text-xs m-4 mt-1">
          11 RKQ1 .201004.002
        </div>
      </div>
      <div className="flex my-4 text-sm">
        <div className=" mr-4 w-1/2 border border-zinc-400 rounded-lg">
          {" "}
          <div className="m-4">Android Security Update </div>
          <div className="text-gray-400 text-xs m-4 mt-12">2022-05-01</div>
        </div>
        <div className=" w-1/2 border border-zinc-400 rounded-lg">
          {" "}
          <div className="m-4">MIUI version</div>{" "}
          <div className="text-gray-400 text-xs m-4 mt-8">
            MIUI Global <br></br>12.5.2 Stable<br></br>12.5.2.0 (RCOINXM)
          </div>
        </div>
      </div>

      <div className=" text-sm  mt-4 border border-zinc-400 rounded-lg">
        <div className="ml-4 mt-6">Model</div>
        <div className="text-gray-400 text-xs ml-4 mb-8">M19008C3JI</div>
        <div className="ml-4 mt-6"> Baseband version</div>
        <div className="text-gray-400 text-xs ml-4 mb-8">
          .1-00270-NICOBAR_GEN_PACK-1.433714.435199.1
        </div>
        <div className="ml-4 mt-6">Kernal version4</div> <div className="text-gray-400 text-xs ml-4 mb-8">.14.190-perf-gc61d39ef577-dirty</div>
      </div>
      <div className=" text-sm  mt-4 border border-zinc-400 rounded-lg">
        <div className="ml-4 mt-5">Internal storage</div>
        <div className="text-gray-400 text-xs ml-4 mb-6">Available storage 6.39 GB / Total storage 64.00 GB</div></div>
    </div>
  );
}
