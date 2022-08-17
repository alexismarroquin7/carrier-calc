import { DeviceAccordionSummary } from "./DeviceAccordionSummary";
import { DeviceAccordionForm } from "./DeviceAccordionForm"

export const DeviceAccordionRow = ({ device, active, toggle, handleChange }) => {
  return <div
    className="device-accordion-row"
  >

    <DeviceAccordionSummary 
      active={active}
      toggle={toggle}
      device={device}
    />
    
    {active && <DeviceAccordionForm
      device={device}
      handleChange={handleChange}
    />}

    <style jsx>{`
      .device-accordion-row {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
      }
    `}</style>
  </div>
}