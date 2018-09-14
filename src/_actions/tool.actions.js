import { toolConstants } from "../_constants/tool.constants";
import { toolService } from '../_services/tool.service';

export const toolActions = {
    getAll,
};

function getAll() {
    return dispatch => {
        dispatch(request());
        toolService.getAll()
            .then(
                tools => dispatch(success(tools)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: toolConstants.GETTOOLS_REQUEST } }
    function success(tools) { return { type: toolConstants.GETTOOLS_SUCCESS, tools } }
    function failure(error) { return { type: toolConstants.GETTOOLS_FAILURE, error } }
}