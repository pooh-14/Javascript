// setTimeout(() => { console.log("After 5 sec..") } , 2000)
// setInterval(() => { console.log("Got..") }, 5000)

// function resolveAfter5Seconds() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('response');
//         }, 5000);
//     });
// }

// async function asyncCall() {
//     console.log('Start');
//     const result = await resolveAfter2Seconds();
//     console.log(result,"- result");
//     console.log("end")
//     // Expected output: "resolved"
// }
// asyncCall();

function resolveafter5secs(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('two')
        },5000);
    });
}

async function pooja(){
    console.log('one')
    const res = await resolveafter5secs()
    console.log(res)
    console.log("three")
}
pooja()