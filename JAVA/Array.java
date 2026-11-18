package org.example;

public class Array {
    public static void main(String[] args) {
        String [] car={"car1","car2","car3"};
        System.out.println(car[1]);
        //0----car1
        //1----car2
        //2----car3
        //now i want at index 1 cahnge value to  Apple
        car[1]="Apple";
        System.out.println(car[1]);
        System.out.println(car.length);

        //now declare Arary with new keyword
        String[] student=new String[5];
        student[0]="student1";
        student[1]="student2";
        student[2]="student3";
        student[3]="student4";
        student[4]="student5";
        System.out.println(student[3]);
        for(int i=0;i< student.length;i++){
            System.out.println("for loop se h " +student[i]);
        }
    }
}
