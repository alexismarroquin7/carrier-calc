import { useSelector } from "react-redux"
import { Line } from "../../Line";

export const LineColumn = () => {
  const quote = useSelector(s => {
    const [q] = s.quote.list.filter(item => item.id === s.quote.selected.quote.id);
    return q;
  });

  return (
    <div
      className="line-column"
    >
      {quote.lines.map((line, i) => {
        return (
          <Line
            key={line.id}
            line={quote.lines[quote.selectedLineIndex]} 
            index={i}
            view={'column'}
          />
        )
      })}

      <style jsx>{`
        .line-column {
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