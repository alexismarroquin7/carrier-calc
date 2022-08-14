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
      const l = {...line};
      return (
        <Line key={l.id} line={l} index={i}/>
      )
    })}

    <style jsx>{`
      .lines-section {
        width: 90%;
        display: flex;
        flex-flow: column wrap;
        border: 1px solid #eee;
        border-radius: 2rem;
        padding: 2rem;
        gap: 2rem;
      }

      h5 {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: flex-end;
        justify-content: space-between;
      }

      span {
        font-size: 4rem;
      }
    `}</style>
  </div>
  )
}