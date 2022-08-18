
import {KeyboardArrowDown, Shield} from '@mui/icons-material';

export const AccountProtectionAccordionSummary = ({protection, active, toggle}) => {
  return <div
    className="account-protection-accordion-summary"
  >
    <div
      className="account-protection-accordion-summary-section"
    >
      
      <div
        className="account-protection-accordion-summary-section-top-left"
      >
        <Shield fontSize="inherit"/>
        <p>{protection.name ? protection.name : 'None'}</p>
      </div>
      
      <div
        className={`account-protection-accordion-summary-icon ${active ? 'active' : ''}`}
      >
        <KeyboardArrowDown 
          fontSize="inherit"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggle();
          }}
        />
      </div>
    </div>

    {!active && (protection.name !== '' || Number(protection.dueMonthly).toFixed(2) > 0) && <div
      className="account-protection-accordion-summary-section due"
    >
      <p className="account-protection-due-text account-protection-due-text--monthly">${Number(protection.dueMonthly).toFixed(2)}/month</p>
    </div>}
    
    <style jsx>{`
      .account-protection-accordion-summary {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
      }
      
      .account-protection-accordion-summary-section {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: flex-start;
        padding: 1rem 0;
      }
      
      .account-protection-accordion-summary-section.due {
        justify-content: flex-end;
      }

      .account-protection-accordion-summary-section-top-left {
        display: flex;
        flex-flow: row wrap;
        gap: 1rem;
        width: 75%;
        align-items: center;
        font-size: 3rem;
      }

      .account-protection-accordion-summary-icon {
        display: flex;
        font-size: 3rem;
        border-radius: 1rem;
        border: .2rem solid var(--teal);
        color: var(--teal);
        transform-origin: center;
        transition: all .2s;
      }

      .account-protection-accordion-summary-icon.active {
        transform: rotate(-180deg);
      }

      .account-protection-due-text {
        padding: .5rem 1rem;
        border: 1px solid var(--teal);
        border-radius: 1rem;
        background-color: var(--teal);
        color: var(--dark-blue);
      }

      .account-protection-due-text--today {
        background-color: transparent;
        color: var(--teal);
      }
    `}</style>
  </div>

}