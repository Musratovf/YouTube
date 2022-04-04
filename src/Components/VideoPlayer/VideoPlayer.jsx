import React from 'react';
import { NavLink } from 'react-bootstrap';

const Videoplayer = () => {
    const [videoPlayer, setVideoPlayer] = React.useState([]);

	React.useEffect(() => {
		(async () => {
			const res = await fetch(
				'https://jsonplaceholder.typicode.com/photos'
			);
			const data = await res.json();
			if (data) {
				setVideoPlayer(data.slice(0, 1));
			}
		})();
	}, []);
    return (
        <div>
            <ul className='chanel__list3'>
				{videoPlayer.length > 0 &&
					videoPlayer.map((player) => (
						<li className='chanel__item3' key={player.id}>
							<NavLink className={'chanel__navlink3'} to={'/video'}>
								<img
									className='chanel__img3 '
									src={player.thumbnailUrl}
									alt='chanelimg'
									/>
								<h3 className='chanel__heading3'>{player.title}</h3>
									</NavLink>
									<span className='heading-text'>240k views  ·  4 months ago
										Food & Drink</span>
							</li>
					))}
			</ul>
        </div>
    );
}

export default Videoplayer;
