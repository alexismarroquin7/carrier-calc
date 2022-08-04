import { useSelector, useDispatch } from "react-redux";
import { useToggle } from "../../hooks";

export const AccountSection = () => {
  const quote = useSelector(s => {
    const [q] = s.quote.list.filter(item => item.id === s.quote.selected.quote.id);
    return q;
  });
  const { active, toggle } = useToggle();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {name, value} = e.target;
    switch(name){
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
    <style jsx>{`
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
    `}</style>
  </div>
  )
}