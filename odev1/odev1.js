import getAxiosMethod, {postAxiosMethod} from "./odev_module.js";

Promise.all([getAxiosMethod(1),postAxiosMethod(1)]).then(console.log).catch(console.log);