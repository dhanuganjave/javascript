var num=5;
var fact=1;
for(i=1;i<=num;i++)
{
    fact=fact*i;
}
console.log(fact)

const arr=[1,3,2,1,2,3,4,5]
var sum=0;
for(i=0;i<arr.length;i++)
{
    sum=sum+arr[i]
}
console.log(sum)
var revnum=[]
for(i=arr.length-1;i>=0;i--)
{
    revnum.push(arr[i])
}
console.log(revnum)

//removing duplicate element
  var b=[]
  for(i=0;i<=arr.length;i++){
  if(b.indexOf(arr[i])===-1)

  
  {
    b.push(arr[i]);

  }
}

console.log(b)
var count=0

for(i=0;i<=arr.length;i++)
{
for(j=i+1;j<=arr.length;j++){
if(arr[i]==arr[j]){
    console.log(arr[j]);
    count++;
}
}
}
