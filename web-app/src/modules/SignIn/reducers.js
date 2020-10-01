import types from '../actions';

export default function signin(
    state = {
        display: false,
        processing: false,
        model: {}
    },
    { type, payload }
) {
    switch (type) {
        case types.LOGIN:
            return {
                processing: true,
                model: payload.model
            };

        default:
            return state;
    }
}
