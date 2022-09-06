import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import { useToggle } from '../../hooks/useToggle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import TabletIcon from '@mui/icons-material/Tablet';
import WatchIcon from '@mui/icons-material/Watch';
import WifiIcon from '@mui/icons-material/Wifi';
import ShieldIcon from '@mui/icons-material/Shield';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { useDispatch, useSelector } from 'react-redux';
import { quoteSlice } from '../../store/slices/quote-slice';

const DynamicIcon = ({type}) => {
  switch(type) {
    case 'smartphone':
      return <SmartphoneIcon fontSize="inherit"/>
    case 'tablet':
      return <TabletIcon fontSize="inherit"/>
    case 'watch':
      return <WatchIcon fontSize="inherit"/>
    case 'hotspot':
      return <WifiIcon fontSize="inherit"/>
    default: throw Error(`unkown type: ${type}`);
  }
}

const lineActions = [
  {
    title: 'Apply to ALL line.type lines',
    replaceText: true,
    className: '',
    options: [
      {
        title: 'Device',
        dynamicIcon: true,
        icon: () => <></>,
        type: 'apply-device-to-all-matching-lines',
        dynamicText: true
      },
      {
        title: 'Plan',
        icon: () => <SignalCellularAltIcon fontSize='inherit'/>,
        type: 'apply-plan-to-all-matching-lines',
        dynamicText: true,
      },
      {
        title: 'Protection',
        icon: () => <ShieldIcon fontSize='inherit'/>,
        type: 'apply-protection-to-all-matching-lines',
        dynamicText: true,
      },
    ]
  },
  {
    title: 'Quick actions',
    className: '',
    options: [
      {
        title: 'Duplicate',
        className: '',
        icon: () => <ContentCopyIcon fontSize="inherit" />,
        type: 'duplicate',
        dynamicText: false,
      },
      {
        title: 'Delete',
        className: 'delete-button',
        icon: () => <DeleteForeverIcon fontSize="inherit" />,
        type: 'delete',
        dynamicText: false,
      }
    ]
  }
]

const handleLineActionButtonText = (title, line) => {
  switch(title){
    case 'Device':
      if(line.device.name === '') {
        return 'None';
      } else if(line.device.name === 'other' && line.device.title === ''){
        return 'Other';
      } else if(line.device.name === 'other' && line.device.title.length > 0){
        return line.device.title;
      } else if(line.device.name.length > 0 && line.device.name !== 'other'){
        return line.device.name;
      } else {
        throw Error();
      }
      
      
    case 'Plan':
      if(line.plan.name === '') {
        return 'None';
      } else if(line.plan.name === 'other' && line.plan.title === ''){
        return 'Other';
      } else if(line.plan.name === 'other' && line.plan.title.length > 0){
        return line.plan.title;
      } else if(line.plan.name.length > 0 && line.plan.name !== 'other'){
        return line.plan.name;
      } else {
        throw Error();
      }
    case 'Protection':
      if(line.protection.name === '') {
        return 'None';
      } else if(line.protection.name === 'other' && line.protection.title === ''){
        return 'Other';
      } else if(line.protection.name === 'other' && line.protection.title.length > 0){
        return line.protection.title;
      } else if(line.protection.name.length > 0 && line.protection.name !== 'other'){
        return line.protection.name;
      } else {
        throw Error();
      }
    default: throw Error(`unkown action title: ${title}`)
  }
}

export const LineActionsMenu = ({line}) => {
  const { active, toggle } = useToggle();
  const dispatch = useDispatch();
  const { lineClipboard } = useSelector(s => {
    return {
      lineClipboard: s.quote.lineClipboard
    }
  })

  const handleToggle = () => {
    toggle();
    if(active){
      document.querySelector('body').style.overflow = 'auto';
    } else {
      document.querySelector('body').style.overflow = 'hidden';
    }
  }
  
  const handleDispatch = ({type}) => {
    switch(type) {    
      case 'apply-device-to-all-matching-lines':
        dispatch(quoteSlice.actions.applySameDevice(line));
        break;
      case 'apply-plan-to-all-matching-lines':
        dispatch(quoteSlice.actions.applySamePlan(line));
        break;
      case 'apply-protection-to-all-matching-lines':
        dispatch(quoteSlice.actions.applySameProtection(line));
        break;
      case 'copy':
        dispatch(quoteSlice.actions.copyLineToClipboard(line));
        break;
      case 'paste':
        if(lineClipboard.id === null) break;
        dispatch(quoteSlice.actions.pasteLineFromClipboard(line));
        break;
      case 'duplicate':
        dispatch(quoteSlice.actions.duplicateLine(line));
        break;
      case 'delete':
        dispatch(quoteSlice.actions.deleteLineFromSelectedQuote({lineId: line.id}));
        break;
      default: throw Error(`unkown type: ${type}`);
    }
  }

  return <div className='line-actions-menu'>
    <div className='line-actions-menu-icon'>
      <MoreVertIcon fontSize="inherit"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleToggle();
        }}
      />
    </div>
    
    <div 
      className={`line-actions-menu-wrapper ${active ? "" : "line-actions-menu-hidden"}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleToggle();
      }}
    >
      <div
        className="line-actions-menu-content"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className='close-line-actions-menu'>
          <p>Line Actions</p>
          <CloseIcon
            fontSize="inherit"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleToggle();
            }}
          />
        </div>
        {/* <div>
          <p>Apply to ALL {line.type} lines</p>
        </div> */}
        {lineActions.map(lineAction => {
          
          return (
          <div
            key={lineAction.title}
            className='line-action-group'
          >    
            <p className='line-action-group-title'>{lineAction.replaceText ? lineAction.title.replace('line.type', line.type) : lineAction.title}</p>
            
            {lineAction.options.map(action => {
              const {icon: Icon} = action;
              return (
                <button
                  key={action.type}
                  onClick={(e)=> {
                    e.preventDefault();
                    e.stopPropagation();
                    handleDispatch(action);
                    handleToggle();
                  }}
                  className={`line-action-button ${action.className}`}
                >
                  {!action.dynamicIcon && <Icon/>}
                  {action.dynamicIcon && <DynamicIcon type={line.type} />}
                  <p>
                    {action.dynamicText ? handleLineActionButtonText(action.title, line) : action.title}
                  </p>
                </button>
              )
            })}
          </div>
          )
        })}
      </div>
    </div>

    <style jsx>{`
      .line-actions-menu-icon {
        font-size: 3rem;
        color: var(--teal);
        border: .2rem solid var(--teal);
        display: flex;
        border-radius: 1rem;
        transition: all .2s;
      }

      .line-actions-menu-wrapper {
        background-color: rgba(0,0,0,.75);
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 1002;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
      }
      
      .line-actions-menu-hidden {
        display: none;
      }
      
      .line-actions-menu-content {
        background-color: var(--grayish-blue);
        width: 100%;
        
        position: fixed;
        bottom: 0;
        top: 25%;
        gap: 2rem;
        display: flex;
        flex-flow: column nowrap;
        overflow-y: scroll;
      }

      .close-line-actions-menu {
        padding: 2rem;
        font-size: 3rem;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        color: var(--google-red);
        width: 100%;
        position: sticky;
        top: 0;
        background-color: var(--grayish-blue);
      }

      .close-line-actions-menu p {
        color: var(--teal);
      }

      p {
        color: var(--white);
        width: 50%;
        text-align: left;
      }

      .line-action-group {
        display: flex;
        flex-flow: column wrap;
        padding: 0 2rem;
      }
      
      .line-action-group-title {
        padding: .5rem;
        color: var(--teal);
      }

      .line-action-button {
        padding: 1rem;       
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        background-color: var(--dark-blue);
        color: var(--white);
        border: .2rem solid var(--grayish-blue);
        font-size: 3rem;
        font-weight: bold;
        gap: 1rem;
      }

      .line-action-group > :nth-child(2) {
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
      }
      
      .line-action-group > :last-child {
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }

      
    `}</style>
  </div>
}