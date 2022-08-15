import { useToggle } from "../../hooks/useToggle";
import { KeyboardArrowRight, KeyboardArrowDown } from '@mui/icons-material';
import { LineCollapsed } from "./LineCollapsed";
import { LineForm } from "./LineForm";

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
        <h6 className="line-title">Line {index + 1}</h6>
        
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

        .line-edit-button {
          font-size: 4rem;
          color: var(--google-blue);
        }
        
      `}</style>
    </section>
  )
}