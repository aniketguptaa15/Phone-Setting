import React from 'react';
import { Link } from 'react-router-dom';
import lightImage from '../images/light.jpg';
import darkImage from '../images/dark.jpg';
import styled from 'styled-components';
import Dark_Mode from '../Components/Content'; 
import ToggleButton from '../Components/Toggle'; 


export default function Display({ isDarkMode, setIsDarkMode }) {
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const pageClass = isDarkMode ? 'dark-mode' : '';

  return (
    <Container className={`display-page ${pageClass}`}>
      <Link to={'/'} className="Link">
        <i className="fas fa-arrow-left ml-4"></i>
      </Link>
      <div className="mt-5 text-4xl ml-4">Display</div>
      <div className="mt-5 ml-4 text-gray-500 text-sm italic">COLOR SCHEME</div>
      <div className="flex mt-3">
        <div className="flex rounded-xl ml-4 m-2 flex-col items-center">
          <img
            src={lightImage}
            alt="Phone"
            className="flex mt-1.5 p-1.5 rounded-2xl border-blue-700 border-4"
          />
          <span className="m-1.5 text-blue-600">Light Mode</span>
        </div>
        <div className="rounded-full m-3 flex-col flex items-center">
          <img src={darkImage} alt="Phone" className="flex p-2" />
          <span>Dark Mode</span>
        </div>
      </div>
      <div className="flex justify-between border-b-2 border-gray-300 pb-8 mx-4">
        <div>Schedule Dark Mode</div>
        <div className="flex items-center">
          <Dark_Mode isChecked={isDarkMode} onChange={toggleDarkMode} />
        </div>
      </div>
      <div>
        <div className="text-gray-500 text-lg pt-7 ml-4 italic">SCREEN</div>
        <Link to={'/brightness'} className="Link flex justify-between items-center">
          <div className="m-4 mr-4 flex rounded">Brightness level</div>
          <i className="fa-solid fa-angle-right m-4"></i>
        </Link>
      </div>
      <Link to={'/read_mode'} className="Link">
        <div className="flex">
          <div className="justify-between pd-4 mx-4">
            <div>Reading Mode</div>
            <div className="justify-between text-sm text-gray-500">
              Reading mode makes the color of your display warmer, allowing your eyes to relax
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-gray-600 italic text-lg mr-4">off</div>
            <i className="fa-solid fa-angle-right ml-0 mr-4"></i>
          </div>
        </div>
      </Link>
      <div className="border-b-2 border-gray-300 pb-8 m-4 my-6">
        <Link to={'/colour'} className="Link flex justify-between items-center pt-0">
          <div className="flex rounded">Color scheme</div>
          <i className="fa-solid fa-angle-right"></i>
        </Link>
      </div>
      <div>
        <div className="text-gray-500 text-lg pt-3 ml-4 italic">FONT</div>
        <Link to={'/Font'} className="Link flex justify-between items-center">
          <div className="mx-4 mb-3 flex rounded">Font</div>
          <i className="fa-solid fa-angle-right m-4"></i>
        </Link>
      </div>
      <div className="border-b-2 border-gray-300 mx-4 my-3 pb-7">
        <Link to={'/text_size'} className="Link flex justify-between items-center">
          <div className="flex rounded">Text size</div>
          <i className="fa-solid fa-angle-right"></i>
        </Link>
      </div>
      <div>
        <div className="text-gray-500 text-lg pt-4 ml-4 italic">System</div>
        <Link to={'/VR'} className="Link flex justify-between items-center">
          <div className="m-4 flex rounded">When the device is in VR</div>
          <i className="fa-solid fa-angle-right m-4"></i>
        </Link>
      </div>
      <Link to={'/Fullscreen'} className="Link">
        <div className="flex justify-between mx-4 pt-2">
          <div>
            <div className="justify-between">Fullscreen mode</div>
            <div className="text-sm text-gray-500">
              Allow selected apps to work in fullscreen mode
            </div>
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </Link>
      <div className='flex m-4 justify-between pt-2'>
        <div>
          Auto-rotate screen
        </div>
        <div className='mt-2'>
          <ToggleButton isChecked={isDarkMode} onChange={toggleDarkMode} />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .Link {
    justify-content: space-between;
    align-items: center;
  }
`;
