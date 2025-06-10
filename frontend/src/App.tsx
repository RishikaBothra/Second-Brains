import { PlusIcon } from "./components/icons/Plusicon";
import { ShareIcon } from "./components/icons/Shareicon";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";

function App() {
  function handleShareBrain() {
    console.log("Share Brain clicked");
  }

  return (
    <div className="">
      <Button variant="secondary" text="Share Brain" onclick={handleShareBrain} starticon={<ShareIcon />} />
      <Button variant="primary" text="Add Content" onclick={handleShareBrain} starticon={<PlusIcon />} />
      <Card type="youtube" title="YouTube Video" link="https://www.youtube.com/watch?v=TTeOohNwqEw" />
      <Card type="twitter" title="Twitter Post" link="https://x.com/jm7Jimin/status/1932262991430566023/photo/" />
    </div>
  )
}

export default App
