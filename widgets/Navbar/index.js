import { Menu } from "../Menu";

export const Navbar = () => {
  return (
  <div className="navbar">
    <nav className="navbar-nav">
      <div className="navbar-nav-wrapper">
        <Menu/>
        <p>Member Quote Comparison</p>
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
        /* margin-bottom: 8rem; */
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

      p {
        font-weight: bold;
        width: 50%;
      }

      .spacer {
        margin: 4rem;
      }
    `}</style>
  </div>
  )
}