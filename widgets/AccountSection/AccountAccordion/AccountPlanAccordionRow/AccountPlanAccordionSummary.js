import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import {KeyboardArrowDown} from '@mui/icons-material';
export const AccountPlanAccordionSummary = ({plan, active, toggle}) => {
  return <div
    className="account-plan-accordion-summary"
  >
    <div
      className="account-plan-accordion-summary-section"
    >
      
      <div
        className="account-plan-accordion-summary-section-top-left"
      >
        <SignalCellularAltIcon fontSize="inherit"/>
        <p>{plan.name ? plan.name : 'None'}</p>
      </div>
      
      <div
        className={`account-plan-accordion-summary-icon ${active ? 'active' : ''}`}
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

    {!active && (plan.name !== '' || Number(plan.dueMonthly).toFixed(2) > 0) && <div
      className="account-plan-accordion-summary-section due"
    >
      <p className="account-plan-due-text account-plan-due-text--monthly">${Number(plan.dueMonthly).toFixed(2)}/month</p>
    </div>}
    
    <style jsx>{`
      .account-plan-accordion-summary {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
      }
      
      .account-plan-accordion-summary-section {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: flex-start;
        padding: 1rem 0;
      }
      
      .account-plan-accordion-summary-section.due {
        justify-content: flex-end;
      }

      .account-plan-accordion-summary-section-top-left {
        display: flex;
        flex-flow: row wrap;
        gap: 1rem;
        width: 75%;
        align-items: center;
        font-size: 3rem;
      }

      .account-plan-accordion-summary-icon {
        display: flex;
        font-size: 3rem;
        border-radius: 1rem;
        border: .2rem solid var(--teal);
        color: var(--teal);
        transform-origin: center;
        transition: all .2s;
      }

      .account-plan-accordion-summary-icon.active {
        transform: rotate(-180deg);
      }

      .account-plan-due-text {
        padding: .5rem 1rem;
        border: 1px solid var(--teal);
        border-radius: 1rem;
        background-color: var(--teal);
        color: var(--dark-blue);
      }

      .account-plan-due-text--today {
        background-color: transparent;
        color: var(--teal);
      }
    `}</style>
  </div>

}