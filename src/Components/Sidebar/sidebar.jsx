import React from 'react';
import './_sidebar.scss'

import Subscriptions from "../../Assets/Img/Subscriptions.svg"
import Trending from "../../Assets/Img/Trending.svg"
import ShowMore from "../../Assets/Img/ShowMore.svg"
import Music from "../../Assets/Img/Music.svg"
import Liked from "../../Assets/Img/Liked.svg"
import Library from "../../Assets/Img/Library.svg"
import Home from "../../Assets/Img/Home.svg"
import History from "../../Assets/Img/History.svg"
import Games from "../../Assets/Img/Games.svg"
import Favourites from "../../Assets/Img/Favourites.svg"
import WatchLater from "../../Assets/Img/WatchLater.svg"
import kolokolnik from "../../Assets/Img/kolokolnik.svg"
import FoodOrange from "../../Assets/Img/FoodOrange.svg"
import Setting from "../../Assets/Img/Setting.svg"
import Nora from "../../Assets/Img/Nora.svg"
import Gussie from "../../Assets/Img/Gussie.svg"
import Emma from "../../Assets/Img/Emma.svg"
import Eunice from "../../Assets/Img/Eunice.svg"
import Belle from "../../Assets/Img/Belle.svg"
import Leah from "../../Assets/Img/Leah.svg"

const Sidebar = ({ sidebar, handleToogleSidebar }) => {
    return (
        <nav 
            className={sidebar?"sidebar open":"sidebar"}
            onClick={ () => handleToogleSidebar ( false ) }>
           <ul className='sidebar__list'>
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
            <hr className='hr-line' />
            <h2 className='text-black'>Subscriptions   </h2>
            <li>
                <img src={Gussie} alt="Gussie" />
                <span>Gussie Singleton</span>
            </li>
            <li>
                <img src={Nora} alt="Nora" />
                <span>Nora Francis</span>
            </li>
            <li>
                <img src={Belle} alt="Belle" />
                <span>Belle Briggs</span>
            </li>
            <li>
                <img src={Eunice} alt="Eunice" />
                <span>Eunice Cortez</span>
            </li>
            <li>
                <img src={Emma} alt="Emma" />
                <span>Emma Hanson</span>
            </li>
            <li>
                <img src={Leah} alt="Leah" />
                <span>Leah Berry</span>
            </li>
            <li>
                <img src={Setting} alt="Setting" />
                <span>Setting</span>
            </li>
           </ul>
        </nav>
    );
}

export default Sidebar;
