import config from 'config';
import { authHeader } from '../_helpers';
import { handleResponse } from './user.service';

export const toolService = {
    getAll,
    addTool,
};

function addTool(tool) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(tool)
    };

    return fetch(`${config.apiUrl}/tools`, requestOptions).then(handleResponse); 
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/tools`, requestOptions).then(handleResponse);
}