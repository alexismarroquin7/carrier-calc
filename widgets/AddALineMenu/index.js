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
import { useEffect, useState } from "react";

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

  const handleToggle = () => {
    toggle();
    if(active){
      document.querySelector('body').style.overflow = 'auto';
    } else {
      document.querySelector('body').style.overflow = 'hidden';
    }
  }

  return (
  <div
    className="add-a-line-menu"
  >
    <button
      onClick={(e) => {
        e.preventDefault();
        handleToggle();
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
        handleToggle();
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
              setValues(initialValues);
              handleToggle();
            }}
            className="close-icon-svg"
          />
        </div>
        
        <div
          className="line-types-group"
        >
          {lineTypes.map(lineType => {
            return (
              <LineTypeOption 
                key={lineType.type}
                lineType={lineType}
                count={values[lineType.type]} 
                setValue={(amount) => {
                  setValues({
                    ...values,
                    [lineType.type]: Number(amount)
                  })
                }}
              />
            )
          })}
        </div>

        <div
          className="control-buttons-container"
        >

          <button 
            className="add-lines-button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              dispatch(quoteSlice.actions.addMultipleLinesToSelectedQuote(values));
              setValues(initialValues);
              handleToggle();
            }}  
          >Add</button>
          
          <button
            className="cancel-add-lines-button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setValues(initialValues);
              handleToggle();
            }}
          >
            Cancel
          </button>
          
        </div>

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
        position: fixed;
        z-index: 1009;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,.75);
      }

      .add-a-line-menu-content.hidden {
        display: none;
      }

      .add-a-line-menu-wrapper {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        top: 10%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        background-color: var(--grayish-blue);
        overflow-y: scroll;
      }

      .add-a-line-button {
        border-radius: 1rem;
        padding: 1rem;
        border: .2rem solid var(--teal);
        background-color: var(--teal);
        color: var(--dark-blue);
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .close-icon {
        position: sticky;
        top: 0;
        background-color: var(--dark-blue);
        color: var(--google-red);
        padding: 2rem;
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

      .line-types-group {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        gap: 2rem;
      }

      .control-buttons-container {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        gap: 1rem;
        padding: 2rem 0;;
      }

      .cancel-add-lines-button {
        width: 90%;
        padding: 1rem;
        border-radius: 1rem;
        background-color: transparent;
        color: var(--teal);
        font-weight: bold;
        border: .2rem solid var(--teal);
      }
      
      .add-lines-button {
        width: 90%;
        padding: 1rem;
        border-radius: 1rem;
        background-color: var(--teal);
        color: var(--dark-blue);
        font-weight: bold;
        border: .2rem solid var(--teal);
      }
    `}</style>
  </div>
  );
}