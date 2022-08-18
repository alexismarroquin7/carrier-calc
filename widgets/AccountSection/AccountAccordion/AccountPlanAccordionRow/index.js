import { AccountPlanAccordionForm } from "./AccountPlanAccordionForm"
import { AccountPlanAccordionSummary } from "./AccountPlanAccordionSummary"

export const AccountPlanAccordionRow = ({plan, active, toggle, handleChange}) => {
  return (
    <div>
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
      
      `}</style>
    </div>
  )
}