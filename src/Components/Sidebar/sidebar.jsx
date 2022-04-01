import React from 'react';
import './_sidebar.scss'

import Subscriptions from "../../Assets/Img/Subscriptions.svg"
import Trending from "../../Assets/Img/Trending.svg"
import ShowMore from "../../Assets/Img/ShowMore.svg"
import Setting from "../../Assets/Img/Setting.svg"
import Nora from "../../Assets/Img/Nora.svg"
import Music from "../../Assets/Img/Music.svg"
import Liked from "../../Assets/Img/Liked.svg"
import Library from "../../Assets/Img/Library.svg"
import kolokolnik from "../../Assets/Img/kolokolnik.svg"
import Home from "../../Assets/Img/Home.svg"
import History from "../../Assets/Img/History.svg"
import Games from "../../Assets/Img/Games.svg"
import FoodOrange from "../../Assets/Img/FoodOrange.svg"
import Favourites from "../../Assets/Img/Favourites.svg"
import WatchLater from "../../Assets/Img/WatchLater.svg"

const Sidebar = ({ sidebar, handleToogleSidebar }) => {
    return (
        <nav 
            className={sidebar?"sidebar open":"sidebar"}
            onClick={ () => handleToogleSidebar ( false ) }>
            <li>
                <img src={Home} alt="Home" />
                <span>Home</span>
            </li>
            <li>
                <img src={Trending} alt="Subscriptions" />
                <span>Trending</span>
            </li>
            <li>
                <img src={Subscriptions} alt="Subscriptions" />
                <span>Subscriptions</span>
            </li>
            <hr className='hr-line' />
            <li>
                <img src={Library} alt="Library" />
                <span>Library</span>
            </li>
            <li>
                <img src={History} alt="History" />
                <span>History</span>
            </li>
            <li>
                <img src={WatchLater} alt="WatchLater" />
                <span>Watch later</span>
            </li>
            <li>
                <img src={Favourites} alt="Favourites" />
                <span>Favourites</span>
            </li>
            <li>
                <img src={Liked} alt="Liked" />
                <span>Liked videos</span>
            </li>
            <li>
                <img src={Music} alt="Music" />
                <span>Music</span>
            </li>
            <li>
                <img src={Games} alt="Games" />
                <span>Games</span>
            </li>
            <li>
                <img src={ShowMore} alt="ShowMore" />
                <span>ShowMore</span>
            </li>
        </nav>
    );
}

export default Sidebar;
