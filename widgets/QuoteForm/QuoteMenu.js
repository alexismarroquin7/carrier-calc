import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useToggle } from '../../hooks';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { quoteSlice } from '../../store/slices/quote-slice';
import { calcQuoteDueToday, calcQuoteDueMonthly } from '.';

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
  let linesHtml = `
  <tr>
    <th>Line</th>
    <th>Type</th>
    <th>Name</th>
    <th>Phone Number</th>

    <th>Device</th>
    <th>Price</th>
    <th>Downpayment</th>
    <th>Trade In Credit</th>
    <th>Device (Due Today)</th>
    <th>Device (Due Monthly)</th>

    <th>Plan</th>
    <th>Plan (Due Monthly)</th>
    <th>Protection</th>
    <th>Protection (Due Today)</th>
    <th>Protection (Due Monthly)</th>
    
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
      <td>
        ${line.plan.name === '' ? 'None' : ''}
        ${line.plan.name === 'other' ?  `${line.plan.title === '' ? 'None' : line.plan.title}` : ''}
        ${line.plan.name ? line.plan.name : ''}
      </td>
      <td>$${Number(line.plan.dueMonthly).toFixed(2)}</td>
      <td>
        ${line.protection.name === '' ? 'None' : ''}
        ${line.protection.name === 'other' ?  `${line.protection.title === '' ? 'None' : line.protection.title}` : ''}
        ${line.protection.name ? line.protection.name : ''}
      </td>
      <td>$${Number(line.protection.dueToday).toFixed(2)}</td>
      <td>$${Number(line.protection.dueMonthly).toFixed(2)}</td>
    </tr>
    `
  });

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
            <th>Plan (Due Monthly)</th>
            <th>Protection</th>
            <th>Protection (Due Monthly)</th>
          </tr>
            
          <tr>
            <td>
              ${quote.account.plan.name === '' ? 'None' : ''}
              ${quote.account.plan.name === 'other' ?  `${quote.account.plan.title === '' ? 'None' : quote.account.plan.title}` : ''}
              ${quote.account.plan.name ? quote.account.plan.name : ''}
            </td>
            <td>$${Number(quote.account.plan.dueMonthly).toFixed(2)}</td>
            <td>
              ${quote.account.protection.name === '' ? 'None' : ''}
              ${quote.account.protection.name === 'other' ?  `${quote.account.protection.title === '' ? 'None' : quote.account.protection.title}` : ''}
              ${quote.account.protection.name ? quote.account.protection.name : ''}
            </td>
            <td>$${Number(quote.account.protection.dueMonthly).toFixed(2)}</td>
          </tr>
          
        </table>

        <table class="lines">
          <tr>
            <th colspan="15">Lines: ${quote.lines.length}</th>
          </tr>
          ${linesHtml}
          <tr>
            <th
              colspan="5"
            >
              Totals:
            </th>
            <th>
              $${quote.lines.reduce((acc, curr) => {
                console.log(acc)
                acc += Number(curr.device.price);
                return acc;
              }, 0).toFixed(2)}
            </th>
            <th>
              $${quote.lines.reduce((acc, curr) => {
                acc += Number(curr.device.downpayment);
                return acc;
              }, 0).toFixed(2)}
            </th>
            <th>
              $${quote.lines.reduce((acc, curr) => {
                acc += Number(curr.device.tradeInCredit);
                return acc;
              }, 0).toFixed(2)}
            </th>
            <th>
              $${quote.lines.reduce((acc, curr) => {
                acc += Number(curr.device.dueToday);
                return acc;
              }, 0).toFixed(2)}
            </th>
            <th>
              $${quote.lines.reduce((acc, curr) => {
                acc += Number(curr.device.dueMonthly);
                return acc;
              }, 0).toFixed(2)}
            </th>
            <th></th>
            <th>
              $${quote.lines.reduce((acc, curr) => {
                acc += Number(curr.plan.dueMonthly);
                return acc;
              }, 0).toFixed(2)}
            </th>
            <th></th>
            <th>
              $${quote.lines.reduce((acc, curr) => {
                acc += Number(curr.protection.dueToday);
                return acc;
              }, 0).toFixed(2)}
            </th>
            <th>
              $${quote.lines.reduce((acc, curr) => {
                acc += Number(curr.protection.dueMonthly);
                return acc;
              }, 0).toFixed(2)}
            </th>

          </tr>
        </table>
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
        gap: 1rem;
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


export const QuoteMenu = () => {
  const {active, toggle} = useToggle();
  const dispatch = useDispatch();
  const {
    quote
  } = useSelector(s => {
    const [q] = s.quote.list.filter(item => item.id === s.quote.selected.quote.id);
    return {
      quote: q
    };
  });

  const handleDispatch = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { name } = e.target;

    switch(name){
      case 'duplicate':
        dispatch(quoteSlice.actions.duplicateSelectedQuote());
        break;
      case 'export':
        const element = document.createElement("a");
        const file = new Blob([generateQuoteDocument(quote)], {
          type: "text/html"
        });
        element.href = URL.createObjectURL(file);
        element.download = `${todaysDate()}-${quote.name ? quote.name : 'Untitled'}-${quote.carrier.title ? quote.carrier.title : 'No Carrier Selected'}-${quote.lines.length}-lines.html`;
        document.body.appendChild(element);
        element.click();
        break;
      case 'delete':
        dispatch(quoteSlice.actions.deleteSelectedQuote())
        break;
      default:
        throw Error(`unkown name: ${name}`);
    }

  };

  return (
  <div
    className="quote-menu"
  >
    
    <div
      className="more-icon"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle();
      }}
    >
      <MoreVertIcon
        fontSize="inherit"
      />
    </div>

    <div
      className={`menu ${active ? '' : 'menu-hidden'}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if(active){
          toggle();
        }
      }}
    >
      <div
        className="menu-content"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div
          className="menu-content-wrapper"
        >

          <div
            className='close-icon'
          >
            <h6>Quote actions</h6>
            <CloseIcon
              fontSize='inherit'
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggle();
              }}
            />
          </div>

          <div
            className="selected-quote-action-list"
          >
            <button
              name="duplicate"
              className='selected-quote-action-button'
              onClick={handleDispatch}
            >
              <ContentCopyIcon
                fontSize='inherit'
              />
              <p>Duplicate</p>
            </button>
            
            <button
              name="export"
              className='selected-quote-action-button'
              onClick={handleDispatch}
            >
              <DownloadIcon
                fontSize='inherit'
              />
              <p>Export</p>  
            </button>

            <button
              name="delete"
              className='selected-quote-action-button'
              onClick={handleDispatch}
            >
              <DeleteForeverIcon
                fontSize='inherit'
              />
              <p>Delete</p>
            </button>
          </div>

        </div>
      </div>
    </div>

    <style jsx>{`
      .quote-menu {
        width: 90%;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-end;
      }

      .more-icon {
        font-size: 3rem;
        color: var(--teal);
      }

      .menu {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
      
      .menu-content {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        width: 100%;
        position: fixed;
        bottom: 0;
        padding: 2rem;
        box-shadow: 0 0 1rem black;
        background-color: var(--white);
      }

      .menu-content-wrapper {
        height: 100%;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        gap: 2rem;
      }
      
      .menu-hidden {
        display: none;
      }

      .selected-quote-action-list {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        gap: 2rem;
      }

      .close-icon {
        font-size: 3rem;
        color: var(--google-red);
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
      }

      .close-icon h6 {
        color: black;
      }

      .selected-quote-action-button {
        padding: 2rem 1rem;
        font-size: 3rem;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        gap: 1rem;
        border: .2rem solid var(--google-blue);
        background-color: var(--white);
        color: var(--google-blue);
        border-radius: 1rem;
      }

      .selected-quote-action-button:last-child {
        color: var(--google-red);
        background-color: var(--white);
        border-color: var(--google-red);
      }

    `}</style>
  </div>
  )
}