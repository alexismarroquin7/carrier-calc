import { KeyboardArrowDown } from "@mui/icons-material"

export const ProtectionAccordionSummary = ({ protection, active, toggle }) => {
  return <div
    className="protection-accordion-summary"
  >

    <p>{protection.name ? protection.name : 'Protection'}</p>
    <div
      className={`protection-accordion-summary-icon ${active ? 'active' : ''}`}
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
      .protection-accordion-summary {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
      }
      .protection-accordion-summary-icon {
        display: flex;
        font-size: 3rem;
        border-radius: 1rem;
        border: .2rem solid var(--teal);
        color: var(--teal);
        transform-origin: center;
        transition: all .2s;
      }

      .protection-accordion-summary-icon.active {
        transform: rotate(-180deg);
      }
    `}</style>
  </div>
}