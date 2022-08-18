import { KeyboardArrowDown, Shield } from "@mui/icons-material"

const displayText = ({protection}) => {
  let text = 'None';
  
  if(protection.name.length > 0 && protection.name !== 'other'){
    text = protection.name;
  }
  
  if(protection.name.length > 0 && protection.name === 'other'){
    if(protection.title.length === 0){
      text = 'other';
    }

    if(protection.title.length > 0){
      text = protection.title;
    }
  }
  
  return text;
}

export const ProtectionAccordionSummary = ({ protection, active, toggle }) => {
  return <div
    className="protection-accordion-summary"
  >
    <div
      className="protection-accordion-summary-section"
    >
      <div
        className="protection-accordion-summary-section-top-left"
      >
        <Shield fontSize="inherit"/>
        <p
          className={`${active ? 'active' : ''}`}
        >{displayText({protection})}</p>
      </div>
      
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

    </div>

    {protection.name !== '' && <div
      className="protection-accordion-summary-section"
    >
      <p className="protection-due-text protection-due-text--today">${Number(protection.dueToday).toFixed(2)} today</p>
      <p className="protection-due-text protection-due-text--monthly">${Number(protection.dueMonthly).toFixed(2)}/month</p>
    </div>}
    
    <style jsx>{`
      .protection-accordion-summary {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
      }
      
      .protection-accordion-summary-section {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: flex-start;
        padding: 1rem 0;
      }

      .protection-accordion-summary-section-top-left {
        display: flex;
        flex-flow: row wrap;
        gap: 1rem;
        align-items: center;
        font-size: 3rem;
        width: 75%;
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

      p.active {
        font-weight: bold;
      }

      .protection-accordion-summary-icon.active {
        transform: rotate(-180deg);
      }

      .protection-due-text {
        padding: .5rem 1rem;
        border: 1px solid var(--teal);
        border-radius: 1rem;
        background-color: var(--teal);
        color: var(--dark-blue);
      }

      .protection-due-text--today {
        background-color: transparent;
        color: var(--teal);
      }
    `}</style>
  </div>
}