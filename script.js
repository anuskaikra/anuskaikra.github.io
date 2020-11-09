let btn1 = document.querySelection('#btn-1');
let btn2 = document.querySelection('#btn-2');

btn1.addEventListener('click', () =>{
	document.body.style.backgroundImage = "url(https://media.giphy.com/media/JA8X1yjBnTaZW/giphy.gif)"
});

btn2.addEventListener('click', () =>{
	document.body.style.backgroundImage = "url(https://media.giphy.com/media/dP8DxhD9ekk1i/giphy.gif)"
});