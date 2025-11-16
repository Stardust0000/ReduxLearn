import { createStore } from "redux";

// inital state
const initalState = {
    user: {
        username: "AnyaChan",
        balance:2500,
    },
};

// action state
export const addMoney = (amt) => ({
    type: "addMoney",
    payload: amt,
});

export const removeMoney = (amt) => ({
    type: "removeMoney",
    payload: amt,
});

// reducer funct
function reducer(state = initalState, action) {
    switch(action.type) {
        case "addMoney":
            return{
                user: {
                    username:state.user.username,
                    balance:state.user.balance + action.payload,
                },
            };
        case "removeMoney" :
            return {
                user: {
                    username:state.user.username,
                    balance:state.user.balance - action.payload,
                },
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;