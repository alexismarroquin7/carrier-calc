import { useSelector } from "react-redux";

export const AccountSectionCollapsed = () => {
  const quote = useSelector(s => {
    const [q] = s.quote.list.filter(item => item.id === s.quote.selected.quote.id);
    return q;
  });

  const planName = quote.account.plan.name;
  const planTitle = quote.account.plan.title;
  const planDueMonthly = quote.account.plan.dueMonthly;
  const protectionName = quote.account.protection.name;
  const protectionTitle = quote.account.protection.title;
  const protectionDueMonthly = quote.account.protection.dueMonthly;

  return (
  <div className="account-section-collapsed">
    <div>
      <p>
        {planName === 'other' && planTitle.length === 0 ? 'other' : ''}
        {planName === 'other' && planTitle.length > 0 ? planTitle : ''}
        {planName !== '' && planName !== 'other' ? planName : ''}
        {planName === '' && 'No account-level plan'}
      </p>
      {Number(planDueMonthly) > 0 && <span className="account-section-collapsed-due-monthly-text">${Number(planDueMonthly).toFixed(2)}/month</span>}
    </div>
    <div>
      <p>
        {protectionName === 'other' && protectionTitle.length === 0 ? 'other' : ''}
        {protectionName === 'other' && protectionTitle.length > 0 ? protectionTitle : ''}
        {protectionName !== '' && protectionName !== 'other' ? protectionName : ''}
        {protectionName === '' && 'No account-level protection'}
      </p>
      {Number(protectionDueMonthly) > 0 && <span className="account-section-collapsed-due-monthly-text">${Number(protectionDueMonthly).toFixed(2)}/month</span>}
    </div>

    <style jsx>{`
      .account-section-collapsed { 
        display: flex;
        flex-flow: column wrap;
        gap: 1rem;
      }
      
      .account-section-collapsed div { 
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        justify-content: flex-end;
        gap: .5rem;
      }
      
      .account-section-collapsed p {
        width: 100%;
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