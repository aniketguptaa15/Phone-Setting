import React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "../Components/Toggle";

export default function SoundAssistant() {
    return (
        <div className="min-h-screen mx-4">
            <Link to={"/Sound"} className="Link">
                <i className="fas fa-arrow-left mt-0"></i>
            </Link>
            <div className="mt-4 text-4xl flex my-4  "> Sound assistant</div>
            <div className="items-center justify-between flex mt-6">
                <div className=" ">
                    <div className="flex-row">Adjust media sound in multiple apps</div>
                    <div className=" text-sm  text-gray-500">
                        Adjust sound for indivisual apps while multiple apps play audio simultaneously
                    </div>
                </div>
                <div>
                    <ToggleButton />
                </div>
            </div>
            <div className="flex items-center justify-between  mb-2">
                <div>
                    <div className="mt-6">Multiple audio sources</div>

                    <div className="justify-between text-sm  text-gray-500">
                        Don't adjust media volume during incoming  notification or while audio from other source is played                        brightness is off
                    </div>
                </div>
                <div className="">
                    <ToggleButton />
                </div>
            </div>
        </div>
    );
}
