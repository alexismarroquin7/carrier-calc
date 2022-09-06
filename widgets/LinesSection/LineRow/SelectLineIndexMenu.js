import { useDispatch, useSelector } from "react-redux";
import { useToggle } from "../../../hooks";
import { quoteSlice } from "../../../store/slices/quote-slice";

export const SelectLineIndexMenu = () => {
  const quote = useSelector(s => {
    const [q] = s.quote.list.filter(item => item.id === s.quote.selected.quote.id);
    return q;
  });

  const dispatch = useDispatch();
  
  const {active, toggle} = useToggle();

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
      className="select-line-menu"
    >
      <button
        className={"select-line-menu-button"}
        onPointerDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleToggle();
        }}
      >Selected: Line {quote.selectedLineIndex + 1}</button>
      
      <div
        className={`select-line-menu-content ${active ? '' : 'hidden'}`}
        onPointerDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleToggle();
        }}
      >
        <div
          className={`select-line-menu-content-wrapper`}
          onPointerDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <div
            className={`select-line-menu-content-wrapper-top-text`}
          >
            <h6>Selected: Line {quote.selectedLineIndex + 1}</h6>
          </div>
          
          <div
            className={`select-line-menu-content-wrapper-scroll`}
            onPointerDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            
            {quote.lines.map((line, i) => {
              return (
                <button
                  key={line.id}
                  className={`select-line-button ${i === quote.selectedLineIndex && 'selected'}`}
                  onPointerDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dispatch(quoteSlice.actions.selectLineIndex({lineId: line.id}))
                  }}
                >
                  {'Line '}{i+1}
                </button>
              )
            })}
          </div>
        </div>
      </div> 
      
      <style jsx>{`
        .select-line-menu {
          width: 100%;
          
        }

        .select-line-menu-content {
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          z-index: 1000;
          background-color: rgba(0,0,0,.75);
        }

        .select-line-menu-content-wrapper {
          width: 100%;
          position: fixed;
          top: 30%;
          bottom: 0;
          background-color: var(--teal);
          padding: 2rem 0;
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
          
        }

        .select-line-menu-content.hidden {
          display: none;
        }

        .select-line-menu-content-wrapper-top-text {
          width: 100%;
          padding-bottom: 2rem;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          position: sticky;
          top: 0;
          color: var(--dark-blue);
        }

        .select-line-menu-content-wrapper-scroll {
          overflow-y: scroll;
          width: 90%;
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
          gap:  1rem;
        }

        .select-line-menu-button {
          width: 100%;
          padding: 1rem;
          border-radius: 1rem;
          background-color: var(--teal);
          font-weight: bold;
          border: .2rem solid var(--teal);
          color: var(--dark-blue);
          transition: all .2s;
        }
        
        .select-line-button {
          width: 100%;
          padding: 1rem;
          border-radius: 1rem;
          background-color: var(--teal);
          font-weight: bold;
          border: .2rem solid var(--dark-blue);
          color: var(--dark-blue);
          transition: all .2s;
        }
        
        .select-line-button.selected {
          background-color: var(--dark-blue);
          color: var(--teal);
        }

      `}</style>
    </div>
  )
}