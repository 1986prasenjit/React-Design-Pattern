// import ThemeToggler from "./components/ThemeToggler"
// import UIToggler from "./components/UIToggler"

// const App = () => {
//   return (
//     <div>
//       <ThemeToggler />
//       <UIToggler />
//     </div>
//   )
// }

// export default App

import TextHeader from "./components/TextHeader";
import TextParagraph from "./components/TextPara";
import withRedBorder from "./Higher-Order-Component/WithRedBorder";

const BorderedHeader = withRedBorder(TextHeader);
const BorderedParagraph = withRedBorder(TextParagraph);

const App = () => {
  return (
    <div>
      <BorderedHeader title="Hello Shreya How r u"/>
      <BorderedParagraph text="This is a simple paragraph of text." />
    </div>
  );
};

export default App;