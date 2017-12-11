import { sum,pi } from "./es6_2";
console.log(sum(2,3),pi);
let arr=[];
for (let i=0;i<10;i++) {
	arr[i]=()=>console.log(i);
};
arr[6]();