import { useState } from "react";

const Toggler = ({ render }) => {
  const [onState, setOnState] = useState(false);

  function toggleHandler() {
    setOnState((prevState) => !prevState);
  }
  return render({ onState, toggleHandler });
};

export default Toggler;
