import { useDispatch } from "react-redux";
import { useToggle } from "../../hooks/useToggle";
import { quoteSlice } from "../../store/slices/quote-slice";

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
    active: expanded,
    toggle: toggleExpanded
  } = useToggle();
  
  return (
    <div
      className="line"
    >
      {expanded ? (
      <>
      <div>
        <h6
          className="line-number"
        >Line {index + 1} 
          <button 
            className="delete-line-button"
            onClick={(e) => {
              e.preventDefault();
              dispatch(quoteSlice.actions.deleteLineFromSelectedQuote({lineId: l.id}))
            }}
          >Delete
          </button>
        </h6>
        <label
          className="line-label"
        >{l.type}</label>
      </div>
      
      <div
        className="line-attrs"
      >
        <label
          className="line-label"
        >
          <input
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
          />
        </label>
        
        <label
          className="line-label"
        >Trade In Credit: 
          <input
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
          />
        </label>
        <label
          className="line-label"
        >Due Monthly: 
          <input
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
            autoComplete="off"
            id={line.id}
            name="protection.dueMonthly"
            onChange={handleChange}
            value={l.protection.dueMonthly}
          />
        </label>

      </div>
      <div
        className="collapse-button"
      >
        <button
          onClick={(e) => {
            e.preventDefault()
            toggleExpanded();
          }}
        >Collapse</button>
      </div>
      </>
      
      ) : (
        <div className="line-collapsed">
          <h6>Line {index + 1}</h6>
          <p>{l.type}</p>
          <p>{l.name}</p>
          <p>{l.phoneNumber}</p>
          <p>{l.device.name}</p>
          <p>{l.plan.name}</p>
          <p>{l.protection.name}</p>
          <p>Due Today: ${calcLineDueToday(line).toFixed(2)}</p>
          <p>Due Monthly: ${calcLineDueMonthly(line).toFixed(2)}</p>

          <div
            className="expand-button"
          >
            <button 
              onClick={(e) => {
                e.preventDefault()
                toggleExpanded();
              }}
            >Expand</button>
          </div>
        </div>
      )}

      
      <style jsx>{`
        .line {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          gap: 2rem;
          border-top: 1px solid #eee;
          padding: 2rem 0;
        }

        .line-number {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: space-between;
        }

        .delete-line-button {
          border: 1px solid var(--google-red);
          background-color: var(--google-red);
          color: white;
          padding: 1rem 2rem;
          border-radius: 2rem;
        }

        .line-label {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          gap: 1rem;
        }
        
        .line-label input {
          width: 100%;
          padding: 1rem;
        }

        .line-attrs,
        .device-attrs,
        .plan-attrs,
        .protection-attrs {
          display: flex;
          flex-flow: column wrap;
          gap: 1rem;
        }

        .expand-button,
        .collapse-button {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          padding-top: 1rem;
        }
        
        .expand-button button,
        .collapse-button button {
          border: 1px solid var(--google-blue);
          padding: 1rem 2rem;
          border-radius: 2rem;
          background-color: var(--google-blue);
          color: white;
        }

        .line-collapsed {
          display: flex;
          flex-flow: column wrap;
        }
      `}</style>
    </div>
  )
}