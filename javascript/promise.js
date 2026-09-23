function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("HI!!!");
            resolve();
        }, 4000);
    });
}

function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("ABES CLG");
            resolve();
        }, 2000);
    });
}
                                            // drwaback in caallback nested callback (callback hell)
// Run f1, then f2                             //we have drawbak in callback hell so it is hanndle by promise 
f1().then(f2)                                  //why we do notb use promise so this is drawback of it as 4000 function then there will be series of .then so we use asywait
    .catch((err) => {
        console.log("Error: " , err);                          // we have drawback in await so want fetch 
    });

