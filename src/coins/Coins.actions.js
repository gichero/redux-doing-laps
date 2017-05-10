export function addCoin(coin){
    return{
        type: 'newCoin',
        value: coin
    }
}
