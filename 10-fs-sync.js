const {readFileSync,writeFileSync}=require('fs');
const first=readFileSync('./content/text2.txt','utf-8');
const second=readFileSync('./content/text3.txt','utf-8');
console.log(first,second);
writeFileSync('./content/new.txt',`Here is the result ${first},${second}`,{flag:'a'});