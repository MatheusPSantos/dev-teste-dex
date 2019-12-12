import { Parse } from 'parse';
import { parseAppId, parseUrlServer } from '../apiURL';
export default class UserProvider {
    constructor() {
        this.parseInitialize();
    }

    parseInitialize() {
        Parse.initialize(parseAppId);
        Parse.serverURL= parseUrlServer;
    }

    async login(user, password) {
        try {
            console.log(await Parse.User.logIn(user, password));
        } catch(error) {
            console.log(error);
        }
    }

    currentUser() {
        return Parse.User.current();
    }

}