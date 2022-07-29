import { useDispatch, useSelector } from 'react-redux'
import { useToggle } from '../../hooks/useToggle';
import { quoteSlice } from '../../store/slices/quote-slice';

export const QuoteTabs = () => {
  const quote = useSelector(s => s.quote);
  const {
    active,
    toggle
  } = useToggle();
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

    <button
      className="create-quote-tab"
      onClick={(e) => {
        e.preventDefault();
        toggle();
      }}
    >+ Create Quote</button>

    <div
      className={`carrier-menu ${active ? '' : 'hidden'}`}
      onClick={(e) => {
        e.preventDefault();
        toggle();
      }}
    >
      <div
        className="carrier-menu-content"
      >
        <h6>Choose a carrier</h6>
        <button
          className="carrier-button carrier-button-vzw"
          onClick={(e) => {
            e.preventDefault();
            dispatch(quoteSlice.actions.create({ carrier: 'vzw' }));
          }}
        >{'Verizon'}</button>
        <button
          className="carrier-button carrier-button-att"
          onClick={(e) => {
            e.preventDefault();
            dispatch(quoteSlice.actions.create({ carrier: 'att' }));
          }}
        >{'AT&T'}</button>
        <button
          className="carrier-button carrier-button-tmo"
          onClick={(e) => {
            e.preventDefault();
            dispatch(quoteSlice.actions.create({ carrier: 'tmo' }));
          }}
        >{'T-Mobile'}</button>
      </div>
    </div>

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
      
      .carrier-menu {
        width: 100%;
        position: absolute;
        z-index: 1000;
        top: 0;
        bottom: 0;
        left: 0;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
      }

      .carrier-menu.hidden {
        display: none;
      }
      
      .carrier-menu-content {
        position: relative;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        border: 1px solid #eee;
        padding: 2rem;
        width: 90%;
        gap: 2rem;
        border-radius: 2rem;
        box-shadow: 0 0 5px black;
        background-color: white;
      }

      .carrier-button {
        padding: 2rem 0;
        color: white;
        border: 0;
        border-radius: 2rem;
        font-weight: bold;
      }
      
      .carrier-button-vzw {
        background-color: var(--vzw);
      }
      .carrier-button-att {
        background-color: var(--att);
      }
      .carrier-button-tmo {
        background-color: var(--tmo);
      }

    `}</style>
  </div>
  )
}