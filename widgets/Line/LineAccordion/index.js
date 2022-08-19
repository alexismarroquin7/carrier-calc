import { DeviceAccordionRow } from "./DeviceAccordionRow"
import { PlanAccordionRow } from "./PlanAccordionRow"
import { useToggle } from "../../../hooks";
import { useDispatch } from "react-redux";
import { quoteSlice } from "../../../store/slices/quote-slice";
import { ProtectionAccordionRow } from "./ProtectionAccordionRow";

export const LineAccordion = ({ line }) => {

  const { active: deviceEditMode, toggle: toggleDeviceEditMode } = useToggle();
  const { active: planEditMode, toggle: togglePlanEditMode } = useToggle();
  const { active: protectionEditMode, toggle: toggleProtectionEditMode } = useToggle();

  const dispatch = useDispatch();
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value })
    switch(name){
      case 'name':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            name: value
          }
        }))
        break;
        
      case 'phoneNumber':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            phoneNumber: value
          }
        }))
        break;
      
      case 'device.name':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            device: {
              ...line.device,
              name: value
            }
          }
        }))
        break;
      
      case 'device.price':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            device: {
              ...line.device,
              price: value
            }
          }
        }))
        break;
      
      case 'device.downpayment':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            device: {
              ...line.device,
              downpayment: value
            }
          }
        }))
        break;
      
      case 'device.tradeInCredit':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            device: {
              ...line.device,
              tradeInCredit: value
            }
          }
        }))
        break;
      
      case 'device.dueToday':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            device: {
              ...line.device,
              dueToday: value
            }
          }
        }))
        break;
      
      case 'device.dueMonthly':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            device: {
              ...line.device,
              dueMonthly: value
            }
          }
        }))
        break;
      
      case 'plan.name':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            plan: {
              ...line.plan,
              name: value
            }
          }
        }))
        break;
      
      case 'plan.title':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            plan: {
              ...line.plan,
              title: value
            }
          }
        }))
        break;
      
      case 'plan.dueMonthly':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            plan: {
              ...line.plan,
              dueMonthly: value
            }
          }
        }))
        break;
      
      case 'protection.name':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            protection: {
              ...line.protection,
              name: value
            }
          }
        }))
        break;
      
      case 'protection.title':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            protection: {
              ...line.protection,
              title: value
            }
          }
        }))
        break;
      
      case 'protection.dueToday':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            protection: {
              ...line.protection,
              dueToday: value
            }
          }
        }))
        break;
      
      case 'protection.dueMonthly':
        dispatch(quoteSlice.actions.updateLineById({
          lineId: line.id, 
          changes: {
            ...line,
            protection: {
              ...line.protection,
              dueMonthly: value
            }
          }
        }))
        break;


      default:
        throw Error(`unknown e.target.name: ${name}`);
    }
  }

  const lineName = line.name;
  const linePhoneNumber = line.phoneNumber;

  return (
    <div
      className="line-accordion"
    >
      <div
        className="line-name-and-phone"
      >
        <label>Name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={line.name}
          />
        </label>
        <label>Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            onChange={handleChange}
            value={line.phoneNumber}
          />
        </label>
      </div>
      <DeviceAccordionRow 
        device={line.device}
        active={deviceEditMode} 
        toggle={toggleDeviceEditMode}
        handleChange={handleChange}
        line={line}
      />
      <PlanAccordionRow
        plan={line.plan}
        active={planEditMode} 
        toggle={togglePlanEditMode}
        handleChange={handleChange}
      />
      <ProtectionAccordionRow
        protection={line.protection}
        active={protectionEditMode} 
        toggle={toggleProtectionEditMode}
        handleChange={handleChange}
      />
      <style jsx>{`
        .line-accordion {
          display: flex;
          width: 100%;
          flex-flow: column wrap;
          gap: 1rem;
        }

        .line-name-and-phone {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          gap: 1rem;
        }

        label {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          gap: .5rem;
        }
        
        input {
          width: 100%;
          border-radius: 1rem;
          padding: 1rem;
          background-color: var(--dark-blue);
          border: .2rem solid var(--teal);
          color: var(--teal);
        }
      `}</style>
    </div>
  ) 
}