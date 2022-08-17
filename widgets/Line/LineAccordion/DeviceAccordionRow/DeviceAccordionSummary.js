import { KeyboardArrowDown } from "@mui/icons-material"

export const DeviceAccordionSummary = ({ device, active, toggle }) => {
  return <div
    className="device-accordion-summary"
  >

    <h6>{device.name ? device.name : 'Device'}</h6>
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
    
    <style jsx>{`
      .device-accordion-summary {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
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
    `}</style>
  </div>
}