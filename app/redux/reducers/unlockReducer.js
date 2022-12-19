import { authConstants, listingItemUpdatedConstants } from "./../constants";

const reducerKey = "lock";

const defaultState = {
    lockApp: true
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case authConstants.UNLOCK_APP:
            return Object.assign({}, state, {
                lockApp: false,
            });

        default:
            return state;
    }
}
