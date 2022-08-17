import { PlanAccordionSummary } from "./PlanAccordionSummary";
import { PlanAccordionForm } from "./PlanAccordionForm"

export const PlanAccordionRow = ({ plan, active, toggle, handleChange }) => {
  return <div
    className="plan-accordion-row"
  >

    <PlanAccordionSummary 
      active={active}
      toggle={toggle}
      plan={plan}
    />
    
    {active && <PlanAccordionForm
      plan={plan}
      handleChange={handleChange}
    />}

    <style jsx>{`
      .plan-accordion-row {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
      }
    `}</style>
  </div>
}