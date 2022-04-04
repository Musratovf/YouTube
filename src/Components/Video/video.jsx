import React from 'react';
import './_video.scss';
import { AiFillEye } from 'react-icons/ai';
import { NavLink } from "react-router-dom"
import Food from "../../Assets/Img/FoodOrange.svg"

function Video() {
	const [users, setUsers] = React.useState([]);
	const [remod, setRemod] = React.useState([]);

	React.useEffect(() => {
		(async () => {
			const res = await fetch(
				'https://jsonplaceholder.typicode.com/photos'
			);
			const data = await res.json();
			if (data) {
				setUsers(data.slice(1, 10));
				setRemod(data.slice(1, 10));
			}
		})();
	}, []);

	return (
		<>
			<div className='video'>
				<div>
					<ul className='video__list'>
						{users.length > 0 &&
							remod.map((user) => (
								<NavLink className={'video__navlink'} to={'/video'}>
									<li className='video__item' key={user.id}>
									<img
										className='video__img'
										src={user.thumbnailUrl}
										alt=''
									/>
									<span className='video__text'>05:45</span>
									<strong>{user.title}</strong>
									<p className='video__bnnma'>
										{' '}
										<AiFillEye /> 80k views · 3 days ago
									</p>
								</li>
								</NavLink>
							))}
					</ul>
					<h2 className='dark'>Recommended</h2>
					{/* second list */}
					<div className='video__list'>
						{remod.length > 0 &&
							remod.map((users) => (
							<NavLink className={'video__navlink'} to={'/video'}>
									<div className='video__item' key={users.id}>
									<img
										className='video__secondimg'
										src={users.thumbnailUrl}
										alt=''
									/>
									<span className='video__secondtext'>
										2:12
									</span>
									<strong>{users.title}</strong>
									<p className='video__bnnma'>
										{' '}
										<AiFillEye /> 80k views · 3 days ago
									</p>
								</div>
							</NavLink>
							))}
					</div>
					{/* theerd list */}

								<div className='iner d-flex align-items-center'>
								<img src={Food} alt="fod" />
								<h2 className='dark'>Food & Drink</h2>
								</div>
								<span>Recommended channel for you</span>
					
					<ul className='video__list'>
						{remod.length > 0 &&
							remod.map((remods) => (
								<li className='video__item' key={remods.id}>
									<NavLink className={'video__navlink'} to={'/video'}>
									<img
										className='video__img'
										src={remods.thumbnailUrl}
										alt=''
									/>
									<span className='video__text'>05:45</span>
									<strong>{remods.title}</strong>
									<p className='video__bnnma'>
										{' '}
										<AiFillEye /> 80k views · 3 days ago
									</p>
							</NavLink>

								</li>
							))}
					</ul>
					
				</div>
			</div>
		</>
	);
}

export default Video;
