const INITIAL_STATE = {
  coins: [
    { name: 'quarter', value: 25 },
    { name: 'dime', value: 10 },

  ]
};

export default function reducer(state = INITIAL_STATE, action) {
    if(action.type === 'newCoin'){
        console.log(state.coins);
        if(action.value === 'penny'){
            let a = state.coins.concat({
                name: 'penny',
                value: 1
            });
            return Object.assign({}, state, {
                coins: a
            });
        }
        else if(action.value === 'nickel'){
            return Object.assign({}, state, {
                coins: state.coins.concat({
                    name: 'nickel',
                    value: 5
                })
            });
        }
        else if(action.value === 'dime'){
            return Object.assign({}, state, {
                coins: state.coins.concat({
                    name: 'Dime',
                    value: 10
                })
            });
        }
        else if(action.value === 'quarter'){
            return Object.assign({}, state, {
                coins: state.coins.concat({
                    name: 'quarter',
                    value: 25
                })
            });
        }
    }
    else{
  return state;
  }
}
