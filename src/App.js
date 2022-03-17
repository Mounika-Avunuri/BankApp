import React from 'react';
import './App.css';
import Bank from './Bank/Bank';
import { connect } from 'react-redux';
import { Component } from 'react';

 class App extends Component{
   render(){
  return(
      <div className='App'>
        <img src= "https://www.marketing91.com/wp-content/uploads/2015/10/HDFC_Bank_Logo.jpg" 
        className="App-logo" 
        alt='logo'/>
        <h1>HDFC BANK</h1>
        <h2>Balance:${this.props.balance}</h2>
        <p>Total Amount</p>
        <div className='atm'>
          <h2>Withdraw the Amount</h2>
          <button className='btn1' onClick={()=>this.props.withdraw(10000)}>withdraw $10000</button>
          <button className='btn1' onClick={()=>this.props.withdraw(5000)}>withdraw $5000</button>
        </div>
        <Bank/>
      </div>
    )
  }
 }

 const mapStateToProps = state => {
  return { 
    balance: state.balance,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    //in last app values were hard coded, now we pass a payload depending on which button is clicked
    withdraw: (amount) => dispatch({type:'withdraw', value: amount}),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);