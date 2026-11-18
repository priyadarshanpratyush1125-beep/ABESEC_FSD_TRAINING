package org.example;

public class Methods {
    static void mymethod1() {
        System.out.println("my first function");
    }
    static void mymethod(String fname , int age) {
        System.out.println("hello "+fname+age);
    }
    public static void main(String[] args){
        mymethod("pratyush ",21);
        mymethod("piyush " , 10);
        mymethod1();



    }
}
