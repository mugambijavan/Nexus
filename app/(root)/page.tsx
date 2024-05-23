import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Mugambi', lastName:'Javan', email:'mugambijavan@gmail.com'};
  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
        <HeaderBox 
            type= "greeting"
            title= "Welcome"
            user= {loggedIn?.firstName || 'Mugambi'}
            subtext= "Simplify your finances with Nexus. Effortless connections, real-time tracking, and instant transfers - it's your money, managed smarter"
          />
          <TotalBalanceBox 
            accounts= {[]}
            totalBanks= {1}
            totalCurrentBalance= {10000} 
          />
        </header>
        RECENT TRANSACTIONS

      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:10000}, {currentBalance:5000}]}
      />
    </section>
  )
}

export default Home