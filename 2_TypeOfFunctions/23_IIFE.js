console.log("Immediately Invoked Function Expression ");

(function printHead (){
    console.log(`Heading Invoked`)
})();

( () => {
    console.log(`Second Heading Invoked `);
})()