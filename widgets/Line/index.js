import { LineActionsMenu } from "./LineActionsMenu";
import { LineAccordion } from "./LineAccordion";


export const Line = ({ line, index, view }) => {

  return (
    <section
      className={`line ${index === 0 ? 'first' : ''} ${view === 'row' ? 'first' : ''}`}
    >
      <div className="line-head">
        <div
          className="line-title"
        >
          
          <p>Line {index + 1}</p>
          <p className="line-type-text">{line.type}</p>

        </div>
        
        <div className="line-icons-container">
          <LineActionsMenu
            line={line}
          />
        </div>
      
      </div>

      <LineAccordion line={line}/>
      
      <style jsx>{`
        .line {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          border-top: .2rem solid #eee;
          padding: 2rem 0;
          gap: 2rem;
        }
        
        .line.first {
          border-top-color: transparent;

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
          flex-flow: row wrap;
          gap: 1rem;
          align-items: center;
        }

        .line-type-text {
          background-color: var(--teal);
          padding: .5rem;
          border-radius: 1rem;
          color: var(--dark-blue);
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