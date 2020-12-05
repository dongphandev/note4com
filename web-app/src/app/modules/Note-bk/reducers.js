import types from './actions';
import * as Utils from '../../utils';

export default function note(
    state = {
        list: [],
        data: { }
    },
    { type, payload }
) {

    let sources = state;

    switch (type) {
        case types.LOAD:
            sources = Utils.transformData(payload, "id")
            return {
                list: sources.list,
                data: sources.data
            };
        
        case types.SEARCH:
            sources = Utils.transformData(payload, "id")
            return {
                list: sources.list,
                data: sources.data
            };

        case types.UPDATE:
            return {
                ...state,
                data: {
                    ...state.data,
                    [payload.id]: payload
                }
            };
        case types.CREATE:
            return {
                data: {
                    ...state.data,
                    [payload.id]: payload
                },
                list: [
                    payload['id'],
                    ...state.list 
                ]
            };

        default:
            return state;
    }
}
