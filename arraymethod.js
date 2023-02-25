// var arr=["a","b","c",2]
// console.log(arr)
// console.log(arr.length)
// arr.push(10)
// console.log(arr.push)
// console.log(arr.push(10))
// console.log(arr)
//pop operation
//var arr=["a","b","c",3]
//console.log(arr)
//console.log(arr.length)

//arr.pop(10)
//console.log(arr.pop)
//console.log(arr.pop(10))
//console.log(arr.length)
// unshif operation
// var arr=["a","b","c",10]
// console.log(arr)
// console.log(arr.length)
// console.log(arr.unshift("hi"))
// console.log(arr)
// console.log(arr.length)
// shift
// var arr=["a","b","c",4]
// console.log(arr)
// console.log(arr.length)
// console.log(arr.shift())
// console.log(arr.length)
// console.log(arr)
//5].slice
// var arr=["a","b","c",2]
// let a=arr.slice(1,3)
// let a=arr.slice(3,1)
//  console.log(a)
//  console.log(arr)
//  console.log(arr.length)
//-ve indexing
// var arr=["a","b","c",2]
// //let a=arr.slice(-3,-1)
// let a=arr.slice(-1,-3)
// console.log(a)

// console.log(arr)
// console.log(arr.length)

// a=arr.slice(1)
// console.log(a)
//** nested array**//
//var arr=["a","b","c",[10,20],4]
//console.log(arr[3])
//console.log(arr[3][1])
//7]*****reverse Array*****//
// var arr=["a","b","c",[10,20],4]
// console.log(arr.reverse())
// console.log(arr)
//8]fill
// 
//var arr=["a","b","c",[10,20],4]
//console.log(arr.fill(true,1,5))
//console.log(arr.fill(true,-3,-1))
//console.log(arr.fill(true,-3))
//console.log(arr.slice(1,3))

//9]flat
//var arr=["a","b","c",[10,20],4]
//console.log(arr.flat())
//console.log(arr)
// var arr=["a","b","c",2]
// console.log(arr.reverse())
// console.log(arr)
//var arr=["dhanu","suyog","abhishek"]
//var arr1=["ram","sham","ganesh"]
//console.log(arr.reverse())
//console.log(arr)
//console.log((arr+arr1))
//console.log(arr.slice(0,2))
//console.log(arr)
//arr=[]
//console.log(el,index,arr)
//10]concate (arg1,arg2)
// let arr1=["a","b","c",[1,2,3],"d"]
// let arr2=["e","f","g"]
// let arr3=["a"]

// {
// console.log(arr1.concat(arr2))
// console.log(arr3,arr1)
// console.log(arr3.concat(arr2,arr1))
// }
//10:includes(arug)
// let arr1=["a","b","c",[1,2],"d"]
// {
//     console.log(arr1.includes("a"))
//     console.log(arr1.includes(1))
// }
//11]join
// let arr1=["a","b","c",[1,2],"d"]

// {
//     console.log(arr1.join())
//     console.log(arr1.join(0))
//     console.log(arr1.join("welcome"))
//     console.log(typeof(arr1.join()))
// }
//12]sort
// //sort by number
//let numarray=[8,4,5,3,7,0,2,4]
//numarray.sort()
//console.log(numarray)
//numarray.reverse()
//console.log(numarray)
//numarray.sort().reverse()
// let numarray2=[12,23,42,45,23,1234,1234,345,543,578,765]
// // numarray2.sort()
// // console.log(numarray2)
// numarray2.sort(function(a,b){return a-b})
// console.log(numarray2)
// let numarray=[1,5,4,6,7,2]
// numarray.sort(function(a,b)
// {
//     return b-a
// })
// console.log(numarray)
//let arr=[1,2,4,5,3,6,7,8]
//console.log(arr.indexOf(3))
//console.log(arr.lastIndexOf(1,1))
//console.log(arr.indexOf(2,5))
//console.log(arr.indexOf(2,indexOf(2)+1))
//14]map
//let arr=[1,2,3,4,5,6,7,8,9]
//let arr2=[]
// for(let i=10;i<=(arr.length-1);i++)
// {
//     console.log(arr[i])
//     console.log(i)
//     console.log(arr[i]+10)
//     let a=(arr[i]+10)

// }
// console.log(arr2)
// let mapReturn=arr.map(function(el,index,arr)
// {
//     console.log(el)
//     console.log(index)
//     console.log(arr)
//     return(el+10)
// })
// console.log(mapReturn)
// console.log(arr)
//16]filter
// let arr=[1,2,3,4,5,6,7,8]
// for(i=0;i<=arr.length;i++)
// {
//     if(arr[i]>=6)
//     {
//         console.log(arr[i])
//     }
// }
// let filterResult=arr.filter(function(el,index,arr){ 
// console.log(el>=6)
// return el>=6
// })
// console.log(filterResult)
// console.log(arr)
//16]reduce
// //17] for each
arr1=[1,2,3,4,5]
// let output=arr1.forEach(function(el,index,arr){
//     console.log(el+10)
//     return el+10
// })
// console.log(output)

//
//let transitions=[100,-300,200,500,-200,-400,800]
    //   let withdraw =  transitions.filter((el)=>{
        
    //         return el<0

    //     })
    //     console.log(withdraw)
    // let totalwithdraw= withdraw.reduce((acc,el)=>{
    //         console.log(el)
    //         console.log(Math.abs(el))
    //         return acc+el
    //         return acc+Math.abs(el)
    //         } ,0)
            //console.log(totalwithdraw)
           // let totalwithdraw=transitions.filter(el=>el<0).reduce((acc,el)=>(acc+Math.abs(el)),0)
             // console.log(totalwithdraw)
                //let totaldeposite=transitions.filter(el=>el>0).reduce((acc,el)=>(acc+el),0)
                //console.log(totaldeposite)
                //18] find index(callback function,thisvalue)
                //   let arr=[1,"hii",8,3,0]
                //      let output= arr.findIndex((el,index,arr)=>{
                //     console.log(el)
                //     //console.log(el>2)
                //     return el>2
                //   })
                //   console.log(output)
                  //19]some(callingfunction,thisvalue)         // or operator are use
                //   let arr=[1,2,3,4,5,6]
                //   let output=arr.some((el,index,arr)=>{
                //     console.log(el>5)
                //     return el>=5;
                //   })
                  //console.log(output)
                  //20]every(callingfunction,thisvalue)        // and operator are use
                  let arr=[1,2,3,4,,5,6,67,8]
                      let output=arr.every((el,index,arr)=>{
                    //console.log(el>5)
                    return el>5
                  })
                  console.log(output)
                 // console.log(arr[1])


