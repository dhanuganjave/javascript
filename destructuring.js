//destructure on object
//object-->1.array 2.object
//1.array
//syntax-->
   //let/const/var [variablename]=array/arrayname
   //variable declaration
   //let a=10
  // let arr=["ab","bc",10,true]
   //let[w,x,y,z]=arr
  // console.log(w)
   //console.log(y)


   //multidimension nested array

//    let arrNested=["ab","bc",[10,20],[true,false]]
//      let[n,p,q,r]=arrNested
//      console.log(q)

     //let[a,b,[c,d],[e,f]]=arrNested
     //console.log(c)

     //2.object
     //syntax-->let/const/var{keyname}=object/objectname
     //keyname/propertyname=customename
    //  let acb={
    //     fname:"abc",
    //     age:28,
    //     mobno:9921491904

    //  }
    // let {fname,age,mobno}=acb
    // console.log(fname)

     //we can assign alise/variable for custome name
     //syntax-let/const/var{keyname:xyz}=object/objectname
     //{fname:firstname,age:Age}=acb
    // console.log(firstname)
    // console.log(Age)

     //note seprate memory allocate for lhs
     //can destructure any complex structure of object 
     let person={
        fname:"abc",
        age:10,
        mobno:9921491904,
        family:{
            son1:{
                sname:"abcson",
                skillson1:["writing","reading"]
              },
              son2:{
                snameson2:"xyzson",
               skillson2:["writing2","reading2"]
            },
        },
        skill:[{skill1:"gaming"},{skill2:"playing"}]

     }

let{fName,Age,family:{son1,son2},skill}=person
let {fName1,age,family:{son1:{sname,skillSon1:[a,b]},son2:{snameson2,skillson2:[x,y]}},skill:[{skill1},{skill2}]}=person
console.log(a)
console.log(x)
console.log(skill1)
