import { AccountProtectionAccordionForm } from "./AccountProtectionAccordionForm"
import { AccountProtectionAccordionSummary } from "./AccountProtectionAccordionSummary"

export const AccountProtectionAccordionRow = ({protection, active, toggle, handleChange}) => {
  return (
    <div>
      <AccountProtectionAccordionSummary
        active={active}
        toggle={toggle}
        protection={protection}
      />
      {active && <AccountProtectionAccordionForm
        handleChange={handleChange}
        protection={protection}
      />}
      <style jsx>{`
      
      `}</style>
    </div>
  )
}