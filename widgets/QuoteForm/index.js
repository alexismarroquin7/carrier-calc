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
            placeholder="Other"
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

      <AccountSection/>

      <LinesSection/>

      <style jsx>{`
        .quote-form {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          gap: 2rem;
          padding: 2rem 0;
        }

        .quote-name-label {
          display: flex;
          flex-flow: column wrap;
          gap: .5rem;
          width: 90%;
        }

        .quote-name {
          width: 100%;
          padding: 1rem;
        }

        .select-carrier {
          width: 90%;
          display: flex;
          flex-flow: column wrap;
          gap: .5rem;
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
        }

        .select-carrier-input {
          padding: 1rem;
          margin-top: .5rem;
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
        
      `}</style>
    </div>
  )
}