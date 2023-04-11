import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const event = 'videoplayer-current-time';

const onPlay = function (data) {
const roundetTime = Math.round(data.seconds);
localStorage.setItem(event, roundetTime);
};

player.on('timeupdate', throttle(onPlay, 1000));

const time = localStorage.getItem(event);
player.setCurrentTime(time);