import getData, {postData} from "./odev_module.js";

Promise.all([getData(1),postData(1)]).then(console.log).catch(console.log);