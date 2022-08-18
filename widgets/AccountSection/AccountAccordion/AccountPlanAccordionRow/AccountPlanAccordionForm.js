import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";
const plans = {
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
}

export const AccountPlanAccordionForm = ({plan, handleChange}) => {
  const { quote } = useSelector(s => {
    const [q] = s.quote.list.filter(quote => quote.id === s.quote.selected.quote.id);
    return {
      quote: q
    }
  })
  return (
  <div
    className="plan-attrs"
  >
    <label
      className="line-label"
    >Name:
      <select
        onChange={handleChange}
        name="account.plan.name"
        value={plan.name}
      >
        {plans[quote.carrier.name].map(option => {
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

    {plan.name === 'other' && (
    <label
      className="line-label"
    >
      <input
        type="text"
        onChange={handleChange}
        value={plan.title}
        name="account.plan.title"
      />
    </label>
    )}
      
    <label
      className="line-label"
    >Due Monthly: 
      <input
        type="number"            
        autoComplete="off"
        onChange={handleChange}
        name="account.plan.dueMonthly"
        value={plan.dueMonthly}
      />
    </label>

    <style jsx>{`
      .plan-attrs {
        display: flex;
        flex-flow: column wrap;
        gap: 2rem;
        padding: 2rem 0;
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
        border: .2rem solid var(--teal);
        border-radius: 1rem;
        background-color: var(--dark-blue);
        color: var(--teal);
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
        border: .2rem solid var(--teal);
        border-radius: 1rem;
        background-color: var(--dark-blue);
        color: var(--teal);
      }
    `}</style>
  </div>
  )
}