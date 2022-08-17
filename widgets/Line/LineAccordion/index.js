import { DeviceAccordionRow } from "./DeviceAccordionRow"
import { useToggle } from "../../../hooks";

export const LineAccordion = ({expandAll, line}) => {

  const {active: deviceEditMode, toggle: toggleDeviceEditMode } = useToggle();
  
  return (
    <div
      className="line-accordion"
    >
      <DeviceAccordionRow device={line.device} active={expandAll === true || deviceEditMode === true} toggle={toggleDeviceEditMode}/>
      <style jsx>{`
        .line-accoridon {
          display: flex;
          width: 100%;
        }
      `}</style>
    </div>
  ) 
}