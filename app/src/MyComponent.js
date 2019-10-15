import React from "react";
import AccountData from "./Components/AccountData";
import ContractData from "./Components/ContractData";
import ContractForm from "./Components/ContractForm";
// import {
//   ContractData,
//   ContractForm,
// } from "@drizzle/react-components";


export default ({ accounts }) => (
  <div>
    <header>
      <div className="nav">
        <h1 className="container text-center">TEMPLATE</h1>
      </div>
    </header>

    <main className="container">
      <div className="section">
        <AccountData accountIndex={0} units="ether" precision={3} header_text="Active Account"/>
      </div>

      <div className="section">
        <div className="card">
          <div className="card-header">
            <h4>NanoToken</h4>
          </div>
          <div className="card-body">
            <p>
              Here we have a form with custom, friendly labels. Also note the token
              symbol will not display a loading indicator. We've suppressed it with
              the <code>hideIndicator</code> prop because we know this variable is
              constant.
            </p>
            <p>
              <strong>Total Supply: </strong>
              <ContractData
                header_text="NanoToken"
                contract="TutorialToken"
                method="totalSupply"
                methodArgs={[{ from: accounts[0] }]}
              />{" "}
              <ContractData contract="TutorialToken" method="symbol" hideIndicator />
            </p>
            <p>
              <strong>My Balance: </strong>
              <ContractData
                contract="TutorialToken"
                method="balanceOf"
                methodArgs={[accounts[0]]}
              />
            </p>

          </div>
{/*
          <div className="card-footer">
          </div>
*/}
        </div>
      </div>

      <div className="section">
        <div className="card">
          <div className="card-header">
            <h4>Send Tokens</h4>
          </div>
          <div className="card-body">
            <ContractForm
              contract="TutorialToken"
              method="transfer"
              labels={["To Address", "Amount to Send"]}
            />
          </div>
        </div>
      </div>

    </main>

    <footer>
      <div className="container">
        Author: Nguyen Ngoc Nam
      </div>
    </footer>

  </div>
);
