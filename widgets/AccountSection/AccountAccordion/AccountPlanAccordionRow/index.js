import { AccountPlanAccordionForm } from "./AccountPlanAccordionForm"
import { AccountPlanAccordionSummary } from "./AccountPlanAccordionSummary"

export const AccountPlanAccordionRow = ({plan, active, toggle, handleChange}) => {
  return (
    <div
      className="account-plan-accordion-row"
    >
      <AccountPlanAccordionSummary
        active={active}
        toggle={toggle}
        plan={plan}
      />
      
      {active && <AccountPlanAccordionForm
        handleChange={handleChange}
        plan={plan}
      />}
      
      <style jsx>{`
        .account-plan-accordion-row {
          border: .2rem solid var(--dark-blue);
          padding: 1rem;
          border-radius: 1rem;
          background-color: var(--dark-blue);
        }
      `}</style>
      
    </div>
  )
}