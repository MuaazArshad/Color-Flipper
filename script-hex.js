'use strict';

const btn = document.querySelector('.btn');
const colorSpan = document.querySelector('.color');
const container = document.querySelector('.container');
colorSpan.innerHTML = '#f1f5f8';
const bg = () => {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	container.style.backgroundColor = '#' + randomColor;
	colorSpan.innerHTML = '#' + randomColor;
};

btn.addEventListener('click', () => {
	bg();
});
