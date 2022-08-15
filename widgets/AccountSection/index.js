import { useToggle } from "../../hooks";
import { KeyboardArrowRight, KeyboardArrowDown } from '@mui/icons-material';
import { AccountSectionCollapsed } from "./AccountSectionCollapsed";
import { AccontSectionForm } from "./AccountSectionForm";

export const AccountSection = () => {
  
  const { active: editMode, toggle: toggleEditMode } = useToggle();
  
  return (
  <div
    className="account-section"
  >
    <div className="account-section-top">
      <h5>Account</h5>
      <div 
        className="account-edit-button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleEditMode();
          e.target.scrollIntoView(true);
        }}
      >
        {editMode ? (
          <KeyboardArrowDown
            fontSize="inherit"  
          />
        ) : (
          <KeyboardArrowRight
            fontSize="inherit"
          /> 
        )}
      </div>
    </div>

    {editMode ? <AccontSectionForm/> : <AccountSectionCollapsed/>}

    <style jsx>{`
      .account-section {
        border: 1px solid #eee;
        border-radius: 2rem;
        width: 90%;
        padding: 2rem;
        display: flex;
        flex-flow: column wrap;
        gap: 2rem;
      }

      .account-section-top {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
      }

      .account-edit-button {
        color: var(--google-blue);
        font-size: 4rem;
        display: flex;
        flex-flow: row wrap;
      }
    `}</style>
  </div>
  )
}