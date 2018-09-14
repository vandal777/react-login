import config from 'config';
import { authHeader } from '../_helpers';
import { handleResponse } from './user.service';

export const toolService = {
    getAll,
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/tools`, requestOptions).then(handleResponse);
}