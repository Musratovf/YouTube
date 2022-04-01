import React from 'react';
import { useState } from 'react';
import './_categories.scss';
import dollie from "../../Assets/Img/DollieBlair.svg"
import left from "../../Assets/Img/Left.svg"
import right from "../../Assets/Img/Right.svg"

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
		<>
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
		<div className="CategoriesBar__wrap">
		<div className="CategoriesBar__hero">
			<img src={dollie} alt="dollie" />
			<h2>Dollie Blair</h2>
		</div>
		<div className="CategoriesBar__bottom">
			<img src={left} alt="left" />
			<span> </span>
			<img src={right} alt="right" />
		</div>
		</div>
		</>
	);
};

export default Categories;
