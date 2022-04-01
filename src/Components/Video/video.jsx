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
				setUsers(data);
			});
	}, []);

	return (
		<div className='video'>
			<ul className='video__list'>
				{users?.length > 0 &&
					users.map((data) => (
						<li key={data.id}>
							<div className='video__top'>
								<img src='https://i.ytimg.com/vi/1K2EbBZ_lxg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYp3Bsv_zv139gdphZ_PQbjdgYKw' alt='' />
								<span>05:43</span>
							</div>
							<p className='video__heading'>{data.title}</p>
							<div className='video__title'>
                                <p>
								Create app in 5 minutes #made by Chintu
                                </p>
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

