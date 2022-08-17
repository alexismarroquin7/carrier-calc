import { KeyboardArrowDown } from "@mui/icons-material"

export const DeviceAccordionSummary = ({ device, active, toggle }) => {
  return <div
    className="device-accordion-summary"
  >
    <div
      className="device-accordion-summary-section"
    >
      <p>{device.name ? device.name : 'Device'}</p>
      <div
        className={`device-accordion-summary-icon ${active ? 'active' : ''}`}
      >
        <KeyboardArrowDown 
          fontSize="inherit"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggle();
          }}
        />
      </div>
    </div>

    <div
      className="device-accordion-summary-section"
    >
      <p className="device-due-text device-due-text--today">${Number(device.dueToday).toFixed(2)} today</p>
      <p className="device-due-text device-due-text--monthly">${Number(device.dueMonthly).toFixed(2)}/month</p>
    </div>
    
    <style jsx>{`
      .device-accordion-summary {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
      }
      
      .device-accordion-summary-section {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
      }

      .device-accordion-summary-icon {
        display: flex;
        font-size: 3rem;
        border-radius: 1rem;
        border: .2rem solid var(--teal);
        color: var(--teal);
        transform-origin: center;
        transition: all .2s;
      }

      .device-accordion-summary-icon.active {
        transform: rotate(-180deg);
      }

      .device-due-text {
        padding: .5rem 1rem;
        border: 1px solid var(--teal);
        border-radius: 1rem;
        background-color: var(--teal);
        color: var(--dark-blue);
      }

      .device-due-text--today {
        background-color: transparent;
        color: var(--teal);
      }
    `}</style>
  </div>
}