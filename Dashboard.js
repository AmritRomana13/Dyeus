import React, { useState, useEffect } from 'react';
import { useWeb3Context } from 'web3-react';

import './Dashboard.css';

// import the functions from the original repository
import { getPrice, getSupply, getDailyReturns, getTvl } from '../../utils/data';
import { deposit, withdraw, redeem } from '../../utils/actions';

const Dashboard = () => {
  // state variables for data
  const [price, setPrice] = useState(0);
  const [supply, setSupply] = useState(0);
  const [dailyReturns, setDailyReturns] = useState(0);
  const [tvl, setTvl] = useState(0);

  // get the current Ethereum provider
  const context = useWeb3Context();
  const { library } = context;

  // fetch data when the component is mounted
  useEffect(() => {
    const fetchData = async () => {
      // call the original repository's functions to get the data
      // and update the state variables
      const newPrice = await getPrice(library);
      setPrice(newPrice);

      const newSupply = await getSupply(library);
      setSupply(newSupply);

      const newDailyReturns = await getDailyReturns(library);
      setDailyReturns(newDailyReturns);

      const newTvl = await getTvl(library);
      setTvl(newTvl);
    };
    fetchData();
  }, [library]);

  // handle deposit button click
  const handleDeposit = async () => {
    // call the original repository's function for deposit
    await deposit(library);
  };

  // handle withdraw button click
  const handleWithdraw = async () => {
    // call the original repository's function for withdraw
    await withdraw(library);
  };

  // handle redeem button click
  const handleRedeem = async () => {
    // call the original repository's function for redeem
    await redeem(library);
  };

  return (
    <div className="dashboard">
      {/* render the data and buttons */}
      <div>Price: {price}</div>
      <div>Supply: {supply}</div>
      <div>Daily Returns: {dailyReturns}</div>
      <div>TVL: {tvl}</div>
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
      <button onClick={handleRedeem}>Redeem</button>
    </div>
  );
};

export default Dashboard;
