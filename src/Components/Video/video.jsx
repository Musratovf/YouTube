import React from 'react';
import './_video.scss';
import Categories from '../CategoriesBar/categories';
import { AiFillEye } from "react-icons/ai"


function Video () {
	const [users, setUsers] = React.useState([])

	React.useEffect(() => {
		(async () => {
			const res = await fetch('https://jsonplaceholder.typicode.com/photos')
			const data = await res.json()
			if(data) {
				setUsers(data.slice(1, 10))
			}
		})();
	}, [])

	return (
		<div className='video'>
		 	<ul className='video__list'>
				 {users.length > 0 &&
				 	users.map((user) => (
						 <li className='video__item' key={user.id}>
							<img className='video__img' src={user.thumbnailUrl} alt="" />
							<span className='video__text'>05:45</span>
							<strong>{user.title}</strong>
							<p className='video__bnnma'> <AiFillEye/> 80k views  ·  3 days ago</p>
						 </li>
					 ))
				 }
			 </ul>
		</div>
	);
}

export default Video;
