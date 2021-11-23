/**
 *  Fct say hello
 */
const sayHi = function(who) {
    console.log(`Hi ${who}`);
}
// Never forget the export otherwise nothing will work
export {sayHi};

/**
 *  With a literal object
 */
const person = {

    firstname: "Donald",
    lastname: 'Doe',

    /**
     * Fct hello to the object
     */
    sayHello: function() {
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    },

    /**
     * Fct goodbye to the object
     */
    sayBye: function() {
        console.log(`sayBye ${this.firstname} ${this.lastname}`)
    }

};

export {person};

/**
 *  With an instantiable object
 */
const people = function() {

    this.firstname = "Daisy";
    this.lastname =  'Doe';

    /**
     * Fct hello to the object
     */
    this.hello =  function() {
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    };

    /**
     * Fct goodbye to the object
     */
    this.goodbye = function() {
        console.log(`sayBye ${this.firstname} ${this.lastname}`)
    };

};

export {people};

/**
 *  With an class
 */
class myClass {

    constructor() {
        this.firstname = "Dédé";
        this.lastname = "Doe";
    }
    /**
     * Fct hello to the object
     */
    sayHello =  function() {
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    };

    /**
     * Fct goodbye to the object
     */
    sayGoodbye = function() {
        console.log(`sayBye ${this.firstname} ${this.lastname}`)
    };
}

export {myClass};