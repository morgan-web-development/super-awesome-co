import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: 1122,
      firstName: "john",
      lastName: "doe",
      purchases: [
        {date: "2020-01-23T18:25:43.511Z", amount: 140},
        {date: "2020-02-23T18:25:43.511Z", amount: 110},
      ]
    };
  }

  render() {

    const points = this.state.purchases.map((purchase) =>

      var twoPoints = math.floor( {purchase.amount })
      <li> {purchase.amount}</li>
    );
    return (
      <div>
        <h1> Welcome {this.state.firstName} </h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<Users />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
