import { AccountAccordion } from "./AccountAccordion";

export const AccountSection = () => {
  
  return (
  <div
    className="account-section"
  >
    <h5>Account</h5>
    
    <AccountAccordion />

    <style jsx>{`
      .account-section {
        border: .2rem solid var(--dark-blue);
        background-color: var(--dark-blue);
        border-radius: 1rem;
        color: white;
        width: 90%;
        padding: 2rem;

        display: flex;
        flex-flow: column wrap;
        gap: 2rem;
      }

      h5 {
        color: var(--teal);
      }      

    `}</style>
  </div>
  )
}