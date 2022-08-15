import { useDispatch } from "react-redux"
import { useToggle } from "../../hooks/useToggle";
import { quoteSlice } from "../../store/slices/quote-slice";
import { calcQuoteDueMonthly, calcQuoteDueToday } from "../QuoteForm";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const initialOptions = [
  {
    id: uuid(),
    name: 'Create Quote',
    open: false,
    options: [
      {
        id: uuid(),
        title: 'Verizon',
        name: 'vzw',
        action: 'quote-create-vzw',

      },
      {
        id: uuid(),
        title: 'AT&T',
        name: 'att',
        action: 'quote-create-att'
      },
      {
        id: uuid(),
        title: 'T-Mobile',
        name: 'tmo',
        action: 'quote-create-tmo'
      },
      {
        id: uuid(),
        title: 'Other',
        name: 'other',
        action: 'quote-create-other'
      }
    ]
  }
]

export const Menu = () => {
  const dispatch = useDispatch();
  
  const { active: menuActive, toggle: toggleMenuActive } = useToggle();
  
  const [options, setOptions] = useState(initialOptions);

  const handleDispatch = (action) => {
    switch(action){
      case 'quote-create-vzw':
        dispatch(quoteSlice.actions.create({ carrier: 'vzw' }));
        toggleMenuActive();
        break;
      case 'quote-create-att':
        dispatch(quoteSlice.actions.create({ carrier: 'att' }));
        toggleMenuActive();
        break;
      case 'quote-create-tmo':
        dispatch(quoteSlice.actions.create({ carrier: 'tmo' }));
        toggleMenuActive();
        break;
      case 'quote-create-other':
        dispatch(quoteSlice.actions.create({ carrier: 'other' }));
        toggleMenuActive();
        break;
      default:
        throw Error(`unkown action: ${action}`);
    }
  }

  return (
    <div
      className="menu-wrapper"
    >
      <button
        className="menu-button"
        onClick={(e) => {
          e.preventDefault();
          toggleMenuActive();
        }}
      >
        |||
      </button>
      
      <div
        className={`menu-content ${menuActive ? '' : 'hidden'}`}
      >
        <div
          className={`menu-content-container`}
        >
          {options.map(option => {
            return <div
              key={option.id}
              className="menu-option"
            >
              <button
                className="menu-option-button"
                onClick={(e) => {
                  e.preventDefault();
                  setOptions(options.map(opt => {
                    if(opt.id === option.id){
                      opt.open = !opt.open;
                    }
                    return opt;
                  }))
                }}
              >
                <span>
                  {option.name}
                </span>
                {option.open ? <RemoveIcon fontSize="inherit"/> : <AddIcon fontSize="inherit"/>}
              </button>
              {option.open && <div>
                {option.options.map(subOption => {
                  return <div
                    key={subOption.id}
                  >
                    <button
                      className={`menu-sub-option-button carrier-button carrier-button-${subOption.name}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleDispatch(subOption.action);
                      }}
                    >
                      {subOption.title}
                    </button>
                  </div>    
                })}
              </div>}
            </div>
          })}
        </div>
      </div>

      <style jsx>{`

        .menu-button {
          border: 0;
          transform-origin: center;
          transform: rotate(90deg);
          font-size: 4rem;
          background-color: transparent;
        }
        
        .menu-content.hidden {
          display: none;
        }

        .menu-content-container {
          display: flex;
          flex-flow: column wrap;
          align-items: flex-start;
          position: fixed;
          top: 11rem;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--white);
        }

        .menu-option {
          width: 100%;
        }
        
        .menu-option-button {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          padding: 2rem;
          gap: 1rem;
          align-items: center;
          border: 0;
          font-size: 4rem;
        }
        
        .menu-sub-option-button {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          padding: 2rem;
          padding-left: 4rem;
          border: 0;
          background-color: white;
        }

        .carrier-button {
          border: 1px solid #eee;
          font-weight: bold;
        }
        
        .carrier-button-vzw {
          color: var(--vzw);
        }
        .carrier-button-att {
          color: var(--att);
        }
        .carrier-button-tmo {
          color: var(--tmo);
        }
        .carrier-button-other {
          color: var(--black);
        }
      `}</style>
    </div>
  )
}