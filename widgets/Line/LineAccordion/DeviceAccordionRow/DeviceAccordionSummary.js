import { KeyboardArrowDown } from "@mui/icons-material"

export const DeviceAccordionSummary = ({ device, active }) => {
  return <div
    className="device-accordion-summary"
  >

    <p>{device.name ? device.name : 'Device'}</p>
    <div
      className="device-accordion-summary-icon"
    >
      <KeyboardArrowDown fontSize="inherit"/>
    </div>
    
    <style jsx>{`
      .device-accordion-summary {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      .device-accordion-summary-icon {
        display: flex;
        font-size: 3rem;
        border-radius: 1rem;
        border: .2rem solid var(--teal);
        color: var(--teal);
      }
    `}</style>
  </div>
}