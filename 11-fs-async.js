const {readFile,writeFile}=require('fs');
readFile('./content/text2.txt','utf8',(err,content)=>{
    if(err){
        console.log("Can't print");
        return;
    }
    const first=content;

    readFile('./content/text3.txt','utf8',(err,content)=>{
        if(err){
            console.log("Can't print");
            return;
        }
        const second=content;

        writeFile('./content/new2.txt',`here is the result ${first},${second}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        })
    })
})