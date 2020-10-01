import types from '../actions/app';

export default function app(
    state = {
        notification: {
            display: false,
            message: ''
        },
        loading: {
            display: false,
            targets:[]
        }
    },
    { type, payload }
) {
    let targets = state.loading.targets;
    switch (type) {
        case types.SHOW_LOADING:
            if (payload.target) {
                targets.push(payload.target);
            }
            return {
                ...state,
                loading: {
                    display: true,
                    targets
                }
            };
        case types.HIDE_LOADING:
            if (payload.target) {
                targets = targets.filter(target=>target!==payload.target)
            }
            return {
                ...state,
                loading: {
                    display: targets.length !== 0,
                    targets
                }
            };
        case types.SHOW_NOTIFICATION:
            return {
                ...state,
                notification: {
                    display: true,
                    message: payload.message
                }
            };
        case types.HIDE_NOTIFICATION:
            return {
                ...state,
                notification: {
                    display: false,
                    message: ''
                }
            };
        default:
            return state;
    }
}
