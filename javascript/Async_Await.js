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
async function test(){
    try {
    await f1();                  //this program is good but know a days company want try catch staement 
    await f2();
    }
    catch(err) {
        console.log("ERROR",err)
    }
}
test();     

