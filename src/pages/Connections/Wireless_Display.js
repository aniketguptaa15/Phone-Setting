import React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "../Components/Toggle";

export default function wireless() {
    return (
        <div className="min-h-screen mx-4">
            <Link to={"/connections"} className="Link">
                <i className="fas fa-arrow-left mt-0"></i>
            </Link>
            <div className=" text-4xl flex mt-4  "> Wireless display</div>
            <div className="items-center justify-between flex mt-8 ml-1">
                <div className=" ">
                    <div className="flex-row">Wireless display</div>
               
                </div>
                <div>
                    <ToggleButton />
                </div>
            </div>
            
        </div>
    );
}
