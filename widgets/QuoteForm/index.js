import { useDispatch, useSelector } from "react-redux"
import { useToggle } from "../../hooks";
import { quoteSlice } from "../../store/slices/quote-slice";
import { AddALineMenu } from "../AddALineMenu";
import { Line } from "../Line";

export const calcQuoteDueToday = (quote) => {
  let res = 0;
  quote.lines.map(line => {
    res += Number(line.device.dueToday);
    res += Number(line.protection.dueToday);
  });
  return res;
}

export const calcQuoteDueMonthly = (quote) => {
  let res = 0;
  res += Number(quote.account.plan.dueMonthly);
  res += Number(quote.account.protection.dueMonthly);
  quote.lines.map(line => {
    res += Number(line.device.dueMonthly);
    res += Number(line.plan.dueMonthly);
    res += Number(line.protection.dueMonthly);
  });
  return res;
}

export const QuoteForm = () => {
  const quote = useSelector(s => {
    const [q] = s.quote.list.filter(item => item.id === s.quote.selected.quote.id);
    return q;
  });
  
  const dispatch = useDispatch();
  
  const {
    active,
    toggle
  } = useToggle();

  const handleChange = (e) => {
    const {name, value} = e.target;
    switch(name){
      case 'name':
        dispatch(quoteSlice.actions.updateSelectedQuote({
          ...quote,
          name: value
        }));
        break;
      case 'account.plan.name':
        dispatch(quoteSlice.actions.updateSelectedQuote({
          ...quote,
          account: {
            ...quote.account,
            plan: {
              ...quote.account.plan,
              name: value
            }
          }
        }));
        break;
      case 'account.plan.dueMonthly':
        dispatch(quoteSlice.actions.updateSelectedQuote({
          ...quote,
          account: {
            ...quote.account,
            plan: {
              ...quote.account.plan,
              dueMonthly: value
            }
          }
        }));
        break;
      case 'account.protection.name':
        dispatch(quoteSlice.actions.updateSelectedQuote({
          ...quote,
          account: {
            ...quote.account,
            protection: {
              ...quote.account.protection,
              name: value
            }
          }
        }));
        break;
      case 'account.protection.dueMonthly':
        dispatch(quoteSlice.actions.updateSelectedQuote({
          ...quote,
          account: {
            ...quote.account,
            protection: {
              ...quote.account.protection,
              dueMonthly: value
            }
          }
        }));
        break;
      default:
        throw Error(`unkown e.target.name: ${name}`);
    }
  }

  return (
    <div
      className="quote-form"
    >
      <input
        className="quote-name"
        name="name"
        onChange={handleChange}
        value={quote.name}
      />
      
      <h6>{quote.carrier.title}</h6>
      
      <div
        className="amount-due-section"
      >
        <div
          className="amount-due-item"
        >
          <h6>Due Today:</h6>
          <h6>${calcQuoteDueToday(quote).toFixed(2)}</h6>
        </div>
        <div
          className="amount-due-item"
        >
          <h6>Due Monthly:</h6>
          <h6>${calcQuoteDueMonthly(quote).toFixed(2)}</h6>
        </div>
      </div>

      <AddALineMenu/>
      
      <div
        className="account-section"
      >
        <h6 
          className="account-section-head"
        >Account 
          <button
            className={`account-button ${active ? "collapse-account-button" : "expand-account-button"}`}
            onClick={(e) => {
              e.preventDefault();
              toggle();
            }}
          >{'>'}</button>
        </h6>

        {active ? (
          <>
          <h6>Plan</h6>
          <label
            className="account-section-input"
          >
            <input 
              type="text"
              placeholder="Name"
              name="account.plan.name"
              onChange={handleChange}
              value={quote.account.plan.name}
            />
          </label>

          <label
            className="account-section-input"
          >Due Monthly:
            <input 
              type="number"
              name="account.plan.dueMonthly"
              onChange={handleChange}
              value={quote.account.plan.dueMonthly}
              min={0}
            />
          </label>
          
          <h6>Protection</h6>
          <label
            className="account-section-input"
          >
            <input 
              placeholder="Name"
              type="text"
              name="account.protection.name"
              onChange={handleChange}
              value={quote.account.protection.name}
            />
          </label>

          <label
            className="account-section-input"
          >Due Monthly:
            <input 
              type="number"
              name="account.protection.dueMonthly"
              onChange={handleChange}
              value={quote.account.protection.dueMonthly}
            />
          </label>
          </>
        ) : (
          <div className="account-section-collapsed">
            <p>{quote.account.plan.name ? quote.account.plan.name : 'No account plan'} <span className="account-section-collapsed-due-monthly-text">${Number(quote.account.plan.dueMonthly).toFixed(2)}/month</span></p>
            <p>{quote.account.protection.name ? quote.account.protection.name : 'No account protection'} <span className="account-section-collapsed-due-monthly-text">${Number(quote.account.protection.dueMonthly).toFixed(2)}/month</span></p>
          </div>
        )}
    
      </div>

      <div
        className="lines-section"
      >
        <h6>Lines: {quote.lines.length}</h6>
        {quote.lines.map((line, i) => {
          const l = {...line};
          return (
            <Line key={l.id} line={l} index={i}/>
          )
        })}
      </div>

      <style jsx>{`
        .quote-form {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          gap: 2rem;
          padding: 2rem 0;
        }

        .quote-name {
          width: 90%;
          padding: 1rem;
        }

        .amount-due-section {
          width: 90%;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
        }
        
        .amount-due-item {
          display: flex;
          flex-flow: column wrap;
          align-items: center;
        }

        .account-section {
          border: 1px solid #eee;
          border-radius: 2rem;
          width: 90%;
          padding: 2rem;
          display: flex;
          flex-flow: column wrap;
          gap: 2rem;
        }

        .account-section-head {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: space-between;
        }

        .account-section-collapsed { 
          display: flex;
          flex-flow: column wrap;
          gap: 2rem;
        }
        
        .account-section-collapsed p {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          align-items: flex-start;
        }

        .account-section-collapsed-due-monthly-text {
          border-radius: 1rem;
          padding: .5rem;
          background-color: var(--google-green);
          color: white;
        }

        .account-section-input {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          gap: 1rem;
        }
        
        .account-section-input input {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          padding: 1rem;
        }

        .account-button {
          padding: 1rem;
          border-radius: 2rem;
          border: 1px solid var(--google-blue);
          color: white;
          background-color: var(--google-blue);
          transform-origin: center;
          transform: rotate(90deg);
        }

        .collapse-account-button {
          transform: rotate(270deg);
        }

        .lines-section {
          width: 90%;
          display: flex;
          flex-flow: column wrap;
          border: 1px solid #eee;
          border-radius: 2rem;
          padding: 2rem;
          gap: 2rem;
        }
        
      `}</style>
    </div>
  )
}