console.log("Hi h4fb")
var varName:string="bhaskar"
console.log(varName)
enum fg {
    df=56,
    kjhg,
    kd,
}
console.log(fg.df)
console.log(fg.kd)
function ab(a:number,c:number):number{
    return a+c;
}
console.log(ab(12,23))
function checking(){
    let f=9;
    if(true){
        let f=2;
        console.log(f)
    }
    console.log(f)
}
checking()
var vb=()=>{
    console.log("bhaskar")
}
vb()
var arr:Array<number>;
arr=[1,3,3,14,44,32,34,4]
console.log(arr.reduce((sum,aff)=>sum+aff,0))//sum the all array elements 
var g=arr.filter((s)=>s>11)//filter the based on the condtion
console.log(g)
var t=g.map((h)=>h+20)//modify the array data
console.log(t)
function wel(){
    console.log("welcome to the typscript")
}
function body(callback){
    console.log("hello Bhaskar")
    callback()
}
body(wel);
let e :[number,string]=[34,'3rf']
e.push('wd',2,'jkl',9900,8,0)
console.log(e)
e.pop()
console.log(e)