import  { useSelector } from "react-redux";
import { LineColumn } from "./LineColumn";
import { LineRow } from "./LineRow";
import { LinesSectionSettings } from "./LinesSectionSettings";

export const LinesSection = () => {
  const {
    quote,
    settings
  } = useSelector(s => {
    const [q] = s.quote.list.filter(item => item.id === s.quote.selected.quote.id);
    return {
      quote: q,
      settings: s.quote.settings
    };
  });
  
  return (
  <div
    className="lines-section"
  >

    <h5>Lines: <span>{quote.lines.length}</span></h5>
    
    <LinesSectionSettings/>

    

    {settings.lineListView === 'column' && <LineColumn/>}
    {settings.lineListView === 'row' && <LineRow/>}

    <style jsx>{`
      .lines-section {
        width: 90%;
        display: flex;
        flex-flow: column wrap;
        color: var(--white);
        border-radius: 1rem;
        padding: 2rem 0;
        gap: 1rem;
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