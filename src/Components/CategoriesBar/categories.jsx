import React from 'react';
import { useState } from 'react';
import './_categories.scss';

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
    const handleClick =(value)=>{
        setActiveElement(value)
    }

	return (
		<div className='CategoriesBar'>
			{keywords.map((value, i) => (
				<span 
                onClick={()=>handleClick(value)}
                key={i}
                className={activeElement === value ? ' active' : ''} >
                {value}
                </span>
			))}
		</div>
	);
};

export default Categories;
