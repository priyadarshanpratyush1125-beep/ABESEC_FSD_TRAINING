let ARR=[1,2,3,4,5,6];
console.log(ARR);
for(let i=0;i<ARR.length;i++){
    console.log(ARR[i]);
}
console.log(typeof(ARR));
ARR[0]=1000; // array is mutable in js 
let S="hello";
S[0]='p';    // no change in orginal string so sting is immutable in js

for(let element_h_mere_dost of ARR){
    console.log(ARR[element_h_mere_dost]);
}
