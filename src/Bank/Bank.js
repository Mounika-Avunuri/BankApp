import React from 'react';
import {connect} from 'react-redux';

class Bank extends React.Component{
    render(){
        return(
            <div className='bank'>
                <h1>Bank</h1>
                <label>Deposit the Amount<br/>
                <input type='number' className='textfield' onChange={e=>this.setState({number:e.target.value})}/>
                </label>

            <button className='confirmbtn'
            onClick={(amount)=>this.props.deposit(parseInt(this.state.number))}>Confirm</button>
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return{
        balance:state.balance
    }
}

const mapStateToProp=dispatch=>{
    return{
        deposit:(amount)=>dispatch({type:'deposit',value:amount}),
    }
}
export default connect(
    mapStateToProp,
    mapStateToProp
) (Bank);