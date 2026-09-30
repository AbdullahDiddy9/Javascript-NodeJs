function getMarks(){
    return new Promise ((resolve , reject)=> {
        let marks = "85";
        if (marks){
            resolve("85 marks");
        }
        else 
             reject ("Error");
    });
}

async function final(){
    console.log ("marks uploaded");
    try {
    let result = await getMarks();
    console.log (result);
    }
    catch (error) {
        console.log(error)
    }
}
final();
