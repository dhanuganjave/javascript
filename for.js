// function dhanu(a,b)
//   {
//     console.log(a+b)
//     console.log(a-b)
//     console.log(a/b)
//     console.log(a*b)
//     console.log(a%b)

//   }
//   dhanu(30,60)
//   console.log("**************************")

//   for(let i=0;i<=10;i++)
//   console.log('hello')
// for(let i=0;i<=5;i++)
// {
//      console.log(i)
//           if(i==4)
//      {
//      break
//      }
//        console.log(i)
        
//     }
   /* for(let i=0;i<=9;i++)
    {
        //console.log(i)
        if(i==5)
        {
            continue;
    }
    console.log(i)
}*/



//addition of two no
//var m1=2;
//var m2=6;
//console.log(m1+m2)


//square root
var m1=16;
 var root=Math.sqrt(m1)
 console.log(root)

 //square of no
 var m1=4
 console.log(m1*m1)
 //swapping of two no
 var a=2
 var b=4
 var temp;
 temp=a;
 a=b;
 b=temp;
 //console.log(temp)
 console.log(a)
 console.log(b)

 //without using third variable
 var a=1,b=3;
 a=a+b;
 b=a-b;
 a=a-b;
 console.log(a,b)

 //hosting
 //a=5;
 ///console.log(a);

//var a;

const outerfun=(a)=>{
    let b=10;
    const innerfunc=()=>{
        sum=a+b;
        console.log(sum)

    }
    innerfunc()
}
outerfun(5)


//



 let i,j;
    for(i=1;i<=5;i++){
        for(j=1;j<=i;j++)
        {
        console.log("*")
        }
        console.log("\n")
        return j--;
    }


