import React from 'react';
import './_video.scss';
import { AiFillEye } from 'react-icons/ai';
import {NavLink} from "react-router-dom"

function Video({ VideoPage }) {
	const [users, setUsers] = React.useState([]);
	const [remod, setRemod] = React.useState([]);
	const [chanel, setChanel] = React.useState([]);

	React.useEffect(() => {
		(async () => {
			const res = await fetch(
				'https://jsonplaceholder.typicode.com/photos'
			);
			const data = await res.json();
			if (data) {
				setUsers(data.slice(1, 10));
				setRemod(data.slice(1, 10));
				setChanel(data.slice(0, 1));
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
								<NavLink className={'video__navlink'} to={'/home'}>
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
					{/* second list */}
					<ul className='video__list'>
						{remod.length > 0 &&
							remod.map((users) => (
								<li className='video__item' key={users.id}>
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
								</li>
							))}
					</ul>
					{/* theerd list */}
					<ul className='video__list'>
						{remod.length > 0 &&
							remod.map((remods) => (
								<li className='video__item' key={remods.id}>
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
								</li>
							))}
					</ul>
					
				</div>
			</div>
		</>
	);
}

export default Video;
