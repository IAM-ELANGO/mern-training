

const simple = async() => {
    console.log("start")

    await fun1();

    console.log("end");
    

    
}




const fun1 = async() =>{
    console.log("function1 called");
    return new Promise((resolve,reject)=>{
        resolve("resolved successfully after 10 seconds")

    },10000)
   
}





simple()