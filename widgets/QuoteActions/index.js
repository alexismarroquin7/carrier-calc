import { useDispatch } from "react-redux"
import { useToggle } from "../../hooks/useToggle";
import { quoteSlice } from "../../store/slices/quote-slice";

export const QuoteActions = () => {
  const dispatch = useDispatch();
  const {active,toggle} = useToggle();
  return (
    <div
      className="quote-actions-wrapper"
    >
      <button
        className="menu-button"
        onClick={(e) => {
          e.preventDefault();
          toggle();
        }}
      >
        |||
      </button>
      
      <div
        className={`quote-actions-buttons ${active ? '' : 'hidden'}`}
      >
        <button
          className="quote-action-button"
          onClick={(e) => {
            e.preventDefault();
            dispatch(quoteSlice.actions.duplicateSelectedQuote());
            toggle();
          }}    
        >Duplicate</button>
        <button
          className="quote-action-button quote-action-button--delete"
          onClick={(e) => {
            e.preventDefault();
            dispatch(quoteSlice.actions.deleteSelectedQuote());
            toggle();
          }}    
        >Delete</button>
      </div>

      <style jsx>{`
        .quote-actions-wrapper {
          width: 100%;
          display: flex;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
          padding: 2rem;
          gap: 1rem;
          position: relative;
        }

        .menu-button {
          border: 0;
          transform-origin: center;
          transform: rotate(90deg);
          font-size: 4rem;
          background-color: transparent;
        }
        
        .quote-actions-buttons {
          display: flex;
          flex-flow: column wrap;
          gap: 1rem;
          position: absolute;
          z-index: 999;
          top: 7rem;
        }
        
        .quote-actions-buttons.hidden {
          display: none;
        }

        .quote-action-button {
          border: 1px solid var(--google-blue); 
          border-radius: 2rem; 
          color: white; 
          background-color: var(--google-blue);
          padding: 1rem 2rem;
          box-shadow: 0 0 .2rem black;
        }

        .quote-action-button--delete {
          border-color: var(--google-red);
          background-color: var(--google-red);
        }
      `}</style>
    </div>
  )
}