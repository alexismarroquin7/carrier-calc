import { KeyboardArrowDown } from "@mui/icons-material"
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

const displayText = ({plan}) => {
  let text = 'None';
  
  if(plan.name.length > 0 && plan.name !== 'other'){
    text = plan.name;
  }
  
  if(plan.name.length > 0 && plan.name === 'other'){
    if(plan.title.length === 0){
      text = 'other';
    }

    if(plan.title.length > 0){
      text = plan.title;
    }
  }
  
  return text;
}

export const PlanAccordionSummary = ({ plan, active, toggle }) => {
  return <div
    className="plan-accordion-summary"
  >
    <div
      className="plan-accordion-summary-section"
    >
      <div
        className="plan-accordion-summary-section-top-left"
      >
        <SignalCellularAltIcon fontSize="inherit"/>
        <p
          className={`${active ? 'active' : ''}`}
        >{displayText({plan})}</p>
      </div>
      <div
        className={`plan-accordion-summary-icon ${active ? 'active' : ''}`}
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
    
    {plan.name !== '' && <div
      className="plan-accordion-summary-section due"
    >
      <p className="plan-due-text plan-due-text--monthly">${Number(plan.dueMonthly).toFixed(2)}/month</p>
    </div>}

    <style jsx>{`
      .plan-accordion-summary {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
      }

      .plan-accordion-summary-section {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: flex-start;
        padding: 1rem 0;
      }
      
      .plan-accordion-summary-section.due {
        justify-content: flex-end;
      }

      .plan-accordion-summary-section-top-left {
        display: flex;
        flex-flow: row wrap;
        gap: 1rem;
        align-items: center;
        font-size: 3rem;
        width: 75%;
      }

      .plan-accordion-summary-icon {
        display: flex;
        font-size: 3rem;
        border-radius: 1rem;
        border: .2rem solid var(--teal);
        color: var(--teal);
        transform-origin: center;
        transition: all .2s;
      }

      p.active {
        font-weight: bold;
      }

      .plan-accordion-summary-icon.active {
        transform: rotate(-180deg);
      }

      .plan-due-text {
        padding: .5rem 1rem;
        border: 1px solid var(--teal);
        border-radius: 1rem;
        background-color: var(--teal);
        color: var(--dark-blue);
      }

    `}</style>
  </div>
}