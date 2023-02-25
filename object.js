//object requirement 
//user define datatype
//curd
//c--->create
//requirement --->need to  strore information of student
////ex.student--->name,class ,age ,rollno
//try -->using string datatype
//probleam-->all in string need to store in single entity data in different variable
//let studentName ="ram"
//let  Class="6th"
//let rollno="8"

//try --->using array datatype
//problem -data is not self descriptive
//let studentinfo=["ram","6th",10,8]
//we  need to use  store data in discriptive format
//object -->store information in discriptive ways (self descriptive)
//CURD
//c-create datatype
//we can create object in 3 ways
//object syntax
//let /const/var variableName={property1/key1:"key1value",property2/key2:"key2value"}
//-----------------------------------------
//1.]object literal====>
//example
let Student1={
    firstName:"ram",
   class:"6th",
   age:10,
   rollno:8
}
console.log(Student1)
console.log(Student1.firstName="ganesh")
///if exist already in object then property will be updated
////if property is not exist then it will be insert in object

//-----------------------------------------------------------------
//2]by creating instance object--->
// class ====>creating object 
//in js object is a class--->inbuild in javascript

//example-->
//let newObject=new Object()
//console.log(new Object())
//console.log(typeof (newObject))

//3]by using object constructor

// class student  {
//     constructor(fname,classname,age,rollno)
//     {
//         this.firstname=fname
//         this.classname=classname
//         this.age=age
//         this.rollno=rollno
//     }

// }
// let studentobject=new student ("ram","6th",10,8)
// console.log(studentobject)
// //student.write()
//  // we use he can write
//   console.log(firstname=student.write())
//   console.log(student.firstname)
//   __________________________________________//
//  let str1={
//    fname:"dhanu"

//   }
//   let str2={
//     fname:"ramesh"
//    }
  // what is calsss{skelton,blueprint,mold}
  //class student{
    //properties
    //firstname="ram"
    //age=20;
    //methods
//}

//creating object from a class
// syntax==>
//let /const/var objectname=new className()
//  let minstud=new student()
//  console.log(minstud)
//  let minstud2=new student()
//  console.log(minstud2)


 /// construcor in class
//  class student{
//     constructor(fname,age)
//     {
//         this.firstname=fname
//         this.age=age
    
//  let stud1=new student("ram",20)
//  console.log(stud1)
//  let stud2=new student("sagar",23)
//  console.log(stud2)
// }
 //}
//inbuild class in jsfor string and array
//for string==>
// let a=new string("ram")
// console.log(a)
// console.log(typeof(a))
// let b=new string("dhanesh")
// console.log(b)

//for array
// let arr=new Array(4)
// console.log(arr)
// console.log(arr.length)
// //datatype--->crud(properties and methods[action and return type],loop)
//R-RETRIVE OBJECT PROPERTIES //TWO WAYS
//1.DOT NOTATION
//2.BRACKET NOTATION
// let student1={
//     firstname:"ganesh",age:22,
//     Write:function(){
// console.log ("he can write")

// Write() 
// {

//     console.log("he can write")
// }
//}
//}
// two ways
//1.dot notation
//syntax-->objectname.properties name/methodnmae()
//console.log(student.firstname)
//console.log(student.write())
//2 bracket notation
//syntax-->objectname["properties name"]
//console.log(student["firstname"])
// u->updating object9insert/update property)
//three ways insert update property in object
//1.outside the object
//2.using function
//3.using constructor
//1.outside the class
// let newObj=newObj()
// console.log(newObj)
// newObj.firstname="sagar"
// console.log(newObj)

// retrive property
//objectname.property name  //return property value
//objectname.propertyname=value
//comparing variable declaration
// let a=10
// a=20
// //2.using function
// class student1
// {
//   firstname=null
//   age=null
//   setFname(fname)
//   {
//     this.firstname=fname
//   }

// setAge(age)
// {
//   this.age=age
// }
// }
// let ram=new student1
// console.log(ram)
// ram.setFname("nilesh")
// console.log(ram)
//ram.setAge(25)
//console.log(ram)

//3.using constructor
//class student{
 // constructor(fname,age){
   /// this.firstname=fname
    ////this.age=age
//   }
// }
// let Ram=new student("ram",10)
// console.log(Ram)
// Ram.mobno='12335566'
// console.log(Ram)
  


//deleting property
//syntax--->delete(keyword) object.propertyName 
// delete Ram.mobno
// console.log(Ram)



//inbuild methodof object
//syntax--->object.methodName(objName)
//1.keys()
//2.values()
//3.entries()
//4.hasOwnProperty(Argu)

//ex
// let student111={
//   firstname:"ganesh",age:22,
//   write(){
//     console.log("he can write")
//   }

//};
//1.keys(argu)
//argu=local object
//action-extracting object keys  only
//return-array
//console.log(Object.keys(student111))
//_________________________________________________________


//2.VALUES(ARUG)
//arug--local object
//action--extracting object only
//return-- array
//console.log(Object.values(student111))

//___________________________

//3.entirs (arug)
//arug==local object
///action==extracting object poroperties
//retun --nested array
//console.log(Object.entries(student111))
//____________________________-
//4.hasOwnProperty(arug)
//arug==>object key(string)
//action==checking key is present in object 
//return--true/false-bollean
//console.log(student111.hasOwnProperty('MobNo'))
//console.log(student111.hasOwnProperty('firstname'))
//console.log(student111.hasOwnProperty('firstname'))

//array new loop
//syntax
//for(let variablename of arrayname){}
let arr=[1,2,3,4]
for(val of arr){
  console.log(val)

};
//array keys in index no 


//___________________________________________
//loop on object
//syntax
//for(let variablename in object name){}
let student={
  fname:"ram",
  age:23,
  adharno:601307345046

}
for(let val in student)
{
  console.log(val);
  console.log(student[val])
  console.log(val,student[val])


};
//______________________
//new array loop
//syntax
//for(let variablename of array name){}
Object.values(student)  //convet the object in array

console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student))

for (let value of Object.keys(student))
{
  console.log(value)
};
for(let value of Object.values(student))
{
  console.log(value)
}
for(let value of Object.entries(student))
{
  console.log(value)
}

//________________________
//DESTRUCTING ARRAY
let [a,b]=['fname','kk']
for(let[a,b] of Object.entries(student))
{
  console.log(a)
  console.log(b)

}


//++++++++++++++++++++++++++++++++++++++
//summary
//syntx
//for(let variablename of arrayname){}
//loop on object
//syntax
//for (let variablename in object name){}
//object.entries(student)
