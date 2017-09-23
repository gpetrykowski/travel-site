// not relevant to Trave Site

// es6 syntax
class Person{
    constructor(fullName, favColor){
    this.name = fullName;
    this.favoriteColor = favColor;
    }
    
    greet(){
        console.log("hi there"+ this.name + " " + this.favoriteColor);
    }
}

/* the same in es5 syntax
function Person(fullName, favColor){
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function(){
        console.log(this.name + " " + this.favoriteColor);
    }
}
*/

//ES5:
//module.exports = Person;
//ES6:
export default Person;