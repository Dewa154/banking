import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const LoggedIn = { firstName: 'Adrian', lastName: 'JSM', email: 'contact@jsmastery.pro' };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
           type="greeting"
           title="Welcome"
           user={LoggedIn?.firstName || 'Guest'}
           subtext="Access and manage your account and transactions efficietly."
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
       user={LoggedIn}
       transactions={[]}
       banks={[{ currentBalance: 123.50 }, {currentBalance: 500.50}]}
      />
    </section>
  )
}

export default Home
