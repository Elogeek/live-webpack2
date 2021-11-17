// First the imports
import {sayHi} from "./js/testConsole";
import {person} from "./js/testConsole";
import css from "./css/front.css";
import pictures from './css/pictures/imgNinja.jpg';


sayHi("Bubulle Doe !");

person.sayHello();
person.sayBye();

const img = document.createElement('img');
img.src = pictures;
document.body.appendChild(img);
