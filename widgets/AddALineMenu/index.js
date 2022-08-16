import { useToggle } from "../../hooks";
import { useDispatch } from "react-redux";
import { quoteSlice } from "../../store/slices/quote-slice";
import CloseIcon from '@mui/icons-material/Close';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import TabletIcon from '@mui/icons-material/Tablet';
import WatchIcon from '@mui/icons-material/Watch';
import WifiIcon from '@mui/icons-material/Wifi';
import AddIcon from '@mui/icons-material/Add';
import { LineTypeOption } from "./LineTypeOption";
import { useState } from "react";

const lineTypes = [
  {
    title: 'Smartphone',
    type: 'smartphone',
    icon: () => <SmartphoneIcon fontSize="inherit"/>
  },
  {
    title: 'Tablet',
    type: 'tablet',
    icon: () => <TabletIcon fontSize="inherit"/>
  },
  {
    title: 'Watch',
    type: 'watch',
    icon: () => <WatchIcon fontSize="inherit"/>
  },
  {
    title: 'Hotspot',
    type: 'hotspot',
    icon: () => <WifiIcon fontSize="inherit"/>
  },
]

const initialValues = {
  smartphone: 0,
  tablet: 0,
  watch: 0,
  hotspot: 0
}

export const AddALineMenu = () => {

  const {
    active,
    toggle
  } = useToggle();

  const dispatch = useDispatch();

  const [values, setValues] = useState(initialValues);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: Number(value)
    });
  }

  return (
  <div
    className="add-a-line-menu"
  >
    <button
      onClick={(e) => {
        e.preventDefault();
        toggle();
      }}
      className="add-a-line-button"
    >
      Add a line
      <AddIcon fontSize="inherit"/>
    </button>
    
    <div
      className={`add-a-line-menu-content ${active ? '' : 'hidden'}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle();
      }}
    >
      <div
        className={`add-a-line-menu-wrapper`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className="close-icon">
          <p>Add a line</p>
          <CloseIcon 
            fontSize="inherit"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggle();
            }}
          />
        </div>
      
        {lineTypes.map(lineType => {
          return (
            <LineTypeOption 
              key={lineType.type}
              lineType={lineType}
              count={values[lineType.type]} 
              handleChange={handleChange}
              setValue={(amount) => {
                setValues({
                  ...values,
                  [lineType.type]: Number(amount)
                })
              }}
            />
          )
        })}
        
        <button 
        
          className="add-lines-button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            dispatch(quoteSlice.actions.addMultipleLinesToSelectedQuote(values));
            setValues(initialValues);
            toggle();
          }}  
        >Add</button>

      </div>
      
    </div>
    
    <style jsx>{`
      .add-a-line-menu {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        transition: all .2s;
      }

      .add-a-line-menu-content {
        position: absolute;
        z-index: 998;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }

      .add-a-line-menu-content.hidden {
        display: none;
      }

      .add-a-line-menu-wrapper {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-flow: column wrap;
        background-color: white;
        box-shadow: 0 -1rem 2rem black;
      }

      .add-a-line-button {
        border-radius: 1rem;
        padding: 1rem 2rem;
        border: .2rem solid var(--teal);
        background-color: var(--teal);
        color: var(--dark-blue);
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .close-icon {
        background-color: var(--dark-blue);
        color: var(--google-red);
        padding: 1rem;
        width: 100%;
        font-size: 3rem;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
      }

      .close-icon p {
        color: var(--teal);
        font-weight: bold;
      }

      .add-lines-button {
        padding: 2rem;
        background-color: var(--dark-blue);
        color: var(--teal);
        font-weight: bold;
        border: .2rem solid var(--dark-blue);
      }
    `}</style>
  </div>
  );
}