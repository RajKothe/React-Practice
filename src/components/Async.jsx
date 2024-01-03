
// async function test() {
//     console.log('A');
//     await console.log('B');
//     console.log('C');
//   }
  
//   test();
//   console.log('D');
//   console.log('E');



async function test() {
    try {
        const response = await fetch("json/demoAPI.json");
        const students = await response.json();
        return students;
    }
    catch(error) {
        console.log(error);
    }
    
}

test().then((res)=> {
    console.log(res);
});