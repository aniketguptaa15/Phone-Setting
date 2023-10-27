import React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "../Components/Toggle";

export default function  sound() {
    return (
        <div className="min-h-screen mx-4">
            <Link to={"/sound"} className="Link">
                <i className="fas fa-arrow-left mt-0"></i>
            </Link>
            <div className="mt-4 text-4xl flex my-4  "> Additional settings</div>
           < div className='flex mt-6 items-center justify-between'>              
              <div>
               Dial pad tone
              </div>
              <ToggleButton/>
            </div>
            < div className='flex mt-6 items-center justify-between'>              
              <div>
               Tap sounds
              </div>
              <ToggleButton/>
            </div> 
            < div className='flex mt-5 items-center justify-between'>              
              <div>
               Play sound when locking device
              </div>
              <ToggleButton/>
            </div> 
            < div className='flex mt-5 items-center justify-between'>              
              <div>
              Play sound when taking screenshots
              </div>
              <ToggleButton/>
            </div> 
            < div className='flex mt-5 items-center justify-between'>              
              <div>
              Play sound when unistalling apps 
              </div>
              <ToggleButton/>
            </div> 
            < div className='flex mt-5 items-center justify-between'>              
              <div>
              Play sound when deleting items
              </div>
              <ToggleButton/>
            </div> 
            < div className='flex mt-5 items-center justify-between'>              
              <div>
              Play sound when  charger is connected
              </div>
              <ToggleButton/>
            </div> 
            < div className='flex mt-5 items-center justify-between'>              
              <div>
               Play audio at startup
              </div>
              <ToggleButton/>
            </div>     
            
            
            </div>
    );
}
