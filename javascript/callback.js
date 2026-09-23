function sum(a,b){
    return a+b;
}
function sumWithMse(clbk,msg){
    const result=clbk(20,30);
    const fresult="hi"+msg+"your score is"+result;
    console.log(fresult);

}
sumWithMse(sum,"mr.mohan");