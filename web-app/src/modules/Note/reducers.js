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
        
        default:
            return state;
    }
}
