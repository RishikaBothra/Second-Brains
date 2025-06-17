import { useState } from "react";
import { CreateContentModal } from "../CreateContentModal";
import { PlusIcon } from "../icons/Plusicon";
import { ShareIcon } from "../icons/Shareicon";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Slidebar } from "../ui/slidebar";

 export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(true);
  function handleShareBrain() {
    console.log("Share Brain clicked");
  }

  return (
    <div>
      <Slidebar />


      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2 border-gray-100">

        <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />
        <div className="flex justify-end gap-4 mb-4">
          <Button 
            variant="secondary"
            text="Share Brain"
            starticon={<ShareIcon />}
          />
          <Button onClick={() =>
            setModalOpen(true)
          } 
            variant="primary"
            text="Add Content"
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

export default Dashboard;
