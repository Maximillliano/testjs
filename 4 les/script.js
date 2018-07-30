function playSound(e) {
	let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if(!audio) return; //stop
	audio.currentTime = 0; //rewind audio
	audio.play();
	key.classList.add('playing');
}

function removeTransition(e) {
	if(e.propertyName !== 'transform') return; //skip it is not transform
	this.classList.remove('playing'); //reverse transform
}

let keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);