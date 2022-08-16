import  { useSelector } from "react-redux";
import { Line } from "../Line";

export const LinesSection = () => {
  const quote = useSelector(s => {
    const [q] = s.quote.list.filter(item => item.id === s.quote.selected.quote.id);
    return q;
  });

  return (
  <div
    className="lines-section"
  >
    <div>
      <h5>Lines: <span>{quote.lines.length}</span></h5>
    </div>

    {quote.lines.map((line, i) => {
      return (
        <Line key={line.id} line={line} index={i}/>
      )
    })}

    <style jsx>{`
      .lines-section {
        width: 90%;
        display: flex;
        flex-flow: column wrap;
        border: .2rem solid var(--dark-blue);
        background-color: var(--dark-blue);
        color: var(--white);
        border-radius: 1rem;
        padding: 2rem;
        gap: 2rem;
      }

      h5 {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: flex-end;
        justify-content: space-between;
        color: var(--teal);
      }

      span {
        font-size: 4rem;
      }
    `}</style>
  </div>
  )
}