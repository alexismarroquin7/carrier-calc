import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";
const protectionList = {
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

export const AccountProtectionAccordionForm = ({protection, handleChange}) => {
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
        name="account.protection.name"
        value={protection.name}
      >
        {protectionList[quote.carrier.name].map(option => {
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

    {protection.name === 'other' && (
    <label
      className="line-label"
    >
      <input
        type="text"
        onChange={handleChange}
        value={protection.title}
        name="account.protection.title"
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
        name="account.protection.dueMonthly"
        value={protection.dueMonthly}
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