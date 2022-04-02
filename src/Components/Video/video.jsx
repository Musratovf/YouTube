import './_video.scss';
import React from 'react';

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
							<img className='video__img' src={user.url} alt="" />
							<strong>{user.title}</strong>
						 </li>
					 ))
				 }
			 </ul>
		</div>
	);
}

export default Video;
