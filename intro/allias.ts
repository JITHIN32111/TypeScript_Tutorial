type User={
    name:string;
    email:string;
    isActive:boolean
}

function createUsera(user:User){
    console.log(user.name);
    
}

createUsera({name:"",email:"",isActive:false})

// here the arguments must contain the values of User


