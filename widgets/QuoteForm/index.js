import { useDispatch, useSelector } from "react-redux"
import { AccountSection } from "../AccountSection";
import { AddALineMenu } from "../AddALineMenu";
import { LinesSection } from "../LinesSection";
import { quoteSlice, carriers } from "../../store/slices/quote-slice";
import { QuoteMenu } from "./QuoteMenu";

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

  const handleChange = (e) => {
    const {name, value} = e.target;
    switch(name){
      case 'name':
        dispatch(quoteSlice.actions.updateSelectedQuote({
          ...quote,
          name: value
        }));
        break;
      case 'carrier.name':
        dispatch(quoteSlice.actions.updateSelectedQuote({
          ...quote,
          carrier: carriers[value]
        }));
        break;
      case 'carrier.title':
        dispatch(quoteSlice.actions.updateSelectedQuote({
          ...quote,
          carrier: {
            ...quote.carrier,
            title: value
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
      <QuoteMenu/>

      <label
        className="quote-name-label"
      >Quote:
        <input
          className="quote-name"
          name="name"
          onChange={handleChange}
          value={quote.name}
        />
      </label>

      <div className="select-carrier">
        <label className="select-carrier-label">Carrier:
          <select
            className="select-carrier-select"
            name="carrier.name"
            value={quote.carrier.name}
            onChange={handleChange}
          >
            <option
              className="select-carrier-option"
              value={'vzw'}
            >Verizon</option>
            <option
              className="select-carrier-option"
              value={'att'}
            >AT&T</option>
            <option
              className="select-carrier-option"
              value={'tmo'}
            >T-Mobile</option>
            <option
              className="select-carrier-option"
              value={'other'}
            >Other</option>
          </select>
        </label>
      
        {quote.carrier.name === 'other' && (
          <input
            className="select-carrier-input"
            value={quote.carrier.title}
            name="carrier.title"
            onChange={handleChange}
          />
        )}
      
      </div>
      
      <div
        className="amount-due-section"
      >
        <div
          className="amount-due-item today"
        >          
          <h6>${calcQuoteDueToday(quote).toFixed(2)}</h6>
          <h6>today</h6>
        </div>
        <div
          className="amount-due-item"
        >
          <h6>${calcQuoteDueMonthly(quote).toFixed(2)}</h6>
          <h6>/month</h6>
        </div>
      </div>
      
      <AccountSection/>

      <LinesSection/>

      <style jsx>{`
        .quote-form {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          /* gap: 2rem; */
          padding: 2rem 0;
          color: var(--white);
        }

        .quote-name-label {
          padding: 2rem 0;
          display: flex;
          flex-flow: column wrap;
          gap: .5rem;
          width: 90%;
        }

        .quote-name {
          width: 100%;
          padding: 1rem;
          color: var(--teal);
          border: .2rem solid var(--dark-blue);
          background-color: var(--dark-blue);
          border-radius: 1rem;
        }

        .select-carrier {
          width: 90%;
          display: flex;
          flex-flow: column wrap;
          gap: .5rem;
          padding: 2rem 0;
        }

        .select-carrier-label {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          gap: .5rem;
        }

        .select-carrier-select {
          padding: 1rem;
          width: 100%;
          
          border-radius: 1rem;
          
          color: var(--teal);
          border: .2rem solid var(--dark-blue);
          background-color: var(--dark-blue);
        }

        .select-carrier-input {
          padding: 1rem;
          background-color: var(--dark-blue);
          border: .2rem solid var(--dark-blue);
          color: var(--teal);
          border-radius: 1rem;
        }

        .amount-due-section {
          width: 90%;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          color: var(--dark-blue);
          background-color: var(--teal);
          border-radius: 1rem;
        }
        
        .amount-due-item {
          padding: 2rem 0;
          width: 50%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          gap: 1rem;
        }
        
        .amount-due-item.today {
          color: var(--teal);
          background-color: var(--dark-blue);
          border-top-left-radius: 1rem;
          border-bottom-left-radius: 1rem;
        }
        
      `}</style>
    </div>
  )
}