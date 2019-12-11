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

    async login(user, pass) {
        try {
            await Parse.User.logIn(user, pass);
        }catch(error) {
            throw error.message;
        }
    }
    
    currentUser() {
        return Parse.User.current();
    }

}