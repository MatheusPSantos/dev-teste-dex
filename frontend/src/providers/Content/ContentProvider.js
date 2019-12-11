import { Parse } from 'parse';
import { parseAppId, parseUrlServer } from '../apiURL';

export default class ContentProvider {
    constructor() {
        this.parseInitialize();
    }

    parseInitialize() {
        Parse.initialize(parseAppId);
        Parse.serverURL = parseUrlServer;
        console.log(parseUrlServer);
    }

    async getAllFoods() {
        try {
            return await Parse.Cloud.run("getAllFoods");
        } catch(error) {
            console.log(error);
        }
    }

    // getAllPeople() {

    // }

    // getAllPlaces() {

    // }
}