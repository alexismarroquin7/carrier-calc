import { QuoteForm } from "../widgets/QuoteForm"

export default function QuotePage () {
  return <div className="quote-page">
    <QuoteForm/>
    <style jsx>{`
      .quote-page {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
      }
    `}</style>
  </div>
}