import './App.css';
import Bill from './Components/Bill/Bill'
import Service from './Components/Service/Service'
import Result from './Components/Result/Result'
import Button from './Components/Button/Button'
import { useState } from 'react';

function App() {

  const [billAmount, setBillAmount] = useState("0");
  const [myReview, setMyReview] = useState("0");
  const [buddyReview, setBuddyReview] = useState("0");
  const totalAmount = Number(billAmount) + Number(((((Number(myReview) + Number(buddyReview)) / 2) / 100) * Number(billAmount)).toFixed(2));

  function handleBillInput(e) {
      setBillAmount((billAmount) => (billAmount = e.target.value));
  }

  function handleMyReview(e) {   
    setMyReview((myReview) => (myReview = e.target.value));
  }

  function handleBuddyReview(e) {   
    setBuddyReview((buddyReview) => (buddyReview = e.target.value));
  }

  function handleReset(){
    window.location.reload();
  }

  return (
    <div className="App">
      <div className='app-border'>
        <div className='app-box'>
          <Bill amount={billAmount} onAmountEnter={handleBillInput}></Bill>
          <Service myReview={myReview} handleMyReview={handleMyReview} buddyReview={buddyReview}
          handleBuddyReview={handleBuddyReview}></Service>
          <Result billAmount={billAmount} totalAmount={totalAmount} myReview={myReview} buddyReview={buddyReview}></Result>
          <Button handleReset={handleReset}></Button>
        </div>
      </div>      
    </div>
  );
}

export default App;
