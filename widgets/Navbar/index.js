import { Menu } from "../Menu";

export const Navbar = () => {
  return (
  <>
    <nav>
      <div className="nav-wrapper">
        <Menu/>
        <p>Member Quote Comparison</p>
      </div>
    </nav>
    <div className="spacer"></div>
    <style jsx>{`
      nav {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        padding: 2rem 0;
        box-shadow: 0 0 .5rem black;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: var(--dark-blue);
        color: var(--white);
        z-index: 1001;
      }

      .nav-wrapper {
        width: 90%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        gap: 1rem;
      }

      p {
        font-weight: bold;
      }

      .spacer {
        margin: 4rem;
      }
    `}</style>
  </>
  )
}