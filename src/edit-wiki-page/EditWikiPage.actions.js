import $ from 'jquery';

function pageInfo(info){
    return{
        type: 'fetchPage',
        payload: info
    }
}

export function fetchPage(page){
    let asyncAction = function(dispatch){
        $.ajax({
            url: 'http://localhost:4000/api/page/'+page
        })
        .then(info => dispatch(pageInfo(info)))
    }
    return asyncAction;
}

export function writeContent(word){
    return{
        type: 'write',
        word: word

    }
}

export function click(title, content){
    let asyncAction = function(dispatch){
        $.ajax({
            url: 'http://localhost:4000/api/page/'+title,
            method: 'PUT',
            info: {title: title,
                    content: content}
        })
        .then(info => dispatch(pageInfo(info)))
    }
    return asyncAction;
}
