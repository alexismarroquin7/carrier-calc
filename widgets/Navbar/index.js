import { Menu } from "../Menu";
import { useSelector } from 'react-redux';

export const Navbar = () => {
  const quote = useSelector(s => s.quote);

  return (
  <div className={`navbar ${quote.settings.showTabs ? '' : 'use-margin'}`}>
    <nav className="navbar-nav"> 
      <div className="navbar-nav-wrapper">
        <Menu/>
        <p
          className="app-name"
        >CarrierCalc
          <span>.io</span>
        </p>
      </div>
    </nav>
    
    <style jsx>{`

      .navbar {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        position: relative;
        box-shadow: 0 0 .5rem black;
        color: var(--teal);
      }
      
      .navbar.use-margin {
      margin-bottom: 8rem;
      }
      .navbar-nav {
        z-index: 1001;
        position: fixed;
        width: 100%;
        padding: 2rem;
        display: flex;
        flex-flow: column wrap;
        background-color: var(--dark-blue);
      }
      
      .navbar-nav-wrapper {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        gap: 1rem;
      }

      .app-name {
        font-weight: bold;
        border-radius: 1rem;
        display: flex;
        flex-flow: row wrap;
        align-items: flex-end;
        gap: .5rem;
      }

      .app-name span {
        border: .2rem solid var(--teal);
        border-radius: 1rem;
        padding: .1rem .5rem;
        color: var(--dark-blue);
        background-color: var(--teal);
        font-size: 1.5rem;
      }

      
    `}</style>
  </div>
  )
}