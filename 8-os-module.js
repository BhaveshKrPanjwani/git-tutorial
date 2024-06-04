const os=require('os')

//info
const user=os.userInfo();
console.log(user);


//uptime

console.log(`The System uptime is ${os.uptime()} seconds`);

const currentOs={
    name:os.type(),
    freeMem:os.freemem(),
    totalMem:os.totalmem(),
    release:os.release()
};
console.log(currentOs);