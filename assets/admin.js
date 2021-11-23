// Import an instantiable object
import {people} from "./js/testConsole.mjs";
//import myClass
import {myClass} from "./js/testConsole.mjs";

const p = new people();
p.hello();
p.goodbye();

const x = new myClass();
x.sayHello();
x.sayGoodbye();