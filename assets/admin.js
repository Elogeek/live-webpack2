// Import an instantiable object
import {people} from "./js/testConsole";
//import myClass
import {myClass} from "./js/testConsole";

const p = new people();
p.hello();
p.goodbye();

const x = new myClass();
x.sayHello();
x.sayGoodbye();