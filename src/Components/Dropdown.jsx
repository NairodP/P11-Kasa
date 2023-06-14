import "/src/css/Components/Dropdown.css";
import { createContext, useContext } from "react";
import { useToggle } from "/src/hooks/useToggle.jsx";

// Create context api
const DropdownContext = createContext();
const { Provider } = DropdownContext;

const Dropdown = (props) => {
  const title = props.title;
  const content = props.content;
  const { status: expand, toggleStatus: toggleExpand } = useToggle();

  const value = {
    expand,
    toggleExpand,
  };

  return (
    <Provider value={value}>
      <div className="Dropdown">
        <DropdownHeader>{title}</DropdownHeader>
        <DropdownContent>{content}</DropdownContent>
      </div>
    </Provider>
  );
};

// Header
function DropdownHeader({ children }) {
  const { expand, toggleExpand } = useContext(DropdownContext);

  return (
    <button onClick={toggleExpand}>
      {children}
      <DropdownIcon
        iconOpened = {<img src="/src/assets/icons/chevronUp.png" alt="Chevron Up" />}
        iconClosed={<img src="/src/assets/icons/chevronDown.png" alt="Chevron Down" />} />
    </button>
  );
}

// Content
function DropdownContent({ children }) {
  // console.log(children);
  const { expand } = useContext(DropdownContext);

  return <>{expand && <div className="content">{children}</div>}</>;
}

// Icon
const DropdownIcon = ({ iconOpened, iconClosed }) => {
  const { expand } = useContext(DropdownContext);
  return <span>{expand ? iconOpened : iconClosed}</span>;
};

export default Dropdown;
