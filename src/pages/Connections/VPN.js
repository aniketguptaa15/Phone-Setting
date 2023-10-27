import React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "../Components/Toggle";

export default function  VPN() {
    return (
        <div className="min-h-screen mx-4">
            <Link to={"/connections"} className="Link">
                <i className="fas fa-arrow-left mt-0"></i>
            </Link>
            <div className="mt-4 text-4xl flex   "> VPN</div>
            <div className="items-center justify-between flex mt-6 ml-1">
                <div className=" ">
                    <div className="flex-row">VPN</div>
               
                </div>
                <div>
                    <ToggleButton />
                </div>
            </div>
            
        </div>
    );
}
