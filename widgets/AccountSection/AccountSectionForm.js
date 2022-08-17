import { quoteSlice } from "../../store/slices/quote-slice";
import { useSelector, useDispatch } from "react-redux";
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
        name: 'S'
      },
      {
        id: uuid(),
        name: 'M'
      },
      {
        id: uuid(),
        name: 'L'
      },
      {
        id: uuid(),
        name: 'XL'
      },
      {
        id: uuid(),
        name: 'XXL'
      },
      {
        id: uuid(),
        name: 'The Verizon Unlimited Plan'
      },
      {
        id: uuid(),
        name: 'Go Unlimited'
      },
      {
        id: uuid(),
        name: 'Above Unlimited'
      },
      {
        id: uuid(),
        name: 'Beyond Unlimited'
      },
      {
        id: uuid(),
        name: 'Welcome Unlimited'
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
        name: 'AT&T Mobile Share Plus'
      },
      {
        id: uuid(),
        name: 'AT&T Mobile Share Advantage'
      },
      {
        id: uuid(),
        name: 'AT&T Mobile Share Flex'
      },
      {
        id: uuid(),
        name: 'AT&T Mobile Share Value'
      },
      {
        id: uuid(),
        name: 'AT&T Unlimited'
      },
      {
        id: uuid(),
        name: 'AT&T Unlimited Plus'
      },
      {
        id: uuid(),
        name: 'AT&T Unlimited Choice'
      },
      {
        id: uuid(),
        name: 'AT&T Unlimited Choice Enhanced'
      },
      {
        id: uuid(),
        name: 'AT&T Unlimited Plus Enhanced'
      },
      {
        id: uuid(),
        name: 'AT&T Unlimited & More'
      },
      {
        id: uuid(),
        name: 'AT&T Unlimited & More Premium'
      },
      {
        id: uuid(),
        name: 'other'
      },
    ],
    tmo: [
      {
        id: uuid(),
        name: ''
      },
      {
        id: uuid(),
        name: 'Magenta MAX'
      },
      {
        id: uuid(),
        name: 'Magenta'
      },
      {
        id: uuid(),
        name: 'Essentials'
      },
      {
        id: uuid(),
        name: 'Magenta MAX Military'
      },
      {
        id: uuid(),
        name: 'Magenta Military'
      },
      {
        id: uuid(),
        name: 'Magenta MAX 55+'
      },
      {
        id: uuid(),
        name: 'Magenta 55+'
      },
      {
        id: uuid(),
        name: 'Essentials 55+'
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
        name: 'Verizon Multi-Device Protection'
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
        name: 'Protect Advantage For 4'
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
  }
}

export const AccontSectionForm = () => {
  const quote = useSelector(s => {
    const [q] = s.quote.list.filter(item => item.id === s.quote.selected.quote.id);
    return q;
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {name, value} = e.target;
    switch(name){
      case 'account.plan.name':
        dispatch(quoteSlice.actions.updateSelectedQuote({
          ...quote,
          account: {
            ...quote.account,
            plan: {
              ...quote.account.plan,
              name: value
            }
          }
        }));
        break;
      case 'account.plan.title':
        dispatch(quoteSlice.actions.updateSelectedQuote({
          ...quote,
          account: {
            ...quote.account,
            plan: {
              ...quote.account.plan,
              title: value
            }
          }
        }));
        break;
      case 'account.plan.dueMonthly':
        dispatch(quoteSlice.actions.updateSelectedQuote({
          ...quote,
          account: {
            ...quote.account,
            plan: {
              ...quote.account.plan,
              dueMonthly: value
            }
          }
        }));
        break;
      case 'account.protection.name':
        dispatch(quoteSlice.actions.updateSelectedQuote({
          ...quote,
          account: {
            ...quote.account,
            protection: {
              ...quote.account.protection,
              name: value
            }
          }
        }));
        break;
      case 'account.protection.title':
        dispatch(quoteSlice.actions.updateSelectedQuote({
          ...quote,
          account: {
            ...quote.account,
            protection: {
              ...quote.account.protection,
              title: value
            }
          }
        }));
        break;
      case 'account.protection.dueMonthly':
        dispatch(quoteSlice.actions.updateSelectedQuote({
          ...quote,
          account: {
            ...quote.account,
            protection: {
              ...quote.account.protection,
              dueMonthly: value
            }
          }
        }));
        break;
      default:
        throw Error(`unkown e.target.name: ${name}`);
    }
  }

  return (
  <div className="account-section-form">
    <h6>Plan</h6>
  
    <label className="account-section-select-label">Name:
      <select
        name="account.plan.name"
        onChange={handleChange}
        value={quote.account.plan.name}
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
      {quote.account.plan.name === 'other' && (
        <input 
          type="text"
          name="account.plan.title"
          onChange={handleChange}
          value={quote.account.plan.title}
        />
      )}
    </label>
    
    
    <label
      className="account-section-number-label"
    >Due Monthly:
      <input 
        type="number"
        name="account.plan.dueMonthly"
        onChange={handleChange}
        value={quote.account.plan.dueMonthly}
        min={0}
      />
    </label>
    
    <h6>Protection</h6>
    <label className="account-section-select-label">Name:
      <select
        name="account.protection.name"
        onChange={handleChange}
        value={quote.account.protection.name}
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
      {quote.account.protection.name === 'other' && (
        <input 
          type="text"
          name="account.protection.title"
          onChange={handleChange}
          value={quote.account.protection.title}
        />
      )}
    </label>


    <label
      className="account-section-number-label"
    >Due Monthly:
      <input 
        type="number"
        name="account.protection.dueMonthly"
        onChange={handleChange}
        value={quote.account.protection.dueMonthly}
      />
    </label>
    
    <style jsx>{`
      .account-section-form {
        display: flex;
        flex-flow: column wrap;
        gap: 1rem;
      }

      .account-section-select-label {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        gap: .5rem;
        color: var(--white);
        padding: 1rem 0;
      }
      
      .account-section-select-label select {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        border: .2rem solid var(--teal);
        border-radius: 1rem;
        background-color: var(--dark-blue);
        color: var(--teal);
      }

      .account-section-text-label {
        width: 85%;
        display: flex;
        flex-flow: column wrap;
        gap: .5rem;
      }

      .account-section-number-label {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        gap: .5rem;
        padding: 1rem 0;
      }

      input {
        background-color: var(--dark-blue);
        color: var(--teal);
        border: .2rem solid var(--teal);
        border-radius: 1rem;
      }
      
      input[type="text"],
      input[type="number"] {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        justify-content: flex-end;
        padding: 1rem;
        gap: .5rem;
      }

      input[type="number"] {
        width: 10rem;
      }

      .account-section-dropdown-button {
        font-size: 4rem;
      }
    `}</style>
  </div>
  )
}