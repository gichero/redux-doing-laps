const INITIAL_STATE = {
  content: ''
};

export default function reducer(state = INITIAL_STATE, action) {
    if(action.type === 'fetchPage'){
        return Object.assign({}, state, {
            title: action.payload.title,
            content: action.payload.content
        });
    }else if (action.type === 'write'){
        return Object.assign({}, state, {
            content: action.word,
        });

    }else{
        return state;
    }

}
