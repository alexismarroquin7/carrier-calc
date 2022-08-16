import { useDispatch } from "react-redux"
import { useToggle } from "../../hooks/useToggle";
import { quoteSlice } from "../../store/slices/quote-slice";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const initialOptions = [
  {
    id: uuid(),
    name: 'Quote',
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
        className={`menu-button ${menuActive ? 'active' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          toggleMenuActive();
        }}
      >
        {menuActive ? (
          <CloseIcon
            fontSize="inherit"
          />
        ) : (
          <MenuIcon
            fontSize="inherit"
          />
        )}
        
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
              
              {option.open && (
                <>
                  {option.options.map(subOption => {
                    return (
                      <button
                        key={subOption.id}
                        className={`menu-option-button carrier-button carrier-button-${subOption.name}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleDispatch(subOption.action);
                        }}
                      >
                        {subOption.title}
                      </button>   
                    )
                  })}
                </>
              )}

            </div>
          })}
        </div>
      </div>

      <style jsx>{`

        .menu-button {
          border: 0;
          font-size: 3rem;
          background-color: transparent;
          display: flex;
          flex-flow: column wrap;
          justify-content: center;
          transition: all .2s;
          border-radius: 2rem;
          padding: .5rem;
          color: white;
        }

        .menu-button.active {
          transform: rotate(-90deg);
          color: var(--google-red);
        }
        
        .menu-content {
          width: 100%;
          position: fixed;
          left: 0%;
          top: 8rem;
          bottom: 0;
          z-index: 999;
          transition: all .2s;
          background-color: var(--grayish-blue);
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          padding: 2rem 0;
        }
        
        .menu-content.hidden {
          transform: translateX(-100%);
        }

        .menu-content-container {
          width: 90%;
          display: flex;
          flex-flow: column wrap;
          align-items: flex-start;
          border-radius: 1rem;
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
          border: .2rem solid var(--teal);
          background-color: var(--teal);
          color: var(--dark-blue);
          font-weight: bold;
        }

        .menu-option-button:first-child {
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
        }
        
        .menu-option-button:last-child {
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
        }
        
        .carrier-button {
          padding: 2rem 4rem;
          color: white;
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
        .carrier-button-other {
          background-color: transparent;
        }
      `}</style>
    </div>
  )
}