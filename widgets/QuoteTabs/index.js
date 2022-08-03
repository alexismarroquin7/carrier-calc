import { useDispatch, useSelector } from 'react-redux'
import { quoteSlice } from '../../store/slices/quote-slice';

export const QuoteTabs = () => {
  const quote = useSelector(s => s.quote);
  
  const dispatch = useDispatch();

  return (
  <div
    className="quote-tabs"
  >
    {quote.list.map(q => {
      return <button
        key={q.id}
        className={`quote-tab ${q.carrier.name} ${q.id === quote.selected.quote.id ? 'selected' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          if(quote.selected.quote.id === q.id) return;
          dispatch(quoteSlice.actions.selectQuoteById(q.id));
        }}
      >{q.name}</button>
    })}

    <style jsx>{`
      .quote-tabs {
        display: flex;
        width: 100%;
        flex-flow: row wrap;
        border: 1px solid #eee;
        padding: 2rem;
        gap: 1rem;
      }

      .quote-tab,
      .create-quote-tab {
        border: 1px solid #eee;
        padding: 1rem 2rem;
        border-radius: 2rem;
        background-color: white;
      }

      .create-quote-tab {
        border-color: var(--google-blue);
        color: white;
        background-color: var(--google-blue);
      }
      
      .selected {
        background-color: #eee;
      }

    `}</style>
  </div>
  )
}