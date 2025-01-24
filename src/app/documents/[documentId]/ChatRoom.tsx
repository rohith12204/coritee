import React from 'react';

interface ChatRoomProps {
  onClose: () => void;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-[400px] h-[500px] p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          Back
        </button>
        <div className="h-full flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold mb-4">Chat Room</h2>
          <p>Welcome to the chat room! This is where your chat interface will go.</p>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
