import React from 'react';
import { useState } from 'react';
import './_categories.scss';
import dollie from '../../Assets/Img/DollieBlair.svg';
import left from '../../Assets/Img/Left.svg';
import right from '../../Assets/Img/Right.svg';
import Video from '../Video/video';
import Food from "../../Assets/Img/FoodOrange.svg"
import { NavLink } from 'react-router-dom';

const keywords = [
	'All',
	'React js',
	'Angular js',
	'React Native',
	'use of API',
	'Redux',
	'Music',
	'Algoritm Art',
	'Guitar',
	'Bengali Songs',
	'Coding',
	'Cricket',
	'Football',
	'Barselona',
	'Gatsby',
	'Poor Coder',
	'Shwetabh',
];

const Categories = () => {
	const [activeElement, setActiveElement] = useState('All');
	const handleClick = (value) => {
		setActiveElement(value);
	};

	return (
		<>
			<div className='CategoriesBar'>
				{keywords.map((value, i) => (
					<span
						onClick={() => handleClick(value)}
						key={i}
						className={activeElement === value ? ' active' : ''}>
						{value}
					</span>
				))}
			</div>
			<div className='CategoriesBar__wrap'>
				<div className='CategoriesBar__hero'>
				<NavLink className={'video__navlink d-flex align-items-center'} to='/chanel'>
					<img src={dollie} alt='dollie' />
					<h2 className='dark'>Dollie Blair</h2>
					</NavLink>
				</div>
				<div className='CategoriesBar__bottom'>
					<img src={left} alt='left' />
					<span> </span>
					<img src={right} alt='right' />
				</div>
			</div>
			<Video />
		</>
	);
};

export default Categories;
