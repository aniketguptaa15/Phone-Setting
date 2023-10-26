import React from 'react'
import {Link} from "react-router-dom"
import ToggleButton from '../Components/Toggle'
import styled from 'styled-components';


export default function Settings() {
  return (<Container className='h-screen'>
    <div className='text-5xl mb-5' style={{ marginTop: '80px' }}>Settings</div>
    
    <div className= 'flex rounded-full' style={{ backgroundColor:'lightgray',marginTop: '20px', marginBottom: '70px' }}>
    <i className="fa fa-search px-3"    style={{marginTop:'13px'}}></i>
    <input type="text" className="w-full py-1.5 px-3 text-black rounded-full focus:outline-none " placeholder=" Search Settings" style={{backgroundColor:'lightgray'}}/>
    </div>
   
    <ul className='flex flex-col justify-evenly h-56 mt-6'>
    <li> 
      <Link to={"/About_phone"} className='Link'>
      <div className='flex' >
        <div className='px-1 rounded-md mr-4 '>
        <i class="fas fa-mobile "style={{ color: "lightblue" ,fontSize: "28px" }}></i>
            </div>
      About Phone
      </div> 
      <div className="text-gray-600 italic text-sm mr-0">MIUI Global 12.5.2</div>
      <i className="fa-solid fa-angle-right ml-0"></i>
      </Link>
      </li>

    <li>
      <Link to={"/display"} className='Link'>

      <div className='flex'>
  <div className='w-7 px-1 mr-4 bg-white-500 rounded'>
    <i className="fa-solid fa-sun" style={{ color: "#ecd95f" , fontSize: "28px" }}></i>
      </div>
     Display & Brightness 
     </div>
      <i className="fa-solid fa-angle-right"></i> 
      </Link>
      </li>

    <li > 
    <Link to={"/sound"} className='Link'>
      <div className='flex'>
    <div className='w-7 px-1 mr-4  rounded'>
      <i className="fa-solid fa-volume-low" style={{color: "#37e189",  fontSize: "28px" }} ></i>
      </div>
      Sound & Vibration
      </div>
      <i className="fa-solid fa-angle-right"></i>
      </Link>
      </li>

    <li>
      <Link to={"/connections"} className='Link'> 

    <div className='flex'>
   <div className='w-7 px-1 mr-4 rounded'>
    <i className="fas fa-share" style={{color: "lightcoral",  fontSize: "28px" }} ></i>
   </div>
       Connections & Sharing
    </div>
    <i className="fa-solid fa-angle-right"></i>
    </Link>
    </li>
    <li className='flex justify-between'> 
      <div className='flex'>
    <div className='w-7 px-1 mr-4  rounded'>
      <i className="fas fa-plane-up" style={{color: "teal",  fontSize: "28px" }} ></i>
      </div>
       Aerpolane Mode 
      </div>
      <div className='mt-2'>
      <ToggleButton/>
        </div>
  
      </li>
    </ul>
    </Container>
  )
}
 const Container = styled.div`
 .Link{
  display:flex;
  justify-content:space-between;
  align-items:center;
 }
 ul li{
  padding:0.5rem;
  border-radius:5px;
  margin-top: 10px;
  margin-bottom: 10px;
 }
 ul li:hover{
  background-color:lightgray;
 }

 
 `;