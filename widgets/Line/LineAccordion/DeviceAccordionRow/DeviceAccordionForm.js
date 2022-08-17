export const DeviceAccordionForm = ({device, handleChange}) => {
  return (
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
        
        name="device.name"
        onChange={handleChange}
        value={device.name}
      />
    </label>
    
    <label
      className="line-label"
    >Price: 
      <input
        autoComplete="off"
        
        name="device.price"
        onChange={handleChange}
        value={device.price}
        type="number"
      />
    </label>
    
    <label
      className="line-label"
    >Downpayment: 
      <input
        autoComplete="off"
        
        onChange={handleChange}
        name='device.downpayment'
        value={device.downpayment}
        type="number"
      />
    </label>
    
    <label
      className="line-label"
    >Trade In Credit: 
      <input
        type="number"
        autoComplete="off"
        
        onChange={handleChange}
        name='device.tradeInCredit'
        value={device.tradeInCredit}
      />
    </label>
    
    <label
      className="line-label"
    >Due Today: 
      <input
        type="number"
        autoComplete="off"
        
        onChange={handleChange}
        name="device.dueToday"
        value={device.dueToday}
      />
    </label>
    
    <label
      className="line-label"
    >Due Monthly: 
      <input
        type="number"
        autoComplete="off"
        
        onChange={handleChange}
        name="device.dueMonthly"
        value={device.dueMonthly}
      />
    </label>


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

      .line-attrs,
      .device-attrs,
      .plan-attrs,
      .protection-attrs {
        display: flex;
        flex-flow: column wrap;
        gap: 2rem;
        padding: 2rem 0;
      }
    `}</style>
  </div>
  )
}