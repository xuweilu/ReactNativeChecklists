/**
 * Created by william on 2017/7/6.
 */
import {API_URLS, API_HEADERS} from '../constants';

let API = {
    async fetchChecklistsAsync(){
        try {
            let response = await fetch(API_URLS.get('checklists'), {
                headers: API_HEADERS,
            }).then((response) => response.json());
            return (response);
        } catch (error) {
            throw Error(error);
        }
    }
};

export default API;