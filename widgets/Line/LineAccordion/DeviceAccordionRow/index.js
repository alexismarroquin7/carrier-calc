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
        display: flex;
        width: 100%;
      }
    `}</style>
  </div>
}