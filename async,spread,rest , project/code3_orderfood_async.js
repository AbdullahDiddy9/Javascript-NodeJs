function orderfood(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("pizza is ready");
        }, 2000);
    });
}

async function test(){
    console.log("order is placed");

    let result = await orderfood();

    console.log(result);
    console.log("eating pizza");
}

test();
