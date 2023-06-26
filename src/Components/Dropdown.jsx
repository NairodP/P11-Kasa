import "/src/css/Components/Dropdown.css";
import { createContext, useContext } from "react";
import { useToggle } from "/src/hooks/useToggle.jsx";

// Create context api
const DropdownContext = createContext();
const { Provider } = DropdownContext;

// Composant Dropdown
export default function Dropdown (props) {
  // console.log(props);
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

// Composant Header du dropdown
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

// Composant Content du dropdown
function DropdownContent({ children }) {
  console.log(children);
  const { expand } = useContext(DropdownContext);

  return <>{expand && <div className="content">{children}</div>}</>;
}

// Composant Icon
const DropdownIcon = ({ iconOpened, iconClosed }) => {
  const { expand } = useContext(DropdownContext);
  return <span>{expand ? iconOpened : iconClosed}</span>;
};

// Le composant Dropdown reçoit les propriétés title et content en props. 
// Il utilise le hook personnalisé "useToggle" pour gérer l'état d'expansion du menu déroulant. Les valeurs expand et toggleExpand sont fournies par le hook useToggle et sont encapsulées dans le contexte DropdownContext en tant que valeur.
// "useContext" est un hook qui permet d'accéder au contexte d'une appli. Le contexte est un mécanisme permettant de partager des données entre plusieurs composants sans avoir à les transmettre explicitement de parent en enfant.
// On créé le contexte avec createContext() et on lui fourni ensuite des valeurs avec "Provider". On l'utilise ensuite avec "useContext".
// Le composant DropdownHeader représente l'en-tête du menu déroulant. Il utilise le hook useContext pour accéder à l'état d'expansion et à la fonction de basculement à partir du contexte DropdownContext. Lorsque le bouton est cliqué, la fonction toggleExpand est appelée.
// Le composant DropdownContent qui représente le contenu du menu déroulant. Il utilise le hook useContext pour accéder à l'état d'expansion à partir du contexte DropdownContext. Le contenu est rendu uniquement si expand est true.
// Le composant DropdownIcon qui représente l'icône du menu déroulant. Il utilise le hook useContext pour accéder à l'état d'expansion à partir du contexte DropdownContext. L'icône affichée dépend de la valeur de expand.