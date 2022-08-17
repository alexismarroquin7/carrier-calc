import { useToggle } from "../../hooks/useToggle";
import { KeyboardArrowDown } from '@mui/icons-material';
import { LineCollapsed } from "./LineCollapsed";
import { LineForm } from "./LineForm";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import TabletIcon from '@mui/icons-material/Tablet';
import WatchIcon from '@mui/icons-material/Watch';
import WifiIcon from '@mui/icons-material/Wifi';
import { LineActionsMenu } from "./LineActionsMenu";
import { LineAccordion } from "./LineAccordion";


const Icon = ({type}) => {
  switch(type){
    case 'smartphone':
      return <SmartphoneIcon fontSize="inherit"/>
    case 'tablet':
      return <TabletIcon fontSize="inherit"/>
    case 'watch':
      return <WatchIcon fontSize="inherit"/>
    case 'hotspot':
      return <WifiIcon fontSize="inherit"/>
    
    default: throw Error('unknown icon type in Line');
  }
}

export const Line = ({ line, index }) => {

  const {
    active: editMode,
    toggle: toggleEditMode
  } = useToggle();
  
  return (
    <section
      className="line"
    >
      <div className="line-head">
        <div
          className="line-title"
        >
          <div
            className="line-type-icon"
          >
            <Icon type={line.type} />
            <p>Line {index + 1}</p>
          </div>
          <p className="line-type-text">{line.type}</p>

        </div>
        
        <div className="line-icons-container">
             
          {/* <div 
            className={`${editMode ? 'open' : ''} line-icon`}
            id={`line-edit-button-line-id-${line.id}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleEditMode();
            }}
          >
            <KeyboardArrowDown
              fontSize="inherit"
            />
          </div> */}
          <LineActionsMenu
            line={line}
          />
        </div>
      
      </div>

      {/* {editMode ? <LineForm line={line}/> : <LineCollapsed line={line}/>} */}

      <LineAccordion expandAll={editMode} line={line}/>
      
      <style jsx>{`
        .line {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          border-top: 1px solid #eee;
          padding: 2rem 0;
          gap: 2rem;
          /* align-items: center; */
        }

        .line-head {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: space-between;
        }

        .line-title {
          font-size: 3rem;
          display: flex;
          flex-flow: column wrap;
          gap: 1rem;
        }
        
        .line-type-icon {
          font-size: 3rem;
          display: flex;
          flex-flow: row wrap;
          align-items: flex-end;
          gap: 1rem;
        }

        .line-icons-container {
          font-size: 3rem;
          color: var(--teal);
          display: flex;
          flex-flow: row wrap;
          gap: 1rem;
        }

        .line-icon {
          font-size: 3rem;
          color: var(--teal);
          border: .2rem solid var(--teal);
          display: flex;
          border-radius: 1rem;
          transition: all .2s;
        }
        
        .open {
          transform: rotate(-180deg);
        }
        
      `}</style>
    </section>
  )
}