// class hello{
//     constructor(num1,num2){
//         this.num1=num1
//         this.num2=num2
//     }
//     hello()
//     {console.log('numbers' +this.num1+this.num2  )
// }
// }
// let hey=new hello(1,2)
// hey.hello()
// 
// 
var hello=function (data)
{
    console.log("data"+data);
}
var hey=function(callback){
    callback("crossroads")

}
hey(hello)
