import { Parse } from 'parse';
import { parseAppId, parseUrlServer } from '../apiURL';

export default class ContentProvider {
    constructor() {
        this.parseInitialize();
    }

    parseInitialize() {
        Parse.initialize(parseAppId);
        Parse.serverURL = parseUrlServer;
    }

    async getAllFoods() {
        try {
            return await Parse.Cloud.run("getAllFoods");
        } catch (error) {
            throw error;
        }
    }

    async getAllPeoples() {
        try {
            return await Parse.Cloud.run("getAllPeoples");
        } catch (error) {
            throw error;
        }
    }

    async getAllPlaces() {
        try {
            return await Parse.Cloud.run("getAllPlaces");
        } catch (error) {
            throw error;
        }
    }
}