import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const vimeoPlayer = new Vimeo.Player(iframe);
const KEY_STORAGE = 'videoplayer-current-time';

vimeoPlayer.on('timeupdate',
throttle())