import types from './actions';

export default function note(
    state = {
        list: [],
        data: { }
    },
    { type, payload }
) {
    switch (type) {
        case types.AUTHENTICATED:
            return {
                authenticated: true,
                token: payload.token,
                model: payload.model
            };
        
        default:
            return state;
    }
}
