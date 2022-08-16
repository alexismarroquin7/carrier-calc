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
        border-bottom: .5rem solid var(--teal);
        padding: 2rem;
        gap: 1rem;
        background-color: var(--greyish-blue);
      }
      
      .quote-tab {
        border: .2rem solid var(--teal);
        padding: 1rem;
        border-radius: 1rem;
        background-color: transparent;
        font-weight: bold;
        color: var(--teal);
        transition: all .2s;
      }
      
      .selected {
        background-color: var(--teal);
        color: var(--dark-blue);
      }

    `}</style>
  </div>
  )
}