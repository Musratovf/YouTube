import React from 'react';
import './_header.scss'

import Uzim from '../../Assets/Img/uzim.jpg'
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications } from 'react-icons/md'
import { MdApps } from 'react-icons/md'
import logo from '../../Assets/Img/Black.svg'
import { NavLink } from 'react-bootstrap';
import camera from "../../Assets/Img/camera.svg"

const Header = ({handleToogleSidebar}) => {
    return (
        <>
        <div className='border header'>
            <div className="header__left">
            <FaBars
             className='header__menu'
             size={26}
             onClick={()=>handleToogleSidebar()}/>
             <NavLink className='header__navlink'>
                <img className='header__logo' src={logo} alt="youtube logo" />
             </NavLink>
            </div>
        <form>
            <input type="text" placeholder='Search' />
            <button type='submit'>
                <AiOutlineSearch size={22}/>
            </button>
        </form>
        <div className='header__icons'>
            <img className='header__icon' src={camera} alt="" />
            <MdNotifications className='header__icon' size={28} />
            <MdApps className='header__icon' size={28}/>
            <img className='uzim' src={Uzim} alt="avatar" />
        </div>
        </div>
        </>
    );
}

export default Header;
