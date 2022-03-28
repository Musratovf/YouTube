import React from 'react';
import './_header.scss'

import Uzim from '../../Assets/Img/uzim.jpg'
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications } from 'react-icons/md'
import { MdApps } from 'react-icons/md'

const Header = ({handleToogleSidebar}) => {
    return (
        <>
        <div className='border border-dark header'>
            <FaBars
             className='header__menu'
             size={26}
             onClick={()=>handleToogleSidebar()}/>
            <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png.png" alt="youtube logo" />
        <form>
            <input type="text" placeholder='Search' />
            <button type='submit'>
                <AiOutlineSearch size={22}/>
            </button>
        </form>
        <div className='header__icons'>
            <MdNotifications size={28} />
            <MdApps size={28}/>
            <img src={Uzim} alt="avatar" />
        </div>
        </div>
        </>
    );
}

export default Header;
