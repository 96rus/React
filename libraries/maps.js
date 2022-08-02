import openGoogle from '../google.js';
import openAllMaps from '../src/main.js';
import openYandex from './yandex.js';

let openAllMaps = () => {
  openGoogle();
  openYandex();
  openAllMaps();
}