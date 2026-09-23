/* They are four different ways JavaScript can send output somewhere
1. document.write("Pratyush");
2. alert("Pratyush");
3. console.log("pratyush");
4.innerHTML --> document.getElementById("message").innerHTML = "Hello";
*/
document.write("Hello"); //document is a JavaScript object representing the current web page
document.write("i am"); //document is a JavaScript object representing the current web page
document.write("pratyush"); //document is a JavaScript object representing the current web page
document.write("ABESEC"); //document is a JavaScript object representing the current web page
//Browser opens index.html → browser creates a page structure → JavaScript gets access to that page through document
// Hello will print on web page we do not want to do (inspect--->console)
//It is part of the DOM (Document Object Model)
//disadvatage--If you call it after the page has already loaded:

alert("Your payment session has expired"); //alert() is specifically designed by the browser to show a dialog/message box it is not printing on webpage like document.write()
//Why does alert() appear immediately?
console.log("A");
alert("waits for sometime"); 
console.log("C");
//workflow print A on console ---->popup comes in box(waits for somrtime)---->javascript waits --->user click ok---->print C on console
//so alert() is basically synchronous/blocking from the JavaScript execution point of view.

let product="car";
console.log(product);
console.log("Hello");
; //It prints inside the browser's Developer Console   NOT  in web page like document.write()
// log basically means: Record/display information in the console.
//console is a browser-provided object, and log() is one of its methods.
/*  It provides several methods:
console.log()
console.error()
console.warn()
console.table()
console.info() */
//Normal users don't see it-------

/*   i have this <p id="ABES_REVIEW">  </p>  in 4_ways.html file initial it contain nothing but when i use this 
     document.getElementById("id name of ").innerHTML="type whatever you want to type"  */
document.getElementById("ABES_REVIEW").innerHTML = "5 star h mere bhai ";
/*JavaScript
   ↓
document
   ↓
find element #message
   ↓
access its inside HTML
   ↓
put "Hello"
*/

