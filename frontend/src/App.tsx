import { CreateContentModal } from "./components/CreateContentModal";
import { PlusIcon } from "./components/icons/Plusicon";
import { ShareIcon } from "./components/icons/Shareicon";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Slidebar } from "./components/ui/slidebar";

function App() {
  function handleShareBrain() {
    console.log("Share Brain clicked");
  }

  return (
    <div>
      <Slidebar />

      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2 border-gray-100">

        <CreateContentModal open={false} />
        <div className="flex justify-end gap-4 mb-4">
          <Button
            variant="secondary"
            text="Share Brain"
            onclick={handleShareBrain}
            starticon={<ShareIcon />}
          />
          <Button
            variant="primary"
            text="Add Content"
            onclick={handleShareBrain}
            starticon={<PlusIcon />}
          />
        </div>
        <div className="flex flex-wrap gap-4">
          <Card
            type="youtube"
            title="YouTube Video"
            link="https://www.youtube.com/watch?v=TTeOohNwqEw"
          />
          <Card
            type="twitter"
            title="Twitter Post"
            link="https://x.com/jm7Jimin/status/1932262991430566023/photo/"
          />
        </div>
      </div>
    </div>

  )
}

export default App
