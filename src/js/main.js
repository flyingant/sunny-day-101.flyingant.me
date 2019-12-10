const playBtn = document.getElementsByClassName('play');
const box = document.getElementsByClassName('box');
playBtn[0].onclick = () => {
  box[0].innerHTML = `<audio autoplay><source src="../assets/hammerhammerhammer.mp3" type="audio/mpeg"></source></audio>`;
};
