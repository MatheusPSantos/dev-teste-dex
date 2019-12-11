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
        return await Promise(async (resolve, reject) => {
            
        });
    }

    currentUser() {
        return Parse.User.current();
    }
}