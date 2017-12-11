export function test1(){
	class Person{
		// age="12";
		constructor(name){
			this.Name=name;
		}
		// printName1=()=>this.Name;
		printName(){
			return this.Name;
		}
		printAge(){
			return this.age;
		}
	}
	// var person=new Person("yyg");
	// console.log(person.printName1())
	// console.log(person.printAge())
    console.log("test1");
}
export function test2(){
    console.log("test2");
}
export class MyClass {  
     
    constructor() {  
    	this.myProp = 42; 
        console.log(this.myProp); // 42  
    }  
}