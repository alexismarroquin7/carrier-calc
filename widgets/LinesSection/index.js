import { useState } from "react";
import  { useSelector } from "react-redux";
import { Line } from "../Line";
import { SelectLineIndexMenu } from "./SelectLineIndexMenu";

export const LinesSection = () => {
  const quote = useSelector(s => {
    const [q] = s.quote.list.filter(item => item.id === s.quote.selected.quote.id);
    return q;
  });
  console.log(quote.selectedLineIndex)
  return (
  <div
    className="lines-section"
  >
    <div>
      <h5>Lines: <span>{quote.lines.length}</span></h5>
    </div>

    {quote.selectedLineIndex !== null && <SelectLineIndexMenu/>}

    
    {quote.selectedLineIndex !== null && (
      <Line   
        line={quote.lines[quote.selectedLineIndex]} 
        index={quote.selectedLineIndex}
      />
    )}
    
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