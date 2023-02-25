//1]to uppercase
//let str="dhananjay"
//console.log(str.toUpperCase())

//2]tolowercase
//let str="DHANANJAY"
//console.log(str.toLowerCase())

//3]startsWith("argument")
//let city="Sangamner"
//console.log(city.startsWith("M"))
//console.log(city.startsWith("S"))
//console.log(city.startsWith("Sangam"))

//4]endsWith("argument")
//let city="Ahemadnagar"
//console.log(city.endsWith("gar"))
//console.log(city.endsWith("rs"))

//5]slice(startpoint,endpoint)

//var str="hi dhananjay"
        // h i  d  h  a  n   n    j   a    y
        //-10-9 -8 -7 -6   -5  -4  -3  -2  -1
//console.log(str.slice(0,2))
//console.log(str.slice(3,12))
//console.log(str.slice(0,12))
//console.log(str.slice(0,12).length)
//console.log(str.slice(3))

//-ve indexing
//console.log(str.slice(-10,-8))
//console.log(str.slice())
//console.log(str.slice(-9,-1))

//6]substring(startpoint,endpoint)
//var str= " hi dhananjay"
//console.log(str.substring(0,3))
//console.log(str.substring(4))
//7]substr(startpoint,endpoint)
    //let string="hi dhananjay"
   // console.log(string.substr(0,3))
    //console.log(string.substring(3))

    //8]trim
     // let a="sangamner      "
//       console.log(a.trim())
//       console.log(a)
//       console.log(a.trim().length)
//       console.log(a.length)


//9]//trimStart
//console.log(a)
   // console.log(a.trimStart())
    //console.log((a.trimStart()).length)  //base string length
//console.log(a.length) //updated string length

//10]trimEnd
//console.log(a.trimEnd())
//console.log((a.trimEnd()).length)
//console.log(a.length)


//11]indexOf(argu1,argu2)
//let b="javascript"
  //console.log(b.indexOf("v"))
  //console.log(b.indexOf("a",1))
  //console.log(b.indexOf("a",2))

//   let b="jvscraiapt"
//   console.log(b.indexOf("a",2))
// let startpoint= b.indexOf("a")+1
// console.log(startpoint)
// console.log(b.indexOf("a",startpoint))

//12]includes(argument)

// let b="dhanu"
// console.log(b.includes("d"))
// console.log(b.includes("nu"))
// console.log(b.includes("us"))



//13]replace(basestring,replacingstring) //only one character replace at atime

// let b="dhananjay"
//   console.log(b.replace("dh","ra"))
//   console.log(b.replace("dhananjay","ramesh"))

//    let c="i am ganesh"
// console.log(c.replace("i am ganesh","i am ramesh"))

// console.log(c)


//14]replaceall(basestring,replacingstring)//multiple character replace in at a time
//   let c="rammmmrmmmrmmmm"
//   console.log(c.replaceAll("m","mnath"))
// console.log(c.replaceAll("r","s"))
// console.log(c)


//15]charAt(indexno)
//action-->gives the character at a gives no
//retun -->return the index no og given string(which vale can be stored in this index no)
// let a="string"
// console.log(a.charAt(4))
// console.log(a.charAt(3))
// console.log(typeof(a.charAt(3)))
// console.log(a.charAt(-1))
// console.log(a.charAt(-3))


//16]charcodeAt(argu1)
//argu1--->index no

//action-->gives the char at index
//retun ==>asciii value
// let b="@string"
//   console.log(b.charCodeAt(0))
//   console.log(b.charCodeAt(4))
  //17]split(argu1)

  //argu1===>""
  //action-->string split in passed parameter
  //return--->array
//   let b="hiiganesh"
// console.log(b.split())
// console.log(b.split(""))
// console.log(b.split("g"))
// console.log(b.split("ig"))


//18]concat(argu1,argu2)
//argu1--->joiner
//argu2---->join
//action:join two or more string
//return:string

// let a="hii"
// let b="good"
// let c="boy"
// console.log(a.concat("",b))
// console.log(a.concat(a+" "+b))
// console.log(a.concat(20,b))
// console.log(b.concat(a,b,c))
// console.log(a.concat(20,b,c))


// let a="hi"
// let b="hello"
// console.log(a.concat("",b))
// console.log(a+"  "+b)
// console.log(a.concat(20,b))

// //19]padstart(argu1,argu2)
//argu1-->length
//argu2===>value(forpadding)
//action-->before the base string repeating the value upto(length-1)
//return ==>string
// let a="hii"
// console.log(a.padStart(6,"we"))
// console.log(a.padStart(7,"adf"))

//by number
// let b=10
// let z=b.toString()

// console.log(z,typeof(z))

// console.log(z.padStart(4,3))

//20]padEnd(argu1,argu2)
//argu1-->length
//argu2-->value(for padding)
//action-->after the base string appling the value(length-1)
//return-->string
// let b="hii"
// console.log(b.padEnd(6,"ram"))
//  console.log(b.padEnd(8,4))


//applying for a number
  let c=10
let z=c.toString()
console.log(z,typeof(z))
console.log(z.padEnd(10,6))
//  console.log()