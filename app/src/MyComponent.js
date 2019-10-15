import React from "react";
import AccountData from "./Components/AccountData";
import {
  ContractData,
  ContractForm,
} from "@drizzle/react-components";


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
        <h2>SimpleStorage</h2>
        <p>
          This shows a simple ContractData component with no arguments, along with
          a form to set its value.
        </p>
        <p>
          <strong>Stored Value: </strong>
          <ContractData contract="SimpleStorage" method="storedData" />
        </p>
        <ContractForm contract="SimpleStorage" method="set" />
      </div>

      <div className="section">
        <h2>TutorialToken</h2>
        <p>
          Here we have a form with custom, friendly labels. Also note the token
          symbol will not display a loading indicator. We've suppressed it with
          the <code>hideIndicator</code> prop because we know this variable is
          constant.
        </p>
        <p>
          <strong>Total Supply: </strong>
          <ContractData
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
        <h3>Send Tokens</h3>
        <ContractForm
          contract="TutorialToken"
          method="transfer"
          labels={["To Address", "Amount to Send"]}
        />
      </div>
      <div className="section">
        <h2>ComplexStorage</h2>
        <p>
          Finally this contract shows data types with additional considerations.
          Note in the code the strings below are converted from bytes to UTF-8
          strings and the device data struct is iterated as a list.
        </p>
        <p>
          <strong>String 1: </strong>
          <ContractData contract="ComplexStorage" method="string1" toUtf8 />
        </p>
        <p>
          <strong>String 2: </strong>
          <ContractData contract="ComplexStorage" method="string2" toUtf8 />
        </p>
        <strong>Single Device Data: </strong>
        <ContractData contract="ComplexStorage" method="singleDD" />
      </div>
    </main>

    <footer>
      <div className="container">
        Author: Nguyen Ngoc Nam
      </div>
    </footer>

  </div>
);
