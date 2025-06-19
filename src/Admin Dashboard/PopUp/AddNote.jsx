import React, { useState } from 'react';

export default function AddNoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    description: '',
  });

  const toggleModal = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Note created:', formData);
    toggleModal(); // Close modal after submit
  };

  return (
    <div className="relative">
      {/* Button to open modal */}
      <button 
        onClick={toggleModal} 
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        New Note
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-lg relative">
            <button 
              onClick={toggleModal} 
              className="absolute top-3 right-3 text-gray-500"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">Add Note</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text"
                name="title"
                placeholder="Title"
                className="w-full border px-3 py-2 rounded"
                onChange={handleChange}
              />
              <input 
                type="text"
                name="category"
                placeholder="Category"
                className="w-full border px-3 py-2 rounded"
                onChange={handleChange}
              />
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="block text-sm text-gray-500">Start Date</label>
                  <input 
                    type="date"
                    name="startDate"
                    className="w-full border px-2 py-1 rounded"
                    onChange={handleChange}
                  />
                  <input 
                    type="time"
                    name="startTime"
                    className="w-full border px-2 py-1 mt-1 rounded"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm text-gray-500">End Date</label>
                  <input 
                    type="date"
                    name="endDate"
                    className="w-full border px-2 py-1 rounded"
                    onChange={handleChange}
                  />
                  <input 
                    type="time"
                    name="endTime"
                    className="w-full border px-2 py-1 mt-1 rounded"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <textarea 
                name="description"
                placeholder="Description"
                className="w-full border px-3 py-2 rounded"
                rows="3"
                onChange={handleChange}
              ></textarea>
              <button 
                type="submit" 
                className="bg-orange-500 text-white w-full py-2 rounded"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
