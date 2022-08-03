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
          <td>${line.plan.name ? line.plan.name : 'None'}</td>
          <td>$${Number(line.plan.dueMonthly).toFixed(2)}</td>
          <td>${line.protection.name ? line.protection.name : 'None'}</td>
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
          <title>${quote.name} ${quote.carrier.title} ${quote.lines.length} ${quote.lines.length === 1 ? 'Line' : 'Lines'}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
      
        <body>
          <div class="wrapper">
            <h1>Member Quote Comparison</h1>
            <h2>${quote.name} | ${quote.carrier.title} | ${quote.lines.length} ${quote.lines.length === 1 ? 'Line' : 'Lines'}</h2>
            <h3>${todaysDate()}</h3>
            
            <div class="due-wrapper">
              <h2 class="due">Due Today:
                <span>$${calcQuoteDueToday(quote).toFixed(2)}</span>
              </h2>
              <h2 class="due">Due Monthly: 
                <span>$${calcQuoteDueMonthly(quote).toFixed(2)}</span>
              </h2>
            </div>

            <div class="account-wrapper">
              <h3>Account</h3>
              <h4 class="account-feature">Plan: 
                ${quote.account.plan.name ? quote.account.plan.name : 'None'}
                <span>Due Monthly: $${Number(quote.account.plan.dueMonthly).toFixed(2)}</span>
              </h4>

              <h4 class="account-feature">Protection: 
                ${quote.account.protection.name ? quote.account.protection.name : 'None'}
                <span>Due Monthly: $${Number(quote.account.protection.dueMonthly).toFixed(2)}</span>
              </h4>
            </div>

            <div class="lines">
              <h3>Lines: ${quote.lines.length}</h3>
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
            display: flex;
            flex-flow: column wrap;
            align-items: center;
          }

          .account-wrapper {
            display: flex;
            flex-flow: column wrap;
          }

          .account-feature {
            border: 1px solid black;
            padding: 1rem;
            display: flex;
            flex-flow: column wrap;
            align-items: flex-start;
            gap: 1rem;
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
    default:
      throw Error(`unkown document type: ${type}`);
  }
}

export const QuoteActions = () => {
  const dispatch = useDispatch();
  const { active: menuActive, toggle: toggleMenuActive } = useToggle();
  const { active: deleteModeActive, toggle: toggleDeleteModeActive } = useToggle();
  const { active: carrierModalOpen, toggle: toggleCarrierModalOpen } = useToggle();

  const {
    quote,
    list
  } = useSelector(s => {
    const [q] = s.quote.list.filter(item => item.id === s.quote.selected.quote.id);
    return {
      quote: q,
      list: s.quote.list
    };
  });

  return (
    <div
      className="quote-actions-wrapper"
    >
      <button
        className="menu-button"
        onClick={(e) => {
          e.preventDefault();
          toggleMenuActive();
        }}
      >
        |||
      </button>
      
      <div
        className={`quote-actions-buttons ${menuActive ? '' : 'hidden'}`}
      >
        <button
          className="quote-action-button"
          onClick={(e) => {
            e.preventDefault();
            toggleCarrierModalOpen();
          }}
        >Create Quote</button>
        <div
          className={`carrier-menu ${carrierModalOpen ? '' : 'hidden'}`}
          onClick={(e) => {
            e.preventDefault();
            toggleCarrierModalOpen();
          }}
        >
          <div
            className="carrier-menu-content"
          >
            <h6>Choose a carrier</h6>
            <button
              className="carrier-button carrier-button-vzw"
              onClick={(e) => {
                e.preventDefault();
                dispatch(quoteSlice.actions.create({ carrier: 'vzw' }));
                toggleCarrierModalOpen();
                toggleMenuActive();
              }}
            >{'Verizon'}</button>
            <button
              className="carrier-button carrier-button-att"
              onClick={(e) => {
                e.preventDefault();
                dispatch(quoteSlice.actions.create({ carrier: 'att' }));
                toggleCarrierModalOpen();
                toggleMenuActive();
              }}
            >{'AT&T'}</button>
            <button
              className="carrier-button carrier-button-tmo"
              onClick={(e) => {
                e.preventDefault();
                dispatch(quoteSlice.actions.create({ carrier: 'tmo' }));
                toggleCarrierModalOpen();
                toggleMenuActive();
              }}
            >{'T-Mobile'}</button>
            <button
              className="carrier-button carrier-button-cancel"
              onClick={(e) => {
                e.preventDefault();
                toggleCarrierModalOpen();
              }}
            >{'Cancel'}</button>
          </div>
        </div>

        <button
          className="quote-action-button"
          onClick={(e) => {
            e.preventDefault();
            dispatch(quoteSlice.actions.duplicateSelectedQuote());
            toggle();
          }}    
          disabled={list.length === 0}
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
          disabled={list.length === 0} 
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
            disabled={list.length === 0}
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

        .carrier-menu {
          width: 100%;
          position: absolute;
          z-index: 1000;
          top: 0;
          bottom: 0;
          left: 0;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          justify-content: center;
        }

        .carrier-menu.hidden {
          display: none;
        }
        
        .carrier-menu-content {
          position: relative;
          display: flex;
          flex-flow: column wrap;
          justify-content: center;
          border: 1px solid #eee;
          padding: 2rem;
          width: 90vw;
          gap: 2rem;
          border-radius: 2rem;
          box-shadow: 0 0 5px black;
          background-color: white;
        }

        .carrier-button {
          padding: 2rem 0;
          color: white;
          border: 1px solid #eee;
          border-radius: 2rem;
          font-weight: bold;
        }
        
        .carrier-button-vzw {
          background-color: var(--vzw);
          border-color: var(--vzw);
        }
        .carrier-button-att {
          background-color: var(--att);
          border-color: var(--att);
        }
        .carrier-button-tmo {
          background-color: var(--tmo);
          border-color: var(--tmo);
        }
        .carrier-button-cancel {
          border-color: var(--google-red);
          background-color: var(--white);
          color: var(--google-red);
        }
      `}</style>
    </div>
  )
}