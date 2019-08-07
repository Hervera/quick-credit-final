import React, { Component } from 'react';

class CreateLoan extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="aside" id="aside">
          <ul>
            <li><a href="account.html">My account</a></li>
            <li><a href="request-a-loan.html" className="active">Request a Loan</a></li>
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
                  <b>Request A Loan</b>
                </li>
              </ul>
            </div>
            <div className="back-card">
              <form method="POST">
                <div className="each-input">
                  <label>Full Name</label>
                  <input type="text" name="name" className="input-form readonly" value="Herve Nkurikiyimfura" readOnly="true" />
                </div>
                <div className="each-input">
                  <label>Amount in ($) for a loan </label>
                  <input type="number" name="number" className="input-form" />
                </div>
                <div className="each-input">
                  <label>Tenor</label>
                  <select name="tenor" className="input-form">
                    <option value="1" selected="true">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
                <div className="each-input">
                  <label>Payment Installment</label>
                  <input
                    type="number"
                    name="paymentInstallment"
                    placeholder="Auto complete"
                    readOnly="true"
                    className="input-form"
                  />
                </div>
                <div className="each-input">
                  <label>Interest (5% of the amount)</label>
                  <input type="number" name="interest" placeholder="Auto complete" readOnly="true" className="input-form" />
                </div>
                <button className="btn blue-btn" type="submit">Request A Loan</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateLoan;
