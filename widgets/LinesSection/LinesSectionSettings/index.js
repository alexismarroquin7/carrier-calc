import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch, useSelector } from 'react-redux';
import { useToggle } from '../../../hooks';
import { quoteSlice } from '../../../store/slices/quote-slice';
export const LinesSectionSettings = () => {
  const { lineListView } = useSelector(s => s.quote.settings);
  const { active, toggle } = useToggle();
  const dispatch = useDispatch();
  
  const handleChange = e => {
    const { name } = e.target;
    
    switch(name){
      case 'lineListView':
        switch(e.target.id){
          case 'lineListView-column':
            dispatch(quoteSlice.actions.updateSettings({key: 'lineListView', value: 'column'}))
            break;
          case 'lineListView-row':
            dispatch(quoteSlice.actions.updateSettings({key: 'lineListView', value: 'row'}))
            break;
          default: throw Error();    
        }

        break;
      default: throw Error();
    }
  }

  return (
    <div className='lines-section-settings'>
      <button 
        className='line-settings-icon'
        onPointerDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggle();
        }}
      >
        <SettingsIcon fontSize='inherit'/>
      </button>
      <div
        className={`line-section-settings-modal ${active ? '' : 'hidden'}`}
        onPointerDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggle();
        }}
      >
        <div
          className='line-section-settings-modal-content'
          onPointerDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <div
            className='display-settings'
          >
            <p
              className='display-settings-title'
            >Display</p>
            
            <div
              className='display-settings-view-as'
            >
              <p>View As:</p>
              <div
                className='display-settings-view-as-options'
              >
                <label
                  htmlFor='lineListView-column'
                >
                  <input 
                    type="radio"
                    checked={lineListView === 'column'}
                    onChange={handleChange}
                    name="lineListView"
                    id='lineListView-column'
                  />
                  <div className={`fake-radio-button ${lineListView === 'column' ? 'checked' : ''}`}>
                  </div>
                  Column
                </label>

                <label
                  htmlFor='lineListView-row'
                >
                  <input 
                    type="radio"
                    checked={lineListView === 'row'}
                    onChange={handleChange}
                    name="lineListView"
                    id="lineListView-row"
                  />
                  <div className={`fake-radio-button ${lineListView === 'row' ? 'checked' : ''}`}>
                  </div>
                  Row
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>


      <style jsx>{`
        .line-settings-icon {
          font-size: 3rem;
          display: flex;
          background-color: transparent;
          border: 0;
          color: var(--white);
        }

        .lines-section-settings {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          justify-content: flex-end;
          padding: 1rem;
          border-radius: 1rem;
          border: .2rem solid var(--dark-blue);
          background-color: var(--dark-blue);
        }

        .line-section-settings-modal {
          position: fixed;
          background: rgba(0,0,0,.75);
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          width: 100%;
          flex-flow: column wrap;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }
        
        .line-section-settings-modal.hidden {
          display: none;
        }

        .line-section-settings-modal-content {
          width: 100%;
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
          background-color: var(--dark-blue);
          padding: 2rem;
          position: fixed;
          top: 40%;
          bottom: 0;
          left: 0;
          right: 0;
        }

        .display-settings {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: flex-start;
          color: var(--teal);
          border-radius: 1rem;
        }
        
        .display-settings-title {
          font-weight: bold;
          padding: 2rem 0;
        }
        
        .display-settings-view-as {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          align-items: flex-start;
          justify-content: space-between;
          padding: 2rem 0 2rem 2rem;
          border-top: .2rem solid var(--teal);
          border-bottom: .2rem solid var(--teal);
        }

        .display-settings-view-as-options {
          display: flex;
          flex-flow: column wrap;
          align-items: flex-start;
          border-radius: 1rem;
        }
        
        .display-settings-view-as-options label {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: flex-start;
          gap: 1rem;
          padding: 1rem;
        }

        .fake-radio-button {
          padding: 1rem;
          background-color: var(--dark-blue);
          border-radius: 1rem;
          border: .2rem solid var(--teal);
          transition: all .2s;
        }

        .fake-radio-button.checked {
          background-color: var(--teal);
        }

        .display-settings-view-as-options label input {
          display: none;
        }
        
      `}</style>
    </div>
  )
}