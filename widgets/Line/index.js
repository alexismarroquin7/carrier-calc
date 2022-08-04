import { useDispatch } from "react-redux";
import { useToggle } from "../../hooks/useToggle";
import { quoteSlice } from "../../store/slices/quote-slice";
import { KeyboardArrowRight, KeyboardArrowDown } from '@mui/icons-material';

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

export const Line = ({ line, index }) => {

  const l = {...line};
  
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch(name){
      case 'name':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            name: value
          }
        }))
        break;
        
      case 'phoneNumber':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            phoneNumber: value
          }
        }))
        break;
      
      case 'device.name':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            device: {
              ...line.device,
              name: value
            }
          }
        }))
        break;
      
      case 'device.price':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            device: {
              ...line.device,
              price: value
            }
          }
        }))
        break;
      
      case 'device.downpayment':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            device: {
              ...line.device,
              downpayment: value
            }
          }
        }))
        break;
      
      case 'device.tradeInCredit':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            device: {
              ...line.device,
              tradeInCredit: value
            }
          }
        }))
        break;
      
      case 'device.dueToday':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            device: {
              ...line.device,
              dueToday: value
            }
          }
        }))
        break;
      
      case 'device.dueMonthly':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            device: {
              ...line.device,
              dueMonthly: value
            }
          }
        }))
        break;
      
      case 'plan.name':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            plan: {
              ...line.plan,
              name: value
            }
          }
        }))
        break;
      
      case 'plan.dueMonthly':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            plan: {
              ...line.plan,
              dueMonthly: value
            }
          }
        }))
        break;
      
      case 'protection.name':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            protection: {
              ...line.protection,
              name: value
            }
          }
        }))
        break;
      
      case 'protection.dueToday':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            protection: {
              ...line.protection,
              dueToday: value
            }
          }
        }))
        break;
      
      case 'protection.dueMonthly':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            protection: {
              ...line.protection,
              dueMonthly: value
            }
          }
        }))
        break;


      default:
        throw Error(`unknown e.target.name: ${name}`);
    }
  }

  const {
    active,
    toggle
  } = useToggle();
  
  return (
    <section
      className="line"
    >
      <div className="line-head">
        <h6>Line {index + 1}</h6>
        
        
        {active ? (
          <div className="line-arrow-button">
            <KeyboardArrowDown
              onClick={(e) => {
                e.preventDefault();
                toggle();
              }}
              fontSize="inherit"
              
            />
          </div>
        ) : (
          <div className="line-arrow-button">
            <KeyboardArrowRight
              onClick={(e) => {
                e.preventDefault();
                toggle();
              }}
              fontSize="inherit"
              className="line-arrow-button-svg"
            />
          </div>
        )}

      </div>

      {active ? (
      <div className="line-expanded">  

        <div
          className="line-attrs"
        >
          <label className="line-label">Type: {l.type}</label>
          
          <label
            className="line-label"
          >
            <input
              type="text"
              autoComplete="off" 
              id={line.id}
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={l.name}
            />
          </label>

          <label
            className="line-label"
          >
            <input
              autoComplete="off"
              name="phoneNumber"
              type="tel"
              placeholder="Phone Number"
              id={line.id}
              onChange={handleChange}
              value={l.phoneNumber}
            />
          </label>
        
        </div>

        <div
          className="device-attrs"
        >
          <h6>Device</h6>
          <label
            className="line-label"
          >Name: 
            <input
              type="text"
              autoComplete="off"
              id={line.id}
              name="device.name"
              onChange={handleChange}
              value={l.device.name}
            />
          </label>
          
          <label
            className="line-label"
          >Price: 
            <input
              autoComplete="off"
              id={line.id}
              name="device.price"
              onChange={handleChange}
              value={l.device.price}
              type="number"
            />
          </label>
          
          <label
            className="line-label"
          >Downpayment: 
            <input
              autoComplete="off"
              id={line.id}
              onChange={handleChange}
              name='device.downpayment'
              value={l.device.downpayment}
              type="number"
            />
          </label>
          
          <label
            className="line-label"
          >Trade In Credit: 
            <input
              type="number"
              autoComplete="off"
              id={line.id}
              onChange={handleChange}
              name='device.tradeInCredit'
              value={l.device.tradeInCredit}
            />
          </label>
          
          <label
            className="line-label"
          >Due Today: 
            <input
              type="number"
              autoComplete="off"
              id={line.id}
              onChange={handleChange}
              name="device.dueToday"
              value={l.device.dueToday}
            />
          </label>
          
          <label
            className="line-label"
          >Due Monthly: 
            <input
              type="number"
              autoComplete="off"
              id={line.id}
              onChange={handleChange}
              name="device.dueMonthly"
              value={l.device.dueMonthly}
            />
          </label>
        </div>

        <div
          className="plan-attrs"
        >
          <h6>Plan</h6>
          <label
            className="line-label"
          >Name: 
            <input
              autoComplete="off"
              id={line.id}
              onChange={handleChange}
              name="plan.name"
              value={l.plan.name}
              type="text"
            />
          </label>
          <label
            className="line-label"
          >Due Monthly: 
            <input
              type="number"            
              autoComplete="off"
              id={line.id}
              onChange={handleChange}
              name="plan.dueMonthly"
              value={l.plan.dueMonthly}
            />
          </label>
        </div>
        
        <div
          className="protection-attrs"
        >
          <h6>Protection</h6>
          <label
            className="line-label"
          >Name: 
            <input
              type="text"
              autoComplete="off"
              id={line.id}
              onChange={handleChange}
              name="protection.name"
              value={l.protection.name}
            />
          </label>
          <label
            className="line-label"
          >Due Today: 
            <input
              type="number"
              autoComplete="off"
              id={line.id}
              onChange={handleChange}
              name="protection.dueToday"
              value={l.protection.dueToday}
            />
          </label>
          <label
            className="line-label"
          >Due Monthly: 
            <input
              type="number"
              autoComplete="off"
              id={line.id}
              name="protection.dueMonthly"
              onChange={handleChange}
              value={l.protection.dueMonthly}
            />
          </label>

        </div>
        
        <div className="line-expanded-bottom-actions">
          <button 
            className="delete-line-button"
            onClick={(e) => {
              e.preventDefault();
              dispatch(quoteSlice.actions.deleteLineFromSelectedQuote({lineId: l.id}))
            }}
          >Delete
          </button>
        </div>
      </div>
      
      ) : (
        <div className="line-collapsed">
          <p className="line-detail-collapsed">{l.type}</p>
          <p className="line-detail-collapsed">{l.name}</p>
          <p className="line-detail-collapsed">{l.phoneNumber}</p>
          <div className="line-detail-border"></div>
          <p className="line-detail-collapsed">{l.device.name ? l.device.name : 'No Device Selected'}</p>
          <p className="line-detail-collapsed">
            {Number(l.device.dueToday) > 0 && <span className="due-today-text">${Number(l.device.dueToday).toFixed(2)} today</span>}
            {Number(l.device.dueMonthly) > 0 && <span className="due-monthly-text">${Number(l.device.dueMonthly).toFixed(2)}/month</span>}
          </p>
          <div className="line-detail-border"></div>
          <p className="line-detail-collapsed">
            {l.plan.name ? l.plan.name : 'No Plan Selected'} 
            {Number(l.plan.dueMonthly) > 0 && <span className="due-monthly-text">${Number(l.plan.dueMonthly).toFixed(2)}/month</span>}
          </p>
          <div className="line-detail-border"></div>
          <p className="line-detail-collapsed">{l.protection.name ? l.protection.name : 'No Protection Selected'}</p>
          <p className="line-detail-collapsed">
            {Number(l.protection.dueToday) > 0 && <span className="due-today-text">${Number(l.protection.dueToday).toFixed(2)} today</span>}
            {Number(l.protection.dueMonthly) > 0 && <span className="due-monthly-text">${Number(l.protection.dueMonthly).toFixed(2)}/month</span>}
          </p>
          <div className="line-detail-border"></div>
          <p className="line-detail-collapsed"><span className="due-today-text">${calcLineDueToday(line).toFixed(2)} today</span> <span className="due-monthly-text">${calcLineDueMonthly(line).toFixed(2)}/month</span></p>
        </div>
      )}

      
      <style jsx>{`
        .line {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          border-top: 1px solid #eee;
          padding: 2rem 0;
          gap: 2rem;
          align-items: center;
        }

        .line-head {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: space-between;
        }

        .line-arrow-button {
          font-size: 4rem;
          color: var(--google-blue);
        }

        .line-label {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          gap: 1rem;
        }
        
        .line-label input {
          padding: 1rem;
        }

        .line-label input[type="text"],
        .line-label input[type="tel"] {
          width: 100%;
        }
        
        .line-label input[type="number"] {
          width: 10rem;
        }

        .line-attrs,
        .device-attrs,
        .plan-attrs,
        .protection-attrs {
          display: flex;
          flex-flow: column wrap;
          gap: 2rem;
          padding: 2rem 0;
        }

        .line-expanded {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
        }

        .line-expanded-bottom-actions {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          padding-top: 2rem;
        }

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

        .delete-line-button {
          border: 1px solid var(--google-red);
          background-color: var(--google-red);
          color: white;
          padding: 1rem 2rem;
          border-radius: 2rem;
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
    </section>
  )
}