import { AccountAccordion } from "./AccountAccordion";

export const AccountSection = () => {
  
  return (
  <div
    className="account-section"
  >
    <div
      className="account-section-wrapper"
    >
      <h5>Shared Features</h5>
      <AccountAccordion />
    </div>

    <style jsx>{`
      .account-section {
        color: white;
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        padding: 4rem 0;
      }
      
      .account-section-wrapper {
        width: 90%;
        display: flex;
        flex-flow: column nowrap;
        gap: 2rem;
      }

      h5 {
        color: var(--teal);
      }      

    `}</style>
  </div>
  )
}