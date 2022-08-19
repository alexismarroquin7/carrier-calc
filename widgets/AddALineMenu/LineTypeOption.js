
export const LineTypeOption = ({lineType, count, handleChange, setValue}) => {
  
  const {icon: Icon} = lineType;
  return (
    <div
      className="line-type-option"
    >
      <div
        className="line-type-icon-section"
      >
        <Icon/>    
        <label>{lineType.title}</label>
      </div>

      <div>
        
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setValue(count-1);
          }}
          name="sub-count"
          disabled={count===0}
        >-</button>
          <input
            name={lineType.type}
            type="number"
            value={count}
            min={0}
            onChange={(e) => {
              e.preventDefault()
              e.stopPropagation();
              if(Number(e.target.value) < 0) return;
              setValue(Number(e.target.value));
            }}
          />
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setValue(count+1);
          }}
          name="add-count"
          className={`add-${lineType.type}`}
        >+</button>
      
      </div>
      <style jsx>{`
        .line-type-option {
          width: 90%;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: space-between;
          
          padding: 2rem;
          
          background-color: var(--teal);
          color: var(--dark-blue);
          
          border: 0;
          border-radius: 1rem;
          border-bottom: .2rem solid var(--dark-blue);

          font-weight: bold;
          font-size: 3rem;
          
        }
        
        
        .line-type-icon-section {
          font-size: 3rem;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          gap: 1rem;
        }

        button {
          width: 4rem;
          padding: 1rem;
          border: .2rem solid var(--dark-blue);
          background-color: var(--dark-blue);
          color: var(--teal);
          
        }

        button[name="sub-count"] {
          border-top-left-radius: 1rem;
          border-bottom-left-radius: 1rem;
        }
        
        button[name="add-count"] {
          border-top-right-radius: 1rem;
          border-bottom-right-radius: 1rem;
          
        }

        input {
          width: 5rem;
          padding: 1rem;
          color: var(--dark-blue);
          background-color: var(--teal);
          border: .2rem solid var(--dark-blue);
        }
      `}</style>
    </div>
  )
}