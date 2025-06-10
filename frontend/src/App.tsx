import { PlusIcon } from "./components/icons/Plusicon";
import { ShareIcon } from "./components/icons/Shareicon";
import { Button } from "./components/ui/button";

function App() {
  function handleShareBrain() {
    console.log("Share Brain clicked");
  }

  return (
    <div className="">
      <Button variant="secondary" text="Share Brain" onclick={handleShareBrain} starticon={<ShareIcon/>} />
      <Button variant="primary" text="Add Content" onclick={handleShareBrain} starticon={<PlusIcon/>} />
    </div>
  )
}

export default App
