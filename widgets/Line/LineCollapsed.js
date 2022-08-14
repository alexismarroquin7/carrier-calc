const calcLineDueToday = (line) => {
  let res = 0;
  res += Number(line.device.dueToday);
  res += Number(line.protection.dueToday);
  return res;
}

const calcLineDueMonthly = (line) => {
  let res = 0;
  res += Number(line.plan.dueMonthly);
  res += Number(line.device.dueMonthly);
  res += Number(line.protection.dueMonthly);
  return res;
}

export const LineCollapsed = ({line}) => {
  return (
    <div className="line-collapsed">
      <p className="line-detail-collapsed">{line.type}</p>
      <p className="line-detail-collapsed">{line.name}</p>
      <p className="line-detail-collapsed">{line.phoneNumber}</p>
      <div className="line-detail-border"></div>
      <p className="line-detail-collapsed">{line.device.name ? line.device.name : 'No Device Selected'}</p>
      <p className="line-detail-collapsed">
        {(Number(line.device.dueToday) > 0 || Number(line.device.dueMonthly) > 0) && (
          <>
            <span className="due-today-text">${Number(line.device.dueToday).toFixed(2)} today</span> 
            <span className="due-monthly-text">${Number(line.device.dueMonthly).toFixed(2)}/month</span>
          </>
        )}
      </p>
      <div className="line-detail-border"></div>
      <p className="line-detail-collapsed">
        {line.plan.name === '' ? 'No Plan Selected' : ''}
        {line.plan.name === 'other' && line.plan.title === '' ? 'other' : ''}
        {line.plan.name === 'other' && line.plan.title.length > 0 ? line.plan.title : ''}
        {line.plan.name !== '' && line.plan.name !== 'other' && line.plan.title === '' ? line.plan.name : ''}
        {Number(line.plan.dueMonthly) > 0 && <span className="due-monthly-text">${Number(line.plan.dueMonthly).toFixed(2)}/month</span>}
      </p>
      <div className="line-detail-border"></div>
      <p className="line-detail-collapsed">
        {line.protection.name === '' ? 'No Plan Selected' : ''}
        {line.protection.name === 'other' && line.protection.title === '' ? 'other' : ''}
        {line.protection.name === 'other' && line.protection.title.length > 0 ? line.protection.title : ''}
        {line.protection.name !== '' && line.protection.name !== 'other' && line.protection.title === '' ? line.protection.name : ''}
      </p>
      <p className="line-detail-collapsed">
        {(Number(line.protection.dueToday) > 0 || Number(line.protection.dueMonthly) > 0) && (
          <>
            <span className="due-today-text">${Number(line.protection.dueToday).toFixed(2)} today</span> 
            <span className="due-monthly-text">${Number(line.protection.dueMonthly).toFixed(2)}/month</span>
          </>
        )}
      </p>
      <div className="line-detail-border"></div>
      <p className="line-detail-collapsed"><span className="due-today-text">${calcLineDueToday(line).toFixed(2)} today</span> <span className="due-monthly-text">${calcLineDueMonthly(line).toFixed(2)}/month</span></p>
    
      <style jsx>{`
        .line-collapsed {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          gap: 1rem;
        }

        .line-detail-collapsed {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: space-between;
        }


        .line-detail-border {
          width: 100%;
          padding: .2rem;
          background-color: #eee;
        }

        .due-today-text {
          background-color: var(--white);
          color: var(--google-green);
          border-radius: 1rem;
          border: 1px solid var(--google-green);
          padding: .5rem;
        }
        
        .due-monthly-text {
          background-color: var(--google-green);
          color: var(--white);
          border-radius: 1rem;
          border: 1px solid var(--google-green);
          padding: .5rem;
        }
      `}</style>
    </div>
  )
}