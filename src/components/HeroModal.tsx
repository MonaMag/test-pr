import { useState } from "react";

type HeroModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string, discription: string) => void;
};

export default function HeroModal({ isOpen, onClose, onSave }: HeroModalProps) {
  const [name, setName] = useState("");
  const [discription, setDiscription] = useState("");

  const handleSave = () => {
    onSave(name, discription);
    setName("");
    setDiscription("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4">Add Hero</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full border rounded p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <textarea
          value={discription}
          onChange={(e) => setDiscription(e.target.value)}
          placeholder="Description"
          className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}