import { useState } from "react";
import { CreateContentModal } from "../CreateContentModal";
import { PlusIcon } from "../icons/Plusicon";
import { ShareIcon } from "../icons/Shareicon";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Slidebar } from "../ui/slidebar";
import { useContent } from "../../hooks/useContent";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents } = useContent();
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
          <Button
            onClick={() => setModalOpen(true)}
            variant="primary"
            text="Add Content"
            starticon={<PlusIcon />}
          />
        </div>
        <div className="flex flex-wrap gap-4">
          {contents && contents.length > 0 ? (
            contents.map((item) => (
              <Card
                key={item._id}
                id={item._id}
                type={item.type}
                title={item.title}
                link={item.link}
                description={item.description}
              />
            ))
          ) : (
            <p className="text-gray-600">No content added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
