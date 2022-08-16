import { useToggle } from "../../hooks/useToggle";
import { KeyboardArrowRight, KeyboardArrowDown } from '@mui/icons-material';
import { LineCollapsed } from "./LineCollapsed";
import { LineForm } from "./LineForm";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import TabletIcon from '@mui/icons-material/Tablet';
import WatchIcon from '@mui/icons-material/Watch';
import WifiIcon from '@mui/icons-material/Wifi';

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
  
  const l = {...line};

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
        
        <div 
          className="line-edit-button"
          id={`line-edit-button-line-id-${l.id}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleEditMode();
            e.target.scrollIntoView(true)
          }}
        >
          {editMode ? (
            <KeyboardArrowDown
              fontSize="inherit"
            />
          ) : (
            <KeyboardArrowRight
              fontSize="inherit"  
            />
          )}
        </div>
      
      </div>

      {editMode ? <LineForm line={l}/> : <LineCollapsed line={l}/>}

      
      <style jsx>{`
        .line {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          border-top: 1px solid #eee;
          padding: 2rem 0;
          gap: 2rem;
          align-items: center;
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

        .line-edit-button {
          font-size: 4rem;
          color: var(--teal);
        }
        
      `}</style>
    </section>
  )
}