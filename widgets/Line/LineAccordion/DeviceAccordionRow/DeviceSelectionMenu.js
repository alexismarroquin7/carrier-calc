import { useToggle } from "../../../../hooks";
import { DeviceSelectionForm } from "./DeviceSelectionForm";

export const DeviceSelectionMenu = ({line}) => {
  const {active, toggle} = useToggle();

  const handleToggle = () => {
    toggle();
    if(active){
      document.querySelector('body').style.overflow = 'auto';
    } else {
      document.querySelector('body').style.overflow = 'hidden';

    }
  }

  return <div
    className="device-selection-menu"
  >
    <button
      className="device-selection-menu-button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleToggle();
      }}
    >Select From Menu</button>

    <div 
      className={`device-selection-menu-wrapper ${active ? '' : 'hidden'}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleToggle();
      }}
    >
      <div
        className="device-selection-menu-content"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <DeviceSelectionForm line={line} toggle={handleToggle}/>
      </div>
    </div>

    <style jsx>{`
      .device-selection-menu-button {
        width: 100%;
        padding: 1rem;
        border: .2rem solid var(--teal);
        border-radius: 1rem;
        color: var(--dark-blue);
        background-color: var(--teal);
        font-weight: bold;
      }
      .device-selection-menu-wrapper {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0,0,0,.75);
        transition: all .2s;
        z-index: 1100;
      }
      
      .device-selection-menu-wrapper.hidden {
        display: none;
      }

      .device-selection-menu-content {
        position: fixed;
        bottom: 0;
        top: 10%;
        right: 0;
        left: 0;
        overflow-y: scroll;
        background-color: var(--grayish-blue);
      }
    `}</style>
  </div>
}