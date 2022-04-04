import React from 'react';
import './chanel.scss';
import Nora from '../../Assets/Img/Nora.svg';
import { NavLink } from 'react-router-dom';
import fabel from '../../Assets/Img/fabel.png';
import SearchIcon from "../../Assets/Img/searchicon.svg"
import Flora from "../../Assets/Img/flora.png";
import Philip from "../../Assets/Img/philip.png";
import Violet from "../../Assets/Img/violet.png";

const Home = () => {
	const [chanel, setChanel] = React.useState([]);
	const [chanel2, setChanel2] = React.useState([]);
	const [chanel3, setChanel3] = React.useState([]);

	React.useEffect(() => {
		(async () => {
			const res = await fetch(
				'https://jsonplaceholder.typicode.com/photos'
			);
			const data = await res.json();
			if (data) {
				setChanel(data.slice(0, 1));
				setChanel2(data.slice(0, 1));
				setChanel3(data.slice(36, 42));
			}
		})();
	}, []);

	return (
		<div className='container'>
			<ul className='chanel__list'>
				{chanel.length > 0 &&
					chanel.map((channel) => (
						<NavLink className={'chanel__navlink'} to={'/home'}>
							<li className='chanel__item' key={channel.id}>
								<img
									className='chanel__img '
									src={channel.thumbnailUrl}
									alt='chanelimg'
								/>
							</li>
						</NavLink>
					))}
			</ul>
			<ul className='fabel__list'>
				<li>
						<div className='bnma col-5'>
							<img className='chanel__image' src={Nora} alt='' />
							<div className='chanel-wrap'>
								<h2 className='dark'>Margaret Phelps</h2>
								<span className='wiew'>245K subscribed</span>
							</div>
							<div className=' fabel'>
								<img src={fabel} alt='fabel' />
								<span className='subscript'>
									Subscribe 2.3m
								</span>
							</div>
						</div>
				</li>
			</ul>
            <div className='d-flex justify-content-between '>
			<ul className='chanel__list d-flex'>
                <li className='chanel__item'>
                    <NavLink to={'/'} className='chanel__navlinks navlinks2'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/'} className='chanel__navlinks'>
					Videos
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/'} className='chanel__navlinks'>
					Playlists
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/'} className='chanel__navlinks'>
					Channels
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/'} className='chanel__navlinks'>
					Discussion
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/'} className='chanel__navlinks '>
					About
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/'} className='chanel__navlinks '>
					<img src={SearchIcon} alt="" />
                    </NavLink>
                </li>
            </ul>
			<span className='chanel__span'>
			Recommended channel
			</span>
			</div>
		<div className='d-flex justify-content-between'>
		<ul className='chanel__list'>
				{chanel2.length > 0 &&
					chanel2.map((channel2) => (
						<li className='chanel__items' key={channel2.id}>
								<NavLink className={'chanel__linked'} to={'/video'}>
								<img
									className='chanel__imeg'
									src={channel2.thumbnailUrl}
									alt='chanelimg'
								/>
								<span className='chanel__absolute'>
								7:36
								</span>
						</NavLink>
							</li>
					))}
			</ul>
			<div className='chanel__inner d-flex '>
			<div  className='chanel__titels'>
			<h2 className='chanel__title'>
			Choosing The Best Audio Player Software For Your Computer
			</h2>
			<span className='chanel-span'>
			Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. 
			</span>
			<p className='chanel-text'>
			11k views  ·  6 months ago
			</p>
			</div>
			</div>
			<ul className='chanel__avatar '>
				<li	>
					<img src={Flora} alt="Flora" />
					<span>
					Flora Benson
					</span>
				</li>
				<li>
					<img src={Violet} alt="Violet" />
					<span>
					Violet Cobb
					</span>
				</li>
				<li>
					<img src={Philip} alt="Philip" />
					<span>
					Phillip Mullins
					</span>
				</li>
			</ul>
			</div>
		<h2 className='text'>
			Margaret Phelps videos
			</h2>
			<ul className='chanel__list3'>
				{chanel3.length > 0 &&
					chanel3.map((channel3) => (
							<NavLink className={'chanel__navlink3'} to={'/video'}>
						<li className='chanel__item3' key={channel3.id}>
								<img
									className='chanel__img3 '
									src={channel3.thumbnailUrl}
									alt='chanelimg'
									/>
								<h3 className='chanel__heading3'>{channel3.title}</h3>
									<span className='heading-text'>240k views  ·  4 months ago
										Food & Drink</span>
							</li>
									</NavLink>
					))}
			</ul>
		</div>
	);
};

export default Home;
