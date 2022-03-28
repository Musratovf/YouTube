import React from 'react';
import './_header.scss'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications } from 'react-icons/md'
import { MdApps } from 'react-icons/md'

const Header = () => {
    return (
        <>
        <div className='border border-dark header'>
            <FaBars className='header__menu' size={26}/>
            <img className='header__logo' src="https://pngimg.com/uploads/youtube/youtube_PNG5.png" alt="youtube logo"/>
        </div>
        <form>
            <input type="text" placeholder='Search' />
            <button type='submit'>
                <AiOutlineSearch size={22}/>
            </button>
        </form>
        <div className='header__icons'>
            <MdNotifications size={28} />
            <MdApps size={28}/>
            <img src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face.png" alt="avatar" />
        </div>
        </>
    );
}

export default Header;
