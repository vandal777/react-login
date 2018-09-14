import { toolConstants } from "../_constants/tool.constants";

export function tools(state = {}, action) {
    switch (action.type) {
        case toolConstants.GETTOOLS_REQUEST:
            return {
                loading: true
        };
        case toolConstants.GETTOOLS_SUCCESS:
            return {
                ...state,
                tools: action.tools
        };
        case toolConstants.GETTOOLS_FAILURE:
            return { 
                error: action.error
        };
        default:
            return state
    }
}