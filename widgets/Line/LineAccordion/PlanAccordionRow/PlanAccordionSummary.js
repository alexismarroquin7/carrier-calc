import { KeyboardArrowDown } from "@mui/icons-material"

export const PlanAccordionSummary = ({ plan, active, toggle }) => {
  return <div
    className="plan-accordion-summary"
  >

    <p>{plan.name ? plan.name : 'Plan'}</p>
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
    
    <style jsx>{`
      .plan-accordion-summary {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
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

      .plan-accordion-summary-icon.active {
        transform: rotate(-180deg);
      }
    `}</style>
  </div>
}