let str="Pratyush";
        let lengthofstring=str.length;
        console. log("length =", lengthofstring);
        console. log(str[0]);
        console. log(str[6]);

        let obj = {
            item: "pen",
            price: 10,
        };

        console. log("the cost of", obj. item, " is", obj.price);
    // another way to write this in singlr qoutes using string literals `  `
        console.log(`the cost of ${obj.item} is ${obj.price}`);  // note---> here ${} fisr calculate value then convert to string then then print 
        /* String Interpolation
        To create strings by doing substitution of placeholders
        `string text S{expression} string text`            */
        let str1="hello\nworld";
        console.log(str1);
        console.log(str1.length);  // expected 12 but answer is 11 as \n count as 1 char