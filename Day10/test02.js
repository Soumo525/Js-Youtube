//Immediately Invoked Function Expressions IIFE

(function one() {

    // named IIFE
    console.log(`connected`);
})();


( (name)=>{

    console.log(`connected ${name}`);
} ) ("Soumo")

