interface User4 {
    readonly dbId:number,
    email:string,
    userid:number,
    googleId?:string
    // ? using this means its not necessary to add
    startTrail():string
}

const jithin:Adminann={email:"",userid:1,dbId:23,startTrail(){
    return ""
},gitToken:"aa",role:'admin'}
// jithin.dbId=45  ..it will show error bcz it is read only

// Features over type
// 1reopening of the interfase.
interface User4{
    gitToken:string
}
// this is known as reopening iterfase we can write it again maybe the first interface we
//  dont know where its coming it maybe from a library so if we wanna add some then reopen 
// it dont need to touch the entire thing

// 2.inheritance
interface Adminann extends User4{
    role :"admin"|"ta"|"learner"
}