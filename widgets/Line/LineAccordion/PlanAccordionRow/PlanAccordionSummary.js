import { KeyboardArrowDown } from "@mui/icons-material"

export const PlanAccordionSummary = ({ plan, active, toggle }) => {
  return <div
    className="plan-accordion-summary"
  >
    <div
      className="plan-accordion-summary-section"
    >
      <p
        className={`${active ? 'active' : ''}`}
      >{plan.name ? plan.name : 'Plan'}</p>
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
    
    <div
      className="plan-accordion-summary-section"
    >
      <p className="plan-due-text plan-due-text--monthly">{Number(plan.dueMonthly).toFixed(2)}/month</p>
    </div>

    <style jsx>{`
      .plan-accordion-summary {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
      }

      .plan-accordion-summary-section {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
      }
      
      .plan-accordion-summary-section:last-child {
        justify-content: flex-end;
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