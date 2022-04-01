import React from 'react';
import './_video.scss';

import { AiFillEye } from 'react-icons/ai';

const Video = () => {
	const [users, setUsers] = React.useState([]);

	React.useEffect(() => {
		// (async () => {
		// const res = await fetch('https://jsonplaceholder.typicode.com/photos');
		// const data = await res.json();
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then((response) => response.json())
			.then((data) => {
				setUsers(data.slice(0, 15));
			});
	}, []);

	return (
		<div className='video'>
			<ul className='video__list'>
				{users?.length > 0 &&
					users.map((data) => (
						<li key={data.id}>
							<div className='video__top'>
								<img className='video__img' src={data.url} alt='api-img' />
								<span>05:43</span>
							</div>
							<div className='video__title'>
							<p className='video__heading'>{data.title}</p>
							</div>
							<div className='video__details'>
								<span>
									<AiFillEye /> 5m Views •
								</span>
								<span> 5 days ago</span>
							</div>
							<div className='video__channel'>
								<img
									src='https://yt3.ggpht.com/ytc/AKedOLTpTPlRxrDfszPRShO1Emc4dTiWvBeWf91WZKVe=s88-c-k-c0x00ffffff-no-rj'
									alt=''
								/>
								<p>Rainbow Hat Jr</p>
							</div>
						</li>
					))}
			</ul>
		</div>
	);
};

export default Video;

