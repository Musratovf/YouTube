import React from 'react';
import './_video.scss';
import { AiFillEye } from 'react-icons/ai';

function Video({ VideoPage }) {
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
					{/* second list */}
					<ul className='video__list'>
						{remod.length > 0 &&
							remod.map((remods) => (
								<li className='video__item' key={remods.id}>
									<img
										className='video__secondimg'
										src={remods.thumbnailUrl}
										alt=''
									/>
									<span className='video__secondtext'>2:12</span>
									<strong>{remods.title}</strong>
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
