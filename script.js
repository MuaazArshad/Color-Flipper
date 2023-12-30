'use strict';

const btn = document.querySelector('.btn');
const colorSpan = document.querySelector('.color');
const container = document.querySelector('.container');

const arr = ['red', 'green', 'rgba(133,122,200)', '#f15025'];
colorSpan.innerHTML = '#f1f5f8';
const bg = () => {
	const randomColor = Math.floor(Math.random() * 4).toString(16);
	container.style.backgroundColor = arr[randomColor];
	colorSpan.innerHTML = arr[randomColor];
};

btn.addEventListener('click', () => {
	bg();
});
