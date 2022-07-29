import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quoteSlice } from "../../store/slices/quote-slice";

const initialActive = false;

export const CreateQuoteDropdown = () => {
  const [active, setActive] = useState(initialActive);

  const dispatch = useDispatch();
  
  return (
  <div
    className={`dropdown`}
  >
    <button
      className="create-quote-button" 
      onClick={(e) => {
        e.preventDefault();
        setActive(!active);
      }}
    >Create Quote {active ? '-' : '+'}</button>

    <div
      className={`dropdown-content ${active ? 'active' : ''}`}
    >
      <button
        className="carrier-option"
        onClick={(e) => {
          e.preventDefault();
          dispatch(quoteSlice.actions.create({carrier: 'vzw'}))
        }}
      >Verizon</button>
      <button
        className="carrier-option"
        onClick={(e) => {
          e.preventDefault();
          dispatch(quoteSlice.actions.create({carrier: 'att'}))
        }}
      >AT&T</button>
      <button
        className="carrier-option"
        onClick={(e) => {
          e.preventDefault();
          dispatch(quoteSlice.actions.create({carrier: 'tmo'}))
        }}
      >T-Mobile</button>
    </div>

    <style jsx>{`
      .dropdown {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        background-color: #eee;
        position: relative;
        border-radius: 1rem;
        transition: all .2s;
        opacity: 1;
      }
      
      .dropdown-content { 
        width: 100%;
        display: none;
        z-index: 1;
        flex-flow: column wrap;
        align-items: center;
        position: absolute;
        bottom: 4rem;
      }
      
      .active { 
        display: flex;
      }

      .carrier-option {
        width: 100%;
      }

      .create-quote-button {
        border: 1px solid var(--google-blue);
        background-color: var(--google-blue);
        color: var(--white);
        padding: 1rem;
        font-weight: bold;
        border-radius: 1rem;
      }

      .carrier-option {
        border: 1px solid var(--google-blue);
        background-color: var(--google-blue);
        color: var(--white);
        padding: 1rem;
        font-weight: bold;
      }
      
      .carrier-option:first-child {
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        background-color: var(--vzw-red);        
        border-color: var(--vzw-red);
      }
      
      .carrier-option:nth-child(2) {
        background-color: var(--att-blue);        
        border-color: var(--att-blue);
      }

      .carrier-option:last-child {
        background-color: var(--tmo-magenta);        
        border-color: var(--tmo-magenta);
      }
      
    `}</style>
  </div>
  )
}