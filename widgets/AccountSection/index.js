import { useSelector, useDispatch } from "react-redux";
import { useToggle } from "../../hooks";
import { KeyboardArrowRight, KeyboardArrowDown } from '@mui/icons-material';
import { quoteSlice } from "../../store/slices/quote-slice";
import { AccountSectionCollapsed } from "./AccountSectionCollapsed";

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
    <div className="account-section-head">
      <h5>Account</h5>
      
      {active ? (
        <div className="account-button">
          <KeyboardArrowDown
            fontSize="inherit"
            onClick={(e) => {
              e.preventDefault();
              toggle();
            }}
          />
        </div>
      ) : (
        <div className="account-button">
          <KeyboardArrowRight
            fontSize="inherit"
            onClick={(e) => {
              e.preventDefault();
              toggle();
            }}
          /> 
        </div>
      )}
    </div>

    {active ? (
      <>
      <h6>Plan</h6>
      <label
        className="account-section-text-input"
      >Name:
        <input 
          type="text"
          name="account.plan.name"
          onChange={handleChange}
          value={quote.account.plan.name}
        />
      </label>

      <label
        className="account-section-number-input"
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
        className="account-section-text-input"
      >Name:
        <input 
          type="text"
          name="account.protection.name"
          onChange={handleChange}
          value={quote.account.protection.name}
        />
      </label>

      <label
        className="account-section-number-input"
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
      <AccountSectionCollapsed/>
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

      .account-button {
        color: var(--google-blue);
        font-size: 4rem;
        display: flex;
        flex-flow: row wrap;
      }

      .account-section-text-input {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        gap: .5rem;
      }

      .account-section-number-input {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        gap: .5rem;
      }
      
      .account-section-text-input input,
      .account-section-number-input input {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        justify-content: flex-end;
        padding: 1rem;
        gap: .5rem;
      }

      .account-section-number-input input {
        width: 10rem;
      }
      
    `}</style>
  </div>
  )
}