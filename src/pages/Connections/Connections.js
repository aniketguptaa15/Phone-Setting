
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ToggleButton from '../Components/Toggle'


export default function Connections() {
  return (
    <Container className='min-h-screen '>
      <Link to={'/'} className='Link'>
        <i className='fas fa-arrow-left'></i>
      </Link>
      <div className='text-5xl   mx-2  my-4'>Connection & sharing</div>
      <div className=' border-b-2 justify-between mx-4 border-gray-300'>
        <Link to={"/Cast"} className='Link pt-5 flex'>
          <div className=' mt-1 flex rounded '>
            Cast
          </div>
          <i className="fa-solid fa-angle-right "></i>
        </Link>
        <Link to={"/Printing"} className='Link flex  '>
          <div className=' mt-1 flex rounded '>
            Printing
          </div>
          <i className="fa-solid fa-angle-right my-6"></i>
        </Link>
      </div>
      <div className='pt-3 items-center'>
        <Link to={"/VPN"} className='Link  flex'>
          <div className='mx-4  flex rounded '>
            VPN
          </div>
          <i className="fa-solid fa-angle-right m-4"></i>
        </Link>
      </div>
       <div className='flex justify-between place-content-baseline mx-4 my-3'>
      <div className='mb-2'>
        Aerpolane mode
      </div>

    <div className='mt-2'>
    <ToggleButton/>
        </div>
      </div>
      <Link to={"/Private_DNS"} className="Link items-center ">
        <div className="flex justify-between border-b-2 border-gray-300 pb-8 mx-4 ">
          <div>Private DNS</div>
          <div className="flex items-center">
            <div className="text-gray-600 italic text-lg  mr-4 ">off</div>
            <i className="fa-solid fa-angle-right ml-0"></i>
          </div>
        </div>
        </Link>
        <div className=' border-b-2 justify-between mx-4 border-gray-300'>
        <Link to={"/Data_usage"} className='Link py-5 flex'>
          <div className=' mt-1 flex rounded '>
            Data usage
          </div>
          <i className="fa-solid fa-angle-right "></i>
        </Link>
        </div>
        <Link to={"/Wireless"} className="Link">
        <div className='flex justify-between  border-b-2 border-gray-300 m-4  pt-2 pb-7'>
          <div className=' '>
          <div className=" justify-between  ">
            Wireless Display
            </div>
            <div className=" text-sm text-gray-500  ">
              Connect to a display wirelessly
            </div>
            </div>
          
          <div className="flex items-center ">
            <i className="fa-solid fa-angle-right  "></i>
          </div>
        </div>
      </Link>
      <div className='justify-between mx-4'>
        <Link to={"/Reset"} className='Link pt-5 flex'>
          <div className=' mt-1 flex rounded '>
            Reset Wi-Fi, mobile networks, and Bluetooth
          </div>
          <i className="fa-solid fa-angle-right "></i>
        </Link>
        </div>
        <Link to={"/Chromebook"} className="Link">
        <div className='flex justify-between   m-4  pt-2 '>
          <div className=' '>
          <div className=" justify-between  ">
           Chromebook
            </div>
            <div className=" text-sm text-gray-500  ">
              Your phone is not linked with a Chromebook
            </div>
            </div>
          
          <div className="flex items-center ">
            <i className="fa-solid fa-angle-right  "></i>
          </div>
        </div>
      </Link>
      <Link to={"/Nearby_Share"} className="Link">
        <div className='flex justify-between m-4  pt-2 '>
          <div className=' '>
          <div className=" justify-between  ">
            Nearby Share
            </div>
            <div className=" text-sm text-gray-500  ">
              Share files with nearby devices
            </div>
            </div>
          
          <div className="flex items-center ">
            <i className="fa-solid fa-angle-right  "></i>
          </div>
        </div>
      </Link>
      <Link to={"/Android_Auto"} className="Link">
        <div className='flex justify-between mx-4  pt-2'>
          <div className=' '>
          <div className=" justify-between  ">
           Android Auto
            </div>
            <div className=" text-sm text-gray-500  ">
              Use apps on your car screen
            </div>
            </div>
          
          <div className="flex items-center ">
            <i className="fa-solid fa-angle-right  "></i>
          </div>
        </div>
      </Link>
    </Container>
  )
}

const Container = styled.div`
  .Link {
   
   
    justify-content: space-between;
    align-items: center;
  }
 
  
`;