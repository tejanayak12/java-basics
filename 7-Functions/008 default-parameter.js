function greetuser(user='unknow'){
    console.log(`hello mr.${user}`)
}
greetuser();
greetuser("teja nayak");

const helloteja =(username = 'unkown') =>{
    return`welcome back! mr.${username}`
}
const mydata = helloteja('teja nayak');
console.log(mydata);
