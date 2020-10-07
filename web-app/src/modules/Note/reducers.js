import types from './actions';

export default function note(
    state = {
        list: [],
        data: { }
    },
    { type, payload }
) {
    switch (type) {
        case types.LOAD:
            return {
                list: payload.list,
                data: payload.data
            };
        
        case types.SEARCH:
            return {
                list: payload.list,
                data: payload.data
            };

        case types.UPDATE:
            return {
                ...state,
                data: {
                    ...state.data,
                    [payload.key]: payload
                }
            };

        default:
            return state;
    }
}
