// Async functions

function test1() {
    setTimeout(() => {
        console.log("test1");
    }, 2000);
}

function test2() {
    setTimeout(() => {
        console.log("test2");
    }, 1000);
}

function test3(cb) {
    setTimeout(() => {
        console.log("test3");
        cb();
    }, 2000);
}

function test4(cb) {
    setTimeout(() => {
        console.log("test4");
        cb();
    }, 1000);
}

function test5(cb) {
    setTimeout(() => {
        console.log("test5");
        cb();
    }, 2000);
}

function test6(cb) {
    setTimeout(() => {
        console.log("test6");
        cb();
    }, 1000);
}


// CALLBACK HELL 😵

test3(() => {
    test4(() => {
        test5(() => {
            test6(() => {
                console.log("All tasks completed");
            });
        });
    });
});
