import types from './actions';

export default function ui(
    state = {
        notification: {
            show: false,
            message: ''
        },
        loading: {
            show: false,
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
                    show: true,
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
                    show: targets.length !== 0,
                    targets
                }
            };
        case types.SHOW_NOTIFICATION:
            return {
                ...state,
                notification: {
                    show: true,
                    message: payload.message
                }
            };
        case types.HIDE_NOTIFICATION:
            return {
                ...state,
                notification: {
                    show: false,
                    message: ''
                }
            };
        default:
            return state;
    }
}