import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_STORAGE = 'videoplayer-current-time';

player.on('timeupdate', throttle(onplay, 1000));

function onplay({seconds}) {
localStorage.setItem(KEY_STORAGE, seconds);
}

player.setCurrentTime(localStorage.getItem(KEY_STORAGE) || "");
