import { useDispatch, useSelector } from "react-redux";
import { quoteSlice } from "../../store/slices/quote-slice";
import { v4 as uuid } from "uuid";

const options = {
  plans: {
    vzw: [
      {
        id: uuid(),
        name: ''
      },
      {
        id: uuid(),
        name: '5G Start'
      },
      {
        id: uuid(),
        name: '5G Play More'
      },
      {
        id: uuid(),
        name: '5G Do More'
      },
      {
        id: uuid(),
        name: '5G Get More'
      },
      {
        id: uuid(),
        name: 'other'
      },
    ],
    att: [
      {
        id: uuid(),
        name: ''
      },
      {
        id: uuid(),
        name: 'Unlimited Starter'
      },
      {
        id: uuid(),
        name: 'Unlimited Extra'
      },
      {
        id: uuid(),
        name: 'Unlimited Elite'
      },
      {
        id: uuid(),
        name: 'Unlimited Premium'
      },
      {
        id: uuid(),
        name: 'other'
      }
    ],
    tmo: [
      {
        id: uuid(),
        name: ''
      },
      {
        id: uuid(),
        name: 'other'
      },
    ],
    other: [
      {
        id: uuid(),
        name: ''
      },
      {
        id: uuid(),
        name: 'other'
      },
    ]
  },
  protection: {
    vzw: [
      {
        id: uuid(),
        name: ''
      },
      {
        id: uuid(),
        name: 'Total Mobile Protection'
      },
      {
        id: uuid(),
        name: 'Verizon Mobile Secure'
      },
      {
        id: uuid(),
        name: 'Verizon Mobile Protection'
      },
      {
        id: uuid(),
        name: 'All State'
      },
      {
        id: uuid(),
        name: 'other'
      }
    ],
    att: [
      {
        id: uuid(),
        name: ''
      },
      {
        id: uuid(),
        name: 'AT&T Protect Advantage'
      },
      {
        id: uuid(),
        name: 'All State'
      },
      {
        id: uuid(),
        name: 'other'
      }
    ],
    tmo: [
      {
        id: uuid(),
        name: ''
      },
      {
        id: uuid(),
        name: 'T-Mobile Protection<360>'
      },
      {
        id: uuid(),
        name: 'All State'
      },
      {
        id: uuid(),
        name: 'other'
      }
    ],
    other: [
      {
        id: uuid(),
        name: ''
      },
      {
        id: uuid(),
        name: 'other'
      },
    ]
  }
}

export const LineForm = ({line}) => {
  const quote = useSelector(s => {
    const [q] = s.quote.list.filter(item => item.id === s.quote.selected.quote.id);
    return q;
  });

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
      
      case 'plan.title':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            plan: {
              ...line.plan,
              title: value
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
      
      case 'protection.title':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            protection: {
              ...line.protection,
              title: value
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
  
  return (
  <div className="line-expanded">  

    <div
      className="line-attrs"
    >
      <label className="line-label">Type: {line.type}</label>
      
      <label
        className="line-label"
      >Name:
        <input
          type="text"
          autoComplete="off" 
          id={line.id}
          name="name"
          onChange={handleChange}
          value={line.name}
        />
      </label>

      <label
        className="line-label"
      >Phone Number:
        <input
          autoComplete="off"
          name="phoneNumber"
          type="tel"
          id={line.id}
          onChange={handleChange}
          value={line.phoneNumber}
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
          value={line.device.name}
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
          value={line.device.price}
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
          value={line.device.downpayment}
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
          value={line.device.tradeInCredit}
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
          value={line.device.dueToday}
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
          value={line.device.dueMonthly}
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
        <select
          onChange={handleChange}
          name="plan.name"
          value={line.plan.name}
        >
          {options.plans[quote.carrier.name].map(option => {
            return (
              <option
                key={option.id}
                value={option.name}
              >
                {option.name !== 'other' && option.name === '' ? '--select--' : ''}
                {option.name === 'other' ? 'other' : ''}
                {option.name !== 'other' && option.name !== '' ? option.name : ''}
              </option>
            )
          })}
        </select>
      </label>

      {line.plan.name === 'other' && (
      <label
        className="line-label"
      >
        <input
          type="text"
          onChange={handleChange}
          value={line.plan.title}
          name="plan.title"
        />
      </label>
      )}
        
      <label
        className="line-label"
      >Due Monthly: 
        <input
          type="number"            
          autoComplete="off"
          id={line.id}
          onChange={handleChange}
          name="plan.dueMonthly"
          value={line.plan.dueMonthly}
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
        <select
          onChange={handleChange}
          name="protection.name"
          value={line.protection.name}
        >
          {options.protection[quote.carrier.name].map(option => {
            return (
              <option
                key={option.id}
                value={option.name}
              >
                {option.name !== 'other' && option.name === '' ? '--select--' : ''}
                {option.name === 'other' ? 'other' : ''}
                {option.name !== 'other' && option.name !== '' ? option.name : ''}
              </option>
            )
          })}
        </select>
      </label>

      {line.protection.name === 'other' && (
      <label
        className="line-label"
      >
        <input
          type="text"
          onChange={handleChange}
          value={line.protection.title}
          name="protection.title"
        />
      </label>
      )}
      
      <label
        className="line-label"
      >Due Today: 
        <input
          type="number"
          autoComplete="off"
          id={line.id}
          onChange={handleChange}
          name="protection.dueToday"
          value={line.protection.dueToday}
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
          value={line.protection.dueMonthly}
        />
      </label>

    </div>

    <div className="line-expanded-bottom-actions">
      <button 
        className="delete-line-button"
        onClick={(e) => {
          e.preventDefault();
          dispatch(quoteSlice.actions.deleteLineFromSelectedQuote({lineId: line.id}))
        }}
      >Delete</button>
    </div>

    <style jsx>{`
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
      
      .line-label select {
        width: 100%;
        padding: 1rem;
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
    `}</style>

  </div>
  )
}

