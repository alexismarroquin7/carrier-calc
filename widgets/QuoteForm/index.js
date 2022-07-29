import { useDispatch, useSelector } from "react-redux"
import { useToggle } from "../../hooks/useToggle";
import { quoteSlice } from "../../store/slices/quote-slice";
import { Line } from "../Line";

export const calcDueToday = (quote) => {
  let res = 0;

  quote.lines.map(line => {
    res += Number(line.device.dueToday);
    res += Number(line.protection.dueToday);
  })

  return res;
}

export const calcDueMonthly = (quote) => {
  let res = 0;
  res += Number(quote.account.plan.dueMonthly);
  res += Number(quote.account.protection.dueMonthly);
  quote.lines.map(line => {
    res += Number(line.device.dueMonthly);
    res += Number(line.plan.dueMonthly);
    res += Number(line.protection.dueMonthly);
  })
  return res;
}

export const QuoteForm = () => {
  const quote = useSelector(s => {
    const [q] = s.quote.list.filter(item => item.id === s.quote.selected.quote.id);
    return q;
  })
  
  const dispatch = useDispatch();
  
  const {
    active: addALineModalOpen,
    toggle: toggleAddALineModalOpen
  } = useToggle();
  
  const {
    active: expandAccount,
    toggle: toggleExpandAccount
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
          <h6>${calcDueToday(quote).toFixed(2)}</h6>
        </div>
        <div
          className="amount-due-item"
        >
          <h6>Due Monthly:</h6>
          <h6>${calcDueMonthly(quote).toFixed(2)}</h6>
        </div>
      </div>

      <div
        className="add-a-line-menu"
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleAddALineModalOpen();
          }}
          className="add-a-line-button"
        >Add A Line</button>
        <div
          className={`add-a-line-menu-content ${addALineModalOpen ? '' : 'hidden'}`}
        >
          <button
            onClick={(e) => {
              e.preventDefault()
              dispatch(quoteSlice.actions.addALine('smartphone'));
              toggleAddALineModalOpen();
            }}
            className="add-a-line-button-option"
          >Smartphone</button>
          <button
            onClick={(e) => {
              e.preventDefault()
              dispatch(quoteSlice.actions.addALine('watch'));
              toggleAddALineModalOpen();
            }}
            className="add-a-line-button-option"
          >Watch</button>
          <button
            onClick={(e) => {
              e.preventDefault()
              dispatch(quoteSlice.actions.addALine('tablet'));
              toggleAddALineModalOpen();
            }}
            className="add-a-line-button-option"
          >Tablet</button>
        </div>
      </div>
      
      <div
        className="account-section"
      >
        <h6>Account</h6>
        {expandAccount ? (
          <>
          <h6>Plan</h6>
          <label
            className="account-section-input"
          >Name:
            <input 
              type="text"
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
          >Name:
            <input 
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
          <div
            className="collapse-button"
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleExpandAccount();
              }}
            >Collapse</button>
          </div>
          </>
        ) : (
          <>
            <p>Plan: {quote.account.plan.name ? quote.account.plan.name : 'None'}</p>
            <p>Protection: {quote.account.protection.name ? quote.account.protection.name : 'None'}</p>
            <div
              className="expand-button"
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleExpandAccount();
                }}
              >Expand</button>
            </div>
          </>
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

        .collapse-button {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
        }
        
        .collapse-button button {
          padding: 1rem 2rem;
          border-radius: 2rem;
          border: 1px solid var(--google-blue);
          color: white;
          background-color: var(--google-blue);
        }

        .expand-button {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
        }
        
        .expand-button button {
          padding: 1rem 2rem;
          border-radius: 2rem;
          border: 1px solid var(--google-blue);
          color: white;
          background-color: var(--google-blue);
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

        .add-a-line-menu {
          position: relative;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
        }

        .add-a-line-menu-content {
          position: absolute;
          z-index: 999;
          display: flex;
          flex-flow: column wrap;
          top: 3rem;
        }

        .add-a-line-menu-content.hidden {
          display: none;
        }

        .add-a-line-button {
          border-radius: 2rem;
          padding: 1rem 2rem;
          border: 1px solid var(--google-blue);
          background-color: var(--google-blue);
          color: white;
        }
        
        .add-a-line-button-option:nth-child(1) {
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
        }
        
        .add-a-line-button-option:last-child {
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
        }

        .add-a-line-button-option {
          padding: 1rem 2rem;
          border: 1px solid #eee;
          border-top: 1px solid #ddd;
        }
      `}</style>
    </div>
  )
}