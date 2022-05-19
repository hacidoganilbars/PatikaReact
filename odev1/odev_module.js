import axios from "axios";

export default async(user_id)=>{ return await new Promise(async ( resolve, reject) => {
    const {data} = await  axios("https://jsonplaceholder.typicode.com/users/"+user_id);
    resolve(data);
})};
 

const postData = async (user_id)=>{return await new Promise(async (resolve,reject) => {
    const {data} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_id);
    resolve(data);
    //reject("bir sorun daha oluştu");
})};
    

export {postData};