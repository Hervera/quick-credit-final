import React from 'react';
import '../../css/styles.css';
import '../../css/responsive.css';

class Account extends React.Component {
  render() {
    return (
      <div className="main-content">
        <div className="aside" id="aside">
          <ul>
            <li><a href="account.html" className="active">My account</a></li>
            <li><a href="request-a-loan.html">Request a Loan</a></li>
            <li><a href="requested-loans.html">All requested loans</a></li>
            <li><a href="repayment-history.html">Repayment history</a></li>
          </ul>
        </div>
        <div className="content" id="content">
          <div id="client">
            <div id="current-pages">
              <ul className="current-page">
                <li className="active">
                  {' '}
                  <b>My account | Client ID: #45645678</b>
                  <label className="label green-label">verified</label>
                </li>
              </ul>
            </div>
            <div className="back-card">
              <table className="table">
                <tbody>
                  <tr>
                    <td><b>Full Name</b></td>
                    <td>
                      {' '}
                      <span>Herve Nkurikiyimfura</span>
                    </td>
                  </tr>
                  <tr>
                    <td><b>Email</b></td>
                    <td><span>herveralive@gmail.com</span></td>
                  </tr>
                  <tr>
                    <td><b>Address</b></td>
                    <td>KN Nyamirambo ST 400</td>
                  </tr>
                  <tr>
                    <td><b>Current Loan</b></td>
                    <td>$345.00</td>
                  </tr>
                  <tr>
                    <td><b>Payed Loan</b></td>
                    <td>$300.00</td>
                  </tr>
                  <tr>
                    <td><b>Remain</b></td>
                    <td>$45.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
