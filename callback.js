/*
setTimeout(()=>{
    console.log("Hello")
},5000);
*/

/*
setInterval(()=>{
    console.log("Ben Her Saniye Çalışırım")
},1000);
*/

/*
const sayHi=()=>{
    console.log("merhaba");
}

sayHi();
*/

/*
//parametre olarak fonksyion geçildi
const sayHi=(cb)=>{
    cb();
};

sayHi(()=>{
    console.log("Hello")
});
*/
import fetch from "node-fetch";
import axios from "axios";

/*
fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => data.json())
.then((users)=>console.log(users));
*/

/*
fetch("https://jsonplaceholder.typicode.com/users")
    .then((data)=>data.json())
    .then((users)=>{
        console.log("Users yüklendi!!! ", users);
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((data)=>data.json())
            .then((post1)=>{
                console.log("post1 yüklendi!!! ", post1)
                fetch("https://jsonplaceholder.typicode.com/posts/1")
                    .then((data)=>data.json())
                    .then((post2)=>{
                        console.log("post2 yüklendi!!! ",post2)
                    ;})
            });
    });
*/

/*
async function getData(){
    const users =await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    console.log("users ",users);

    const post1 =await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    console.log("post1 ",post1);

    const post2 =await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();
    console.log("post2 ",post2);

}

getData();
*/
/*
(()=>{
    console.log("selam");
})();
*/

/*
(async () => {
    const users =await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    const post1 =await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    const post2 =await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();
    console.log("users ",users);
    console.log("post1 ",post1);
    console.log("post2 ",post2);
})();
*/

/*
//axios
(async () => {
    const {data:users} =await axios("https://jsonplaceholder.typicode.com/users");
    const {data:post1} =await axios("https://jsonplaceholder.typicode.com/posts/1");
    const {data:post2} =await axios("https://jsonplaceholder.typicode.com/posts/2");
    console.log("users ",users);
    console.log("post1 ",post1);
    console.log("post2 ",post2);
})();
*/

const getUsers = () => {
    return new Promise(async ( resolve, reject) => {
        const {data} =await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data);
        //reject("bir sorun oluştu!");
    });
};

const getPost = (post_id) => {
    return new Promise(async (resolve,reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/posts/"+post_id);
        resolve(data);
        //reject("bir sorun daha oluştu");
    });
} 


/*
(async()=> {
    await getUsers().then((data) => {
        console.log("### USERS ###");
        console.log(data);
    }).catch((e) => {
        console.log(e);
    });
    
    await getPost(1).then((data) => {
        console.log("### POST ###");
        console.log(data);
    }).catch((e) => {
        console.log(e);
    });
})();

*/

/*
(async()=>{

    try{
        const users = await getUsers();
        const post = await getPost(1);
        console.log(users);
        console.log(post);
    }catch(e){
        console.log(e);
    }
 
})();
*/

Promise.all([getUsers(),getPost(1)]).then(console.log).catch(console.log);