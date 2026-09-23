/*syntax--> const object_name={
    key1 : value1,
    key2 : value2,
    key3 : value3,
}; */

const student={
    name :"pratyush",
    roll : 831,
    location : "gzb",
    isfollow: true,
};
console.log(student);   
student.name="prince tomer"; //we can also wrute like that  student["name"]="prince tomer"
student.roll=841;
student.location="Greater Nodia";
student.isfollow=false;
console.log(student);
/// here student is const but we can chnage the value of its memeber 