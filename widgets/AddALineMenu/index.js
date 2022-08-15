import { useToggle } from "../../hooks";
import { useDispatch } from "react-redux";
import { quoteSlice } from "../../store/slices/quote-slice";
import CloseIcon from '@mui/icons-material/Close';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import TabletIcon from '@mui/icons-material/Tablet';
import WatchIcon from '@mui/icons-material/Watch';
import WifiIcon from '@mui/icons-material/Wifi';

const deviceTypes = [
  {
    title: 'Smartphone',
    type: 'smartphone',
    icon: () => <SmartphoneIcon fontSize="inherit"/>
  },
  {
    title: 'Tablet',
    type: 'tablet',
    icon: () => <TabletIcon fontSize="inherit"/>
  },
  {
    title: 'Watch',
    type: 'watch',
    icon: () => <WatchIcon fontSize="inherit"/>
  },
  {
    title: 'Hotspot',
    type: 'hotspot',
    icon: () => <WifiIcon fontSize="inherit"/>
  },
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
      <div
        className={`add-a-line-menu-wrapper`}
      >
        <div className="close-icon">
          <h6>Add A Line</h6>
          <CloseIcon fontSize="inherit"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggle();
            }}
          />
        </div>
      
        {deviceTypes.map(deviceType => {
          const { icon: Icon } = deviceType;

          return (
          <button
            key={deviceType}
            onClick={(e) => {
              e.preventDefault()
              dispatch(quoteSlice.actions.addALine(deviceType.type));
              toggle();
            }}
            className="add-a-line-button-option"
          >
            <Icon/>    
            <p>{deviceType.title}</p>
          </button>
          )
        })}
      
      </div>
      
    </div>
    
    <style jsx>{`
      .add-a-line-menu {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
      }

      .add-a-line-menu-content {
        position: absolute;
        z-index: 999;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 1px solid blue;
      }

      .add-a-line-menu-content.hidden {
        display: none;
      }

      .add-a-line-menu-wrapper {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-flow: column wrap;
        background-color: white;
        box-shadow: 0 0 1rem black;
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
      }

      .add-a-line-button {
        border-radius: 2rem;
        padding: 1rem 2rem;
        border: 1px solid var(--google-blue);
        background-color: var(--google-blue);
        color: white;
      }
      
      .add-a-line-button-option {
        display: flex;
        flex-flow: row wrap;
        gap: 1rem;
        padding: 4rem 2rem;
        border: 1px solid #eee;
        border-top: 1px solid #ddd;
        align-items: center;
        font-size: 4rem;
        background-color: white;
      }

      .close-icon {
        color: var(--google-red);
        padding: 1rem;
        width: 100%;
        font-size: 4rem;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        background-color: #eee;
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
      }

      .close-icon h6 {
        color: black;
      }
    `}</style>
  </div>
  );
}