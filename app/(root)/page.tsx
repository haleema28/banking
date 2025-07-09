import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  const loggedIn = { firstName: 'Haleema',lastName: 'Sadiya',email:'sadiyahaleema2004@gmail.com'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='homeHeader'>
        <HeaderBox
         type='greeting'
         title='welcome'
         user={loggedIn?.firstName || 'Guest'}
         subtext='Access and manage your account and transactions efficiently.'
        />
        <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
          </header>
          RECENT TRANSACTIONS
        </div>
        <RightSidebar
        user={loggedIn}
        transactions ={[]}
        banks={[{currentBalance: 123.50},{currentBalance: 500.50}]}
        />
        </section>
  )
}

export default Home