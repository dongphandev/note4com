import types from './actions';

export default function auth(
    state = {
        authenticated: false,
        token: '',
        model: {
            user: ''
        }
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
