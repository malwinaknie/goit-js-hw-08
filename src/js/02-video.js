import { throttle } from 'lodash';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

player.on(
    'timeupdate',
    throttle(() => {
        player.getCurrentTime().then(currentTime => {
            localStorage.setItem(STORAGE_KEY, currentTime)
        });
    }, 1000)
);

const onSaveTimeUpdate = localStorage.getItem(STORAGE_KEY);
onSaveTimeUpdate === null
? player.setCurrentTime(0)
: player.setCurrentTime(onSaveTimeUpdate);
