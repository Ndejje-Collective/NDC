import anime from "animejs/lib/anime.es";
import './Home/home';

var timelineElem = document.getElementById('timeline-head')

anime({
  targets: timelineElem,
  duration: 1000,
  loop: true,
});
