import React from 'react';
import './chanel.scss';
import Nora from '../../Assets/Img/Nora.svg';
import { NavLink } from 'react-bootstrap';
import fabel from '../../Assets/Img/fabel.png';
const Home = () => {
	const [chanel, setChanel] = React.useState([]);

	React.useEffect(() => {
		(async () => {
			const res = await fetch(
				'https://jsonplaceholder.typicode.com/photos'
			);
			const data = await res.json();
			if (data) {
				setChanel(data.slice(0, 1));
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
					<NavLink>
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
					</NavLink>
				</li>
			</ul>
            <ul>
                <li>
                    <NavLink>
                        Home
                    </NavLink>
                </li>
            </ul>
		</div>
	);
};

export default Home;
