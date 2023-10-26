import React from 'react'
import {GoBellFill} from "react-icons/go"
import {FaPhoneSquareAlt} from "react-icons/fa"
import {BiSolidAlarm} from "react-icons/bi"
import {RiMusic2Fill} from "react-icons/ri"
import { Link } from 'react-router-dom'
import ToggleButton from '../Components/Toggle'
import SetVolume from '../Components/Slider'
import styled from 'styled-components';

export default function Sound() {
  return (
    <Container className=' m-4'>
    <Link to={'/'} className='Link'>
    <i className='fas fa-arrow-left'></i>
    </Link>
    <div>
      <div className=' mt-5 text-4xl'>
        Sound & vibration
      </div>
      <div className='grid grid-cols-2 my-6 gap-5'>
        <div className='rounded-xl p-4 bg-gray-100 cursor-pointer'>
          <div className='text-6xl my-4 '>
            <GoBellFill className='fill-violet-800'/>
          </div>
          <div>
            Notifications
          </div>
          <div className='text-sm text-zinc-400 italic'>
            Droplets
          </div>
        </div>
        <div className=''>
          <div className='rounded-xl mb-4 p-5 flex items-center cursor-pointer bg-gray-100'>
            <div className='text-3xl mr-3'>
              <FaPhoneSquareAlt className='fill-green-500 rounded-full'/>
            </div>
              <div>
              <div className='text-base'>
                Ringtone
              </div>
              <div className='text-xs text-zinc-400 italic'>
                None
              </div>
              </div>
          </div>
          <div className='rounded-xl flex items-center cursor-pointer p-5 bg-gray-100'>
          <div className='text-4xl mr-2'>
              <BiSolidAlarm className='fill-red-400'/>
            </div>
              <div>
              <div className='text-base'>
                Alarm
              </div>
              <div className='text-xs text-zinc-400'>
               Morning dew
              </div>
              </div>
          </div>
        </div>
      </div>
      <div>
        <div className='text-sm text-gray-400 mb-6 '>
          ADJUST VOLUME
        </div>
        <ul>
          <li >
            <div className='flex items-center '>
              <div className='mr-4 text-gray-400'>
                <RiMusic2Fill/>
              </div>
              Media
            </div>
            <div>
            <SetVolume/>
            </div>
          </li>
          <li>
            <div className='flex items-center'>
              <div className='mr-4 text-gray-400'>
                <GoBellFill/>
              </div>
              Ringtone
            </div>
            <div >
            <SetVolume/>
            </div>
          </li>
          <li >
            <div className='flex items-center'>
              <div className='mr-4 text-gray-400'>
                <BiSolidAlarm/>
              </div>
              Alarm
            </div>
            <div >
            <SetVolume/>
            </div>
          </li>
          <li className='pb-8 border-b-2 '>
            <Link to={"/sound/sound_assistant"} className='flex items-center justify-between'>
            <div>
              <div className='mt-6'>
                Sound assistant
              </div>
              <div className='text-base text-neutral-400'>
                Customise your Sound settings
              </div>
            </div>
            <div className='text-gray-400'>
            <i className="fa-solid fa-angle-right"></i>
            </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className='mt-8'>
        <div className='text-sm text-gray-400 mb-6'>
          SILENT MODE
        </div>
        <ul>
          <li className='mb-7'>
            <div className='flex justify-between items-center'>
              
              <div>
                <div>
                  Silent mode
                </div>
                <div className='text-base text-gray-400'>
                  Silence incoming calls and Notifications
                </div>
              </div>
              <ToggleButton/>
            </div>
          </li>
          <li className='mb-7'>
            <div className='flex justify-between items-center'>
              <div>
                <div>
                  Silent media in Silent mode 
                </div>
                <div className='text-base text-gray-400'>
                  Games,music,videos,and other apps
                </div>
              </div>
              <ToggleButton/>
            </div>
          </li>
         
          <li className=' pb-8 border-b-2'>
            < div className='flex items-center justify-between'>
            <div>
              <div className=''>
                Do not disturb
              </div>
              <div className='text-base text-gray-400 '>
                There'll be no reminders for incoming calls and Notifications
              </div>
            </div>
            <div className='text-gray-400 flex'>
            <ToggleButton/>
            </div>
            </div>
           
          </li>
          
        </ul>
      </div>
      <div className='mt-8'>
        <div className='text-sm text-gray-400 mb-4'>
          VIBRATE
        </div>
        <ul>
          <li className='mb-6'>
            <div className='flex items-center justify-between'>              
              <div>
               Vibrate while ringing
              </div>
              <ToggleButton/>
            </div>
          </li>   
          <li className='pb-8 border-b-2 '>
            <div className='flex items-center justify-between'>              
              <div>
               Vibrate in Silent mode
              </div>
              <ToggleButton/>
            </div>
          </li>               
        </ul>
      </div>
      <Link to={"/sound/additional_settings"} className='flex items-center justify-between mt-8'>
            <div>
              Additional settings
            </div>
            <div className='text-gray-400'>
             
            <i className="fa-solid fa-angle-right"></i>
            </div>
            </Link>
      
      <Link to={"/sound/sound_effects"} className='flex items-center justify-between mt-5'>
            <div>
              Sound effects
            </div>
            <div className='text-gray-400'>
             
            <i className="fa-solid fa-angle-right"></i>
            </div>
            </Link>

    </div>
    </Container>
  )
}
const Container = styled.div`

`;