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
    <h6>Lines: {quote.lines.length}</h6>
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
    `}</style>
  </div>
  )
}