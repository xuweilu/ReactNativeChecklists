/**
 * Created by william on 2017/7/6.
 */
export const API_DOMAIN = 'http://localhost:5500';

export const API_HEADERS = {
    'Content-Type': 'application/json'
};

export const API_URLS = new Map([
    ['checklists', `${API_DOMAIN}/checklists`],
]);

export default {
    REQUEST_CHECKLISTS: 'request checklists',
    RECEIVE_CHECKLISTS: 'receive checklists',
}