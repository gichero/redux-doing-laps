const INITIAL_STATE = {
  content: ''
};

export default function reducer(state = INITIAL_STATE, action) {
    if(action.type === 'fetchPage'){
        return Object.assign({}, state, {
            content: action.payload
        });
    }
  return state;
}
