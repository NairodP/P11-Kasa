import { useState } from "react";

// Hook personnalisé useToggle
export const useToggle = () => {
  // État local pour stocker la valeur de l'état
  const [status, setStatus] = useState(false);

  // Fonction pour basculer l'état entre true et false
  const toggleStatus = () => {
    setStatus((prevStatus) => !prevStatus);
  };

  // Retourne un objet contenant l'état actuel et la fonction de basculement
  return { status, toggleStatus };
};