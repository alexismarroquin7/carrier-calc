import { useDispatch, useSelector } from "react-redux"
import { useToggle } from "../../hooks/useToggle";
import { quoteSlice } from "../../store/slices/quote-slice";
import { calcQuoteDueMonthly, calcQuoteDueToday } from "../QuoteForm";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { KeyboardArrowRight, KeyboardArrowDown } from '@mui/icons-material';

const initialOptions = [
  {
    id: uuid(),
    name: 'Create Quote',
    open: false,
    options: [
      {
        id: uuid(),
        name: 'Verizon',
        action: 'quote-create-vzw'
      },
      {
        id: uuid(),
        name: 'AT&T',
        action: 'quote-create-att'
      },
      {
        id: uuid(),
        name: 'T-Mobile',
        action: 'quote-create-tmo'
      },
      {
        id: uuid(),
        name: 'Other',
        action: 'quote-create-other'
      }
    ]
  },
  {
    id: uuid(),
    name: 'Selected Quote',
    open: false,
    options: [
      {
        id: uuid(),
        name: 'Duplicate',
        action: 'selected-quote-duplicate'
      },
      {
        id: uuid(),
        name: 'Export',
        action: 'selected-quote-export'
      },
      {
        id: uuid(),
        name: 'Delete',
        action: 'selected-quote-delete'
      }
    ]
  }
]

const todaysDate = (withColons = false) => {
  let today = '';

  const d = new Date();

  let month = d.getMonth() + 1;
  let date = d.getDate();
  let year = d.getFullYear();
  let hr = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();


  if(month<10){
    month = `0${month}`;
  }
  if(date<10){
    date = `0${date}`;
  }
  if(hr<10){
    hr = `0${hr}`;
  }
  if(min<10){
    min = `0${min}`;
  }
  if(sec<10){
    sec = `0${sec}`;
  }

  today = withColons 
  ? `${month}-${date}-${year}T${hr}:${min}:${sec}`
  : `${month}-${date}-${year}T${hr}_${min}_${sec}`;


  return today;
}

const generateQuoteDocument = (quote) => {
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
  });

  linesHtml += `</table>`;

  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${quote.name} ${quote.carrier.title} ${quote.lines.length} ${quote.lines.length === 1 ? 'Line' : 'Lines'}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
  
    <body>
      <div class="wrapper">
        <h1>Member Quote</h1>
        <h2>${quote.name ? quote.name : 'Untitled'} | ${quote.carrier.title} | ${quote.lines.length} ${quote.lines.length === 1 ? 'Line' : 'Lines'}</h2>
        <h3>${todaysDate(true)}</h3>
        
        <div class="due-wrapper">
          <h2 class="due">Due Today:
            <span>$${calcQuoteDueToday(quote).toFixed(2)}</span>
          </h2>
          <h2 class="due">Due Monthly: 
            <span>$${calcQuoteDueMonthly(quote).toFixed(2)}</span>
          </h2>
        </div>

        <table>
          <tr>
            <th colspan="4">Account</th>
          </tr>
          
          <tr>
            <th>Plan</th>
            <th>(Plan) Due Monthly</th>
            <th>Protection</th>
            <th>(Protection) Due Monthly</th>
          </tr>
            
          <tr>
            <td>${quote.account.plan.name ? quote.account.plan.name : 'None'}</td>
            <td>$${Number(quote.account.plan.dueMonthly).toFixed(2)}</td>
            <td>${quote.account.protection.name ? quote.account.protection.name : 'None'}</td>
            <td>$${Number(quote.account.protection.dueMonthly).toFixed(2)}</td>
          </tr>
          
        </table>

        <div class="lines">
          <th colspan="15">Lines: ${quote.lines.length}</th>
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
        padding: 1rem;
        background-color: #eee;
      }

      td {
        border: 1px solid black;
        padding: 1rem;
      }

    </style>
  </html>
`

  return html;

}

export const Menu = () => {
  const dispatch = useDispatch();
  
  const { active: menuActive, toggle: toggleMenuActive } = useToggle();
  
  const [options, setOptions] = useState(initialOptions);
  
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

  const handleDispatch = (action) => {
    switch(action){
      case 'quote-create-vzw':
        dispatch(quoteSlice.actions.create({ carrier: 'vzw' }));
        toggleMenuActive();
        break;
      case 'quote-create-att':
        dispatch(quoteSlice.actions.create({ carrier: 'att' }));
        toggleMenuActive();
        break;
      case 'quote-create-tmo':
        dispatch(quoteSlice.actions.create({ carrier: 'tmo' }));
        toggleMenuActive();
        break;
      case 'quote-create-other':
        dispatch(quoteSlice.actions.create({ carrier: 'other' }));
        toggleMenuActive();
        break;
      case 'selected-quote-duplicate':
        if(list.length === 0) return;
        dispatch(quoteSlice.actions.duplicateSelectedQuote());
        toggleMenuActive();
        break;
      case 'selected-quote-export':
        if(list.length === 0) return;
        const element = document.createElement("a");
        const file = new Blob([generateQuoteDocument(quote)], {
          type: "text/html"
        });
        element.href = URL.createObjectURL(file);
        element.download = `${todaysDate()}-${quote.name ? quote.name : 'Untitled'}-${quote.carrier.name ? quote.carrier.name : 'No Carrier Selected'}-${quote.lines.length}-lines.html`;
        document.body.appendChild(element);
        element.click();
        toggleMenuActive();
        break;
      case 'selected-quote-delete':
        if(list.length === 0) return;
        dispatch(quoteSlice.actions.deleteSelectedQuote());
        toggleMenuActive();
        break;
      default:
        throw Error(`unkown action: ${action}`);
    }
  }

  return (
    <div
      className="menu-wrapper"
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
        className={`menu-content ${menuActive ? '' : 'hidden'}`}
      >
        <div
          className={`menu-content-container`}
        >
          {options.map(option => {
            return <div
              key={option.id}
              className="menu-option"
            >
              <button
                className="menu-option-button"
                onClick={(e) => {
                  e.preventDefault();
                  setOptions(options.map(opt => {
                    if(opt.id === option.id){
                      opt.open = !opt.open;
                    }
                    return opt;
                  }))
                }}
              >
                <span>
                  {option.name}
                </span>
                {option.open ? <KeyboardArrowDown fontSize="inherit"/> : <KeyboardArrowRight fontSize="inherit"/>}
              </button>
              {option.open && <div>
                {option.options.map(subOption => {
                  return <div
                    key={subOption.id}
                  >
                    <button
                      className="menu-sub-option-button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDispatch(subOption.action);
                      }}
                    >
                      {subOption.name}
                    </button>
                  </div>    
                })}
              </div>}
            </div>
          })}
        </div>
      </div>

      <style jsx>{`
        .menu-wrapper {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          justify-content: flex-start;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
          padding: 2rem;
          position: relative;
        }

        .menu-button {
          border: 0;
          transform-origin: center;
          transform: rotate(90deg);
          font-size: 4rem;
          background-color: transparent;
        }
        
        .menu-content {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          position: absolute;
          z-index: 999;
          left: 0;
          right: 0;
          top: 8.5rem;
          box-shadow: 0 10px 15px black;
        }
        
        .menu-content.hidden {
          display: none;
        }

        .menu-content-container {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: flex-start;
          bottom: 0;
          position: relative;
        }

        .menu-option {
          width: 100%;
        }
        
        .menu-option-button {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          padding: 2rem;
          align-items: center;
          border: 0;
          font-size: 4rem;
          border-top: 1px solid black;
        }
        
        .menu-sub-option-button {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          padding: 2rem;
          padding-left: 4rem;
          border: 0;
          background-color: white;
          border-top: 1px solid black;
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