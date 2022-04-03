import React from 'react';
import './_sidebar.scss';
import { NavLink } from 'react-router-dom';

import Subscriptions from '../../Assets/Img/Subscriptions.svg';
import Trending from '../../Assets/Img/Trending.svg';
import ShowMore from '../../Assets/Img/ShowMore.svg';
import Music from '../../Assets/Img/Music.svg';
import Liked from '../../Assets/Img/Liked.svg';
import Library from '../../Assets/Img/Library.svg';
import Home from '../../Assets/Img/Home.svg';
import History from '../../Assets/Img/History.svg';
import Games from '../../Assets/Img/Games.svg';
import Favourites from '../../Assets/Img/Favourites.svg';
import WatchLater from '../../Assets/Img/WatchLater.svg';
import Setting from '../../Assets/Img/Setting.svg';
import Nora from '../../Assets/Img/Nora.svg';
import Gussie from '../../Assets/Img/Gussie.svg';
import Emma from '../../Assets/Img/Emma.svg';
import Eunice from '../../Assets/Img/Eunice.svg';
import Belle from '../../Assets/Img/Belle.svg';
import Leah from '../../Assets/Img/Leah.svg';

const Sidebar = () => {
	return (
		<div>
			<NavLink to={"/home"} className='navlink' >
				<img src={Home} alt='Home' />
				<span>Home</span>
			</NavLink>

			<NavLink to={"/home"} className='sidebar__link'>
				<img src={Trending} alt='Subscriptions' />
				<span>Trending</span>
			</NavLink>

			<NavLink to={"/"} className='sidebar__link'>
				<img src={Subscriptions} alt='Subscriptions' />
				<span>Subscriptions</span>
			</NavLink>
			<hr className='hr-line' />
			<NavLink to={"/"} className='sidebar__link'>
				<img src={Library} alt='Library' />
				<span>Library</span>
			</NavLink>
			<NavLink to={"/"} className='sidebar__link'>
				<img src={History} alt='History' />
				<span>History</span>
			</NavLink>

			<NavLink to={"/"} className='sidebar__link'>
				<img src={WatchLater} alt='WatchLater' />
				<span>Watch later</span>
			</NavLink>

			<NavLink to={"/"} className='sidebar__link'>
				<img src={Favourites} alt='Favourites' />
				<span>Favourites</span>
			</NavLink>

			<NavLink to={"/"} className='sidebar__link'>
				<img src={Liked} alt='Liked' />
				<span>Liked videos</span>
			</NavLink>

			<NavLink to={"/"} className='sidebar__link'>
				<img src={Music} alt='Music' />
				<span>Music</span>
			</NavLink>

			<NavLink to={"/"} className='sidebar__link'>
				<img src={Games} alt='Games' />
				<span>Games</span>
			</NavLink>

			<NavLink to={"/"} className='sidebar__link'>
				<img src={ShowMore} alt='ShowMore' />
				<span>ShowMore</span>
			</NavLink>
{/* 
			<hr className='hr-line' />
			<h2 className='text-black'>Subscriptions </h2>
			<img src={Gussie} alt='Gussie' />
			<span>Gussie Singleton</span>
			<img src={Nora} alt='Nora' />
			<span>Nora Francis</span>
			<img src={Belle} alt='Belle' />
			<span>Belle Briggs</span>
			<img src={Eunice} alt='Eunice' />
			<span>Eunice Cortez</span>
			<img src={Emma} alt='Emma' />
			<span>Emma Hanson</span>
			<img src={Leah} alt='Leah' />
			<span>Leah Berry</span>
			<img src={Setting} alt='Setting' />
			<span>Setting</span> */}
		</div>
	);
};

export default Sidebar;
