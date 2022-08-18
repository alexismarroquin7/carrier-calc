import { ProtectionAccordionSummary } from "./ProtectionAccordionSummary";
import { ProtectionAccordionForm } from "./ProtectionAccordionForm";

export const ProtectionAccordionRow = ({active, toggle, protection, handleChange}) => {
  return <div
    className="protection-accordion-row"
  >
    <ProtectionAccordionSummary 
      active={active}
      toggle={toggle}
      protection={protection}
    />
    
    {active && <ProtectionAccordionForm
      protection={protection}
      handleChange={handleChange}
    />}
    <style jsx>{`
    
    `}</style>
  </div>
}