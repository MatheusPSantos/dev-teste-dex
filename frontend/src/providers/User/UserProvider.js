import { Parse } from 'parse';
import { parseAppId, parseUrlServer } from '../apiURL';
export default class UserProvider {
    constructor() {
        this.parseInitialize();
    }

    parseInitialize() {
        Parse.initialize(parseAppId);
        Parse.serverUrl = parseUrlServer;
    }

    // async login(user, pass) {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const user = await Parse.User.logIn(user, pass); 
    //             resolve(user);
    //         } catch (error) {
    //             reject(error.message);
    //         }
    //     });
    // }

    // login(usr, pwd) {
    //     return new Promise((resolve, reject) => {
    //         Parse.User.logIn(usr, pwd)
    //             .then((res) => {
    //                 console.log(res);
    //                 resolve(res);
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //                 reject(err);

    //             });
    //     });
    // }

    // login = async (email, password) => {
    //     console.log("trying login: ", );
    //     try {
    //       await Parse.User.logIn(email, password);
    //     //   const user = await Parse.User.currentAsync();
    //     //   await user.fetch();
    //     //   console.log(user);
    //       return { msg: "Usuário logado com sucesso."};
    //     } catch (e) {
    //       throw e.message;
    //     }
    //   };

    async login(user, password) {
        try {
            return await Parse.User.logIn(user, password);
        } catch(error) {
            console.log(error);
        }
    }

    currentUser() {
        return Parse.User.current();
    }

}