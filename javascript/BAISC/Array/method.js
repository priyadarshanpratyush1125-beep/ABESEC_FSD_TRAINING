//push()  and pop()--->add elemnt at last and return del element  

let friuts=["apple","mango","banana","grapes","papaya","annar"];
console.log(friuts);
friuts.push("kela");
console.log(friuts);
let delted_value_1=friuts.pop();   //pop() return deleted value
friuts.pop();
console.log(friuts);
console.log(`deleted value 1 is ${delted_value_1}`);

// tostring()
console.log(friuts.toString());  //return all item of array as string

//concat()--->merge two array but do not chnage original one

let vegi=["patato","nulli","carrot"];
console.log(friuts.concat(vegi));

//unshift()--->add elemnt at first 

friuts.unshift("annnnasss");
console.log(friuts);
//shift()----> del from start and return
let del_elemnent =friuts.shift();
console.log(friuts);
console.log(`deleted elemnt is  ${del_elemnent}`);

//slice(start,end)---> not it do not include end index elemnt it allways retuen start to end-1 index elemnt 
console.log(friuts.slice(0,3));
let backup =friuts.slice();  // sometime slice method is used to make copy of array



