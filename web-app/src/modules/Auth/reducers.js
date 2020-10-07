import types from './actions';

export default function auth(
    state = {
        authenticated: true,
        token: '',
        owner: '',
        model: {
            
        }
    },
    { type, payload }
) {
    switch (type) {
        case types.AUTHENTICATED:
            return {
                authenticated: true,
                token: payload.token,
                owner: payload.owner,
                model: payload.model
            };
        
        default:
            return state;
    }
}
