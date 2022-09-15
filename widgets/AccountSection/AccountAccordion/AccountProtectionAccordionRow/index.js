import { AccountProtectionAccordionForm } from "./AccountProtectionAccordionForm"
import { AccountProtectionAccordionSummary } from "./AccountProtectionAccordionSummary"

export const AccountProtectionAccordionRow = ({protection, active, toggle, handleChange}) => {
  return (
    <div className="account-protection-accordion-row">
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
        .account-protection-accordion-row {
          border: .2rem solid var(--dark-blue);
          padding: 1rem;
          border-radius: 1rem;
          background-color: var(--dark-blue);
        }
      `}</style>
    </div>
  )
}