import { useSelector } from "react-redux";

export const AccountSectionCollapsed = () => {
  const quote = useSelector(s => {
    const [q] = s.quote.list.filter(item => item.id === s.quote.selected.quote.id);
    return q;
  });
  return (
  <div className="account-section-collapsed">
    <p>
      {quote.account.plan.name ? quote.account.plan.name : 'No account plan'} 
      {Number(quote.account.plan.dueMonthly) > 0 && <span className="account-section-collapsed-due-monthly-text">${Number(quote.account.plan.dueMonthly).toFixed(2)}/month</span>}
    </p>
    <p>
      {quote.account.protection.name ? quote.account.protection.name : 'No account protection'} 
      {Number(quote.account.protection.dueMonthly) > 0 && <span className="account-section-collapsed-due-monthly-text">${Number(quote.account.protection.dueMonthly).toFixed(2)}/month</span>}
    </p>
    <style jsx>{`
      .account-section-collapsed { 
        display: flex;
        flex-flow: column wrap;
        gap: 2rem;
      }
      
      .account-section-collapsed p {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: flex-start;
      }

      .account-section-collapsed-due-monthly-text {
        border-radius: 1rem;
        padding: .5rem;
        background-color: var(--google-green);
        color: white;
      }

    `}</style>
  </div>
  )
}