import { useDispatch, useSelector } from "react-redux"
import { useToggle } from "../../hooks/useToggle";
import { quoteSlice } from "../../store/slices/quote-slice";
import { calcQuoteDueMonthly, calcQuoteDueToday } from "../QuoteForm";

const todaysDate = () => {
  let today = '';

  const d = new Date();

  let month = d.getMonth() + 1;
  let date = d.getDate();
  let year = d.getFullYear();
  if(month<10){
    month = `0${month}`;
  }
  if(date<10){
    date = `0${date}`;
  }

  today = `${month}-${date}-${year}`;

  return today;
}

const generateQuoteDocument = (type, quote) => {

  switch(type){
    case 'text/plain':
      let linesPlainText = '';

      quote.lines.map((line, i) => {
        linesPlainText += `------------------------
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
${todaysDate()}
${quote.name}
------------------------
Carrier: ${quote.carrier.title}
------------------------
Due:
  Today: $${calcQuoteDueToday(quote).toFixed(2)}
  Monthly: $${calcQuoteDueMonthly(quote).toFixed(2)}
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
  ${linesPlainText}
`
    
    case 'text/html':
      let linesHtml = `<table>
      <tr>
        <th>Line</th>
        <th>Type</th>
        <th>Name</th>
        <th>Phone Number</th>

        <th>Device</th>
        <th>Price</th>
        <th>Downpayment</th>
        <th>Trade In Credit</th>
        <th>(Device) Due Today</th>
        <th>(Device) Due Monthly</th>

        <th>Plan</th>
        <th>(Plan) Due Monthly</th>
        <th>Protection</th>
        <th>(Protection) Due Today</th>
        <th>(Protection) Due Monthly</th>
        
      </tr>
    `;
      
      quote.lines.forEach((line, i) => {
        linesHtml += `
        <tr>
          <td>${i+1}</td>
          <td>${line.type}</td>
          <td>${line.name}</td>
          <td>${line.phoneNumber}</td>
          <td>${line.device.name}</td>
          <td>$${Number(line.device.price).toFixed(2)}</td>
          <td>$${Number(line.device.downpayment).toFixed(2)}</td>
          <td>$${Number(line.device.tradeInCredit).toFixed(2)}</td>
          <td>$${Number(line.device.dueToday).toFixed(2)}</td>
          <td>$${Number(line.device.dueMonthly).toFixed(2)}</td>
          <td>${line.plan.name}</td>
          <td>$${Number(line.plan.dueMonthly).toFixed(2)}</td>
          <td>${line.protection.name}</td>
          <td>$${Number(line.protection.dueToday).toFixed(2)}</td>
          <td>$${Number(line.protection.dueMonthly).toFixed(2)}</td>
        </tr>
        `
      })

      linesHtml += `</table>`

      return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${quote.name} ${quote.carrier.title} ${quote.lines.length} Lines</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
      
        <body>
          <div class="wrapper">
            <h1>Member Quote Comparison</h1>
            <p>${quote.name}</p>
            
            <p>Carrier: ${quote.carrier.title}</p>
            
            <div class="due-wrapper">
              <p class="due">Due Today:
                <span>$${calcQuoteDueToday(quote).toFixed(2)}</span>
              </p>
              <p class="due">Due Monthly: 
                <span>$${calcQuoteDueMonthly(quote).toFixed(2)}</span>
              </p>
            </div>

            <div class="account-wrapper">
              <h2>Account</h2>
              <h2>Plan: ${quote.account.plan.name ? quote.account.plan.name : 'None'}</h2>
              <h2>Due Monthly: $${Number(quote.account.plan.dueMonthly).toFixed(2)}</h2>
              <h2>Protection: ${quote.account.protection.name ? quote.account.protection.name : 'None'}</h2>
              <h2>Due Monthly: $${Number(quote.account.protection.dueMonthly).toFixed(2)}</h2>
            </div>

            <div>
              <h2>Lines: ${quote.lines.length}</h2>
              ${linesHtml}
            </div>
          </div>
        </body>
          
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Roboto', sans-serif;
          }

          body {
            width: 100%;
            display: flex;
            flex-flow: column wrap;
            align-items: center;
          }

          .wrapper {
            width: 100%;
            display: flex;
            flex-flow: column wrap;
            align-items: flex-start;
          }

          .due-wrapper {
            width: 100%;
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            gap: 1rem;
          }

          .due {
            width: 100%;
            display: flex;
            flex-flow: column wrap;
            align-items: center;
          }

          table {
            border: 1px solid black;
            padding: 1rem;
            border-collapse: collapse;
          }

          th {
            border: 1px solid black;
          }

          td {
            border: 1px solid black;
            padding: 1rem;
          }

        </style>
      </html>
    `
// - lines
//   - name
//   - phone number
//   - plan
//     - name
//     - due monthly
//   - device
//     - name
//     - price
//     - downpayment
//     - trade in credit
//     - due today
//     - due monthly

    default:
      throw Error(`unkown document type: ${type}`);
  }
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
            const file = new Blob([generateQuoteDocument('text/html', quote)], {
              type: "text/html"
            });
            element.href = URL.createObjectURL(file);
            element.download = `${todaysDate()}-${quote.name}-${quote.carrier.name}-${quote.lines.length}-lines.html`;
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