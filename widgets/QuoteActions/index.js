import { useDispatch, useSelector } from "react-redux"
import { useToggle } from "../../hooks/useToggle";
import { quoteSlice } from "../../store/slices/quote-slice";
import { calcDueMonthly, calcDueToday } from "../QuoteForm";

const generateQuoteText = (quote) => {
  
  let linesText = '';

  quote.lines.map((line, i) => {
    linesText += `------------------------
  Line: ${i+1}
    Type: ${line.type}    
    Name: ${line.name}    
    Phone Number: ${line.phoneNumber}
    ------------------------
    Device:
      Name: ${line.device.name} 
      Price: $${line.device.price ? Number(line.device.price).toFixed(2) : 0.00} 
      Downpayment: $${line.device.downpayment ? Number(line.device.downpayment).toFixed(2) : 0.00}    
      Trade In Credit: $${line.device.tradeInCredit ? Number(line.device.tradeInCredit).toFixed(2) : 0.00}    
      Due:
        Today: $${line.device.dueToday ? Number(line.device.dueToday).toFixed(2) : 0.00}    
        Monthly: $${line.device.dueMonthly ? Number(line.device.dueMonthly).toFixed(2) : 0.00}
    ------------------------
    Plan:
      Name: ${line.plan.name ? line.plan.name : 'None'} 
      Due:
        Monthly: $${line.plan.dueMonthly ? Number(line.plan.dueMonthly).toFixed(2) : 0.00} 
    ------------------------
    Protection:
      Name: ${line.protection.name ? line.protection.name : 'None'} 
      Due:
        Today: $${line.protection.dueToday ? Number(line.protection.dueToday).toFixed(2) : 0.00} 
        Monthly: $${line.protection.dueMonthly ? Number(line.protection.dueMonthly).toFixed(2) : 0.00} 
`
  })
  
  return `
${quote.name}
------------------------
Carrier: ${quote.carrier.title}
------------------------
Due:
  Today: $${calcDueToday(quote).toFixed(2)}
  Monthly: $${calcDueMonthly(quote).toFixed(2)}
------------------------
Account:
  Plan: 
    Name: ${quote.account.plan.name ? quote.account.plan.name : "None"}
    Due:
      Monthly: $${Number(quote.account.plan.dueMonthly).toFixed(2)}
  Protection:
    Name: ${quote.account.protection.name ? quote.account.protection.name : "None"}
    Due:
      Monthly: $${Number(quote.account.protection.dueMonthly).toFixed(2)}
------------------------
Lines: ${quote.lines.length}
${linesText}
`
}

export const QuoteActions = () => {
  const dispatch = useDispatch();
  const {active,toggle} = useToggle();
  const {active: deleteModeActive,toggle: toggleDeleteModeActive} = useToggle();
  
  const quote = useSelector(s => {
    const [q] = s.quote.list.filter(item => item.id === s.quote.selected.quote.id);
    return q;
  });

  return (
    <div
      className="quote-actions-wrapper"
    >
      <button
        className="menu-button"
        onClick={(e) => {
          e.preventDefault();
          toggle();
        }}
      >
        |||
      </button>
      
      <div
        className={`quote-actions-buttons ${active ? '' : 'hidden'}`}
      >
        <button
          className="quote-action-button"
          onClick={(e) => {
            e.preventDefault();
            dispatch(quoteSlice.actions.duplicateSelectedQuote());
            toggle();
          }}    
        >Duplicate</button>
        <button
          className="quote-action-button"
          onClick={(e) => {
            e.preventDefault();
            const element = document.createElement("a");
            const file = new Blob([generateQuoteText(quote)], {
              type: "text/plain"
            });
            element.href = URL.createObjectURL(file);
            element.download = `${quote.name}-${quote.carrier.name}-lines_${quote.lines.length}.txt`;
            document.body.appendChild(element);
            element.click();
          }}    
        >Export</button>
        {deleteModeActive ? (
        <>
          <button
            className="quote-action-button delete-mode"
            onClick={(e) => {
              e.preventDefault();
              dispatch(quoteSlice.actions.deleteSelectedQuote());
              toggleDeleteModeActive();
            }}    
          >Confirm Delete</button>
          <button
            className="quote-action-button cancel-delete-mode"
            onClick={(e) => {
              e.preventDefault();
              toggleDeleteModeActive();
            }}
          >Cancel</button>
          </>
        ) : (
          <button
            className="quote-action-button"
            onClick={(e) => {
              e.preventDefault();
              toggleDeleteModeActive();
            }}
          >Delete</button>
        )}
      </div>

      <style jsx>{`
        .quote-actions-wrapper {
          width: 100%;
          display: flex;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
          padding: 2rem;
          gap: 1rem;
          position: relative;
        }

        .menu-button {
          border: 0;
          transform-origin: center;
          transform: rotate(90deg);
          font-size: 4rem;
          background-color: transparent;
        }
        
        .quote-actions-buttons {
          display: flex;
          flex-flow: column wrap;
          align-items: flex-start;
          gap: 1rem;
          position: absolute;
          z-index: 999;
          top: 7rem;
        }
        
        .quote-actions-buttons.hidden {
          display: none;
        }

        .quote-action-button {
          border: 1px solid var(--google-blue); 
          border-radius: 2rem; 
          color: white; 
          background-color: var(--google-blue);
          padding: 1rem 2rem;
          box-shadow: 0 0 .2rem black;
        }

        .delete-mode {
          border-color: var(--google-red);
          background-color: var(--google-red);
        }
        
        .cancel-delete-mode {
          color: var(--google-blue);
          background-color: white;
        }
      `}</style>
    </div>
  )
}