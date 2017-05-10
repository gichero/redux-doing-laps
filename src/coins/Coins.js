/*
Make each "Add <coin>" button work. Do one at a time. Each one will use a different action, so you'll do a lap for each coin type.
*/
import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Coins.actions';

class Coins extends React.Component {
  render() {
      
    return (
      <div>
        <button onClick={()=>this.props.addCoin('penny')}>Add Penny</button>
        <button onClick={()=>this.props.addCoin('nickel')}>Add Nickel</button>
        <button onClick={()=>this.props.addCoin('dime')}>Add Dime</button>
        <button onClick={()=>this.props.addCoin('quarter')}>Add Quarter</button>
        <div>
          {this.props.coins.map((coin, idx) =>
            <img key={idx} src={`images/${coin.name}-front.png`} alt={coin.name}/>
          )}
        </div>
      </div>
    );
  }
}

const CoinsContainer = ReactRedux.connect(
  state => state.coins,
  actions
)(Coins);

export default CoinsContainer;
