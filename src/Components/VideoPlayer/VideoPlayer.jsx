import React from 'react';
import { NavLink } from 'react-bootstrap';
import './VideoPlayer.scss';
import Like from "../../Assets/Img/like.png";
import Dizlike from "../../Assets/Img/dizlike.png";
import Share from "../../Assets/Img/share.png";
import More from "../../Assets/Img/More.png";
import Food from "../../Assets/Img/FoodOrange.svg";

const Videoplayer = () => {
	const [videoPlayer, setVideoPlayer] = React.useState([]);
	const [videoPlayer2, setVideoPlayer2] = React.useState([]);

	React.useEffect(() => {
		(async () => {
			const res = await fetch(
				'https://jsonplaceholder.typicode.com/photos'
			);
			const data = await res.json();
			if (data) {
				setVideoPlayer(data.slice(1, 2));
				setVideoPlayer2(data.slice(1, 15));
			}
		})();
	}, []);
	return (
		<div className='d-flex inner-map'>
			<ul className='player__list'>
				{videoPlayer.length > 0 &&
					videoPlayer.map((player) => (
						<li className='player__item' key={player.id}>
							<NavLink className={'player__link'} to={'/video'}>
								<img
									className='videoplayer__img'
									src={player.thumbnailUrl}
									alt='chanelimg'
								/>
								<h3 className='player-heading'>
									{player.title}
								</h3>
							</NavLink>
							<div className='wiews d-flex justify-content-between align-items-center'>
							<span className='player-text'>
							123k views
							</span>
							<div className='d-flex align-items-center'>
								<div className='wrap'>
								<img className='play-img' src={Like} alt="like" />
								<span className='play-span'>123k</span>
								</div>
								<div className='wrap'>
								<img className='play-img' src={Dizlike} alt="like" />
								<span className='play-span'>435k</span>
								</div>
								<div className='wrap'>
								<img className='play-img' src={Share} alt="like" />
								<span className='play-span'>Share</span>
								</div>
								<div className='wraps'>
								<img className='play-img' src={More} alt="like" />
								</div>
							</div>
							</div>
							<div className='d-flex end-file'>
								<img className='fod-img' src={Food} alt="fod" />
								<div className='left'>
									<NavLink to={'/chanel'}>
									<h2 className=' dark'>Food & Drink</h2>	
									<p className=' publish'>Published on 14 Jun 2019</p>
									<p className='bnnma'>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
									</NavLink>
								</div>
							</div>
							<button className='btn'>Show More</button>
						</li>
					))}
			</ul>
			<ul className='player__list2'>
				{videoPlayer2.length > 0 &&
					videoPlayer2.map((videoPlayer2) => (
						<li className='player__item2' key={videoPlayer2.id}>
							<NavLink className={'player__link2'} to={'/video'}>
								<img
									className='videoplayer__img2'
									src={videoPlayer2.thumbnailUrl}
									alt='chanelimg'
								/>
								<h3 className='player-heading2'>
									{videoPlayer2.title}
								</h3>
							</NavLink>
							<div className='d-flex justify-content-between'>
							<span className='player-text'>
							123k views
							</span>
							<span className='player-text'>
							Dollie Blair
							</span>
							</div>
						</li>
					))}
			</ul>
		</div>
	);
};

export default Videoplayer;
