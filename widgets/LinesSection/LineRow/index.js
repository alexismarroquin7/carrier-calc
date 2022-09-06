import { useSelector } from "react-redux"
import { Line } from "../../Line";
import { SelectLineIndexMenu } from "./SelectLineIndexMenu";

export const LineRow = () => {
  const quote = useSelector(s => {
    const [q] = s.quote.list.filter(item => item.id === s.quote.selected.quote.id);
    return q;
  });

  return (
    <div
      className="line-row"
    >
      
      {quote.selectedLineIndex !== null && <SelectLineIndexMenu/>}

      {quote.selectedLineIndex !== null && (
        <Line   
          line={quote.lines[quote.selectedLineIndex]} 
          index={quote.selectedLineIndex}
          view={'row'}
        />
      )}
      
      <style jsx>{`
        .line-row {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          border: .2rem solid var(--dark-blue);
          background-color: var(--dark-blue);
          padding: 2rem;
          border-radius: 1rem;
        }
      `}</style>
    </div>
  )
}