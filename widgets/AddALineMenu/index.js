import { useToggle } from "../../hooks";
import { useDispatch } from "react-redux";
import { quoteSlice } from "../../store/slices/quote-slice";


const deviceTypes = [
  'Smartphone',
  'Tablet',
  'Watch',
  'Hotspot'
]

export const AddALineMenu = () => {

  const {
    active,
    toggle
  } = useToggle();

  const dispatch = useDispatch();

  return (
  <div
    className="add-a-line-menu"
  >
    <button
      onClick={(e) => {
        e.preventDefault();
        toggle();
      }}
      className="add-a-line-button"
    >Add A Line</button>
    <div
      className={`add-a-line-menu-content ${active ? '' : 'hidden'}`}
    >
      {deviceTypes.map(deviceType => (
        <button
          key={deviceType}
          onClick={(e) => {
            e.preventDefault()
            dispatch(quoteSlice.actions.addALine(deviceType.toLowerCase()));
            toggle();
          }}
          className="add-a-line-button-option"
        >{deviceType}</button>  
      ))}
    </div>
    
    <style jsx>{`
      .add-a-line-menu {
        position: relative;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
      }

      .add-a-line-menu-content {
        position: absolute;
        z-index: 999;
        display: flex;
        flex-flow: column wrap;
        top: 4rem;
      }

      .add-a-line-menu-content.hidden {
        display: none;
      }

      .add-a-line-button {
        border-radius: 2rem;
        padding: 1rem 2rem;
        border: 1px solid var(--google-blue);
        background-color: var(--google-blue);
        color: white;
      }
      
      .add-a-line-button-option:nth-child(1) {
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
      }
      
      .add-a-line-button-option:last-child {
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }

      .add-a-line-button-option {
        padding: 1rem 2rem;
        border: 1px solid #eee;
        border-top: 1px solid #ddd;
      }
    `}</style>
  </div>
  );
}