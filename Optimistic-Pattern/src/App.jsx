//import OptimisticPattern from "./components/OptimisticPattern"
import OptimisticPatternTwo from "./components/OptimisticPatternTwo"

const App = () => {
  return (
    <div>
      <h1>Optimistic Pattern</h1>
      <OptimisticPatternTwo postId={123} />
    </div>
  )
}

export default App