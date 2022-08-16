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
        flex-flow: row nowrap;
        align-items: flex-start;

        gap: 1rem;
        
        padding: 2rem;
        
        background-color: var(--teal);
        position: sticky;
        width: 100%;
        
        top: 8rem;
        
        left: 0;
        right: 0;
        
        box-shadow: 0 0 1rem black;
        overflow-x: scroll;
      }
      
      .quote-tab {
        border: .2rem solid var(--dark-blue);
        padding: 1rem;
        border-radius: 1rem;
        background-color: transparent;
        font-weight: bold;
        color: var(--dark-blue);
        transition: all .2s;
      }
      
      .selected {
        background-color: var(--dark-blue);
        color: var(--teal);
      }

    `}</style>
  </div>
  )
}