import { useDispatch, useSelector } from "react-redux";
import { useToggle } from "../../../hooks";
import { AccountPlanAccordionRow } from "./AccountPlanAccordionRow";
import { AccountProtectionAccordionRow } from "./AccountProtectionAccordionRow";
import { quoteSlice } from "../../../store/slices/quote-slice";

export const AccountAccordion = () => {
  const { active: editAccountPlanActive, toggle: toggleEditAccountPlan } = useToggle();
  const { active: editAccountProtectionActive, toggle: toggleEditAccountProtection } = useToggle();
  const { quote } = useSelector(s => {
    const [q] = s.quote.list.filter(quote => quote.id === s.quote.selected.quote.id);
    return {
      quote: q
    }
  })
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const {name, value} = e.target;
    switch(name){
      case 'account.plan.name':
        dispatch(quoteSlice.actions.updateSelectedQuote({
          ...quote,
          account: {
            ...quote.account,
            plan: {
              ...quote.account.plan,
              name: value
            }
          }
        }));
        break;
      case 'account.plan.title':
        dispatch(quoteSlice.actions.updateSelectedQuote({
          ...quote,
          account: {
            ...quote.account,
            plan: {
              ...quote.account.plan,
              title: value
            }
          }
        }));
        break;
      case 'account.plan.dueMonthly':
        dispatch(quoteSlice.actions.updateSelectedQuote({
          ...quote,
          account: {
            ...quote.account,
            plan: {
              ...quote.account.plan,
              dueMonthly: value
            }
          }
        }));
        break;
      case 'account.protection.name':
        dispatch(quoteSlice.actions.updateSelectedQuote({
          ...quote,
          account: {
            ...quote.account,
            protection: {
              ...quote.account.protection,
              name: value
            }
          }
        }));
        break;
      case 'account.protection.title':
        dispatch(quoteSlice.actions.updateSelectedQuote({
          ...quote,
          account: {
            ...quote.account,
            protection: {
              ...quote.account.protection,
              title: value
            }
          }
        }));
        break;
      case 'account.protection.dueMonthly':
        dispatch(quoteSlice.actions.updateSelectedQuote({
          ...quote,
          account: {
            ...quote.account,
            protection: {
              ...quote.account.protection,
              dueMonthly: value
            }
          }
        }));
        break;
      default:
        throw Error(`unkown e.target.name: ${name}`);
    }
  }
  return (
    <div
      className="account-accordion"
    >
      <AccountPlanAccordionRow
        active={editAccountPlanActive}
        toggle={toggleEditAccountPlan}
        handleChange={handleChange}
        plan={quote.account.plan}
      />
      <AccountProtectionAccordionRow
        active={editAccountProtectionActive}
        toggle={toggleEditAccountProtection}
        handleChange={handleChange}
        protection={quote.account.protection}
      />

      <style jsx>{`
        .account-accordion {
          display: flex;
          flex-flow: column nowrap;
          gap: 1rem;
        }
      `}</style>
    </div>
  )
}