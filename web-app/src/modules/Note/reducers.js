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
                data: {
                    ...state.data,
                    [payload.id]: payload
                },
                list: [
                    ...state.list,
                    payload['id']
                ]
            };

        default:
            return state;
    }
}
