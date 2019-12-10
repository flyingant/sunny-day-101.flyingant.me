const playBtn = document.getElementsByClassName('play');
const box = document.getElementsByClassName('box');
playBtn[0].onclick = () => {
  box[0].innerHTML = `<iframe width="100%" height="240" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/40373559&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`;
};
