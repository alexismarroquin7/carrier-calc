
export const LineTypeOption = ({lineType, count, setValue}) => {
  
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

      <div
        className="line-type-button-wrapper"
      >
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
          flex-flow: column wrap;
          align-items: center;
          justify-content: space-between;
          
          padding: 4rem 2rem;
          
          background-color: var(--teal);
          color: var(--dark-blue);
          
          border: 0;
          border-radius: 1rem;
          border-bottom: .2rem solid var(--dark-blue);

          font-weight: bold;
          font-size: 3rem;
          gap: 4rem
          
        }
        
        
        .line-type-icon-section {
          font-size: 3rem;
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          gap: 2rem;
        }
        
        .line-type-button-wrapper {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: space-between;
        }

        button {
          width: 4rem;
          padding: 1rem;
          border: .2rem solid var(--dark-blue);
          background-color: var(--dark-blue);
          color: var(--teal);
          border-radius: 1rem;
        }

        input {
          width: 8rem;
          padding: 1rem;
          color: var(--dark-blue);
          background-color: var(--teal);
          border: .2rem solid var(--dark-blue);
          border-radius: 1rem;
        }
      `}</style>
    </div>
  )
}