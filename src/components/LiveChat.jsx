// import React from "react";

// const LiveChat = () => {
//   return (
//     <div className="w-full bg-white p-8 rounded-lg shadow-md border border-gray-300 max-w-sm  text-center flex flex-col items-center gap-24">
//       <h2 className="text-lg font-semibold mb-4">Live Chat</h2>
//       <div className="flex flex-col items-center justify-center mb-6">
//         <p className="text-2xl font-bold">24/7</p>
//         <p className="text-xl">Live support</p>
//       </div>
//       <button className="bg-purple-600 hover:bg-basic-100 transition duration-500 mt-4 text-white py-3 px-6 rounded-xl flex items-center justify-center">
//         <span>Chat Now</span>
//         <svg
//           className="w-6 h-6 ml-2"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V10a2 2 0 012-2h2m5-3h2a2 2 0 012 2v1a2 2 0 01-2 2h-1a2 2 0 00-2 2v1m0 0a2 2 0 01-2 2h-1a2 2 0 01-2-2v-1a2 2 0 012-2h1m0 0V9a2 2 0 00-2-2h-1a2 2 0 00-2 2v1"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default LiveChat;
import { useCallback } from "react";
import Talk from "talkjs";
import { Session, Chatbox } from "@talkjs/react";

function LiveChat() {
  const syncUser = useCallback(
    () =>
      new Talk.User({
        id: "Haider",
        name: "Haider",
        email: "malikhaiderali33@example.com",
        photoUrl: "https://talkjs.com/new-web/avatar-4.jpg",
        welcomeMessage: "Hi!",
      }),
    []
  );

  const syncConversation = useCallback(session => {
    // JavaScript SDK code here
    const conversation = session.getOrCreateConversation("new_conversation");

    const other = new Talk.User({
      id: "Shehzad",
      name: "Shehzad Shifa",
      email: "shehzadshifa@gmail.com",
      photoUrl: "https://talkjs.com/new-web/avatar-8.jpg",
      welcomeMessage: "Hey, how can I help?",
    });
    conversation.setParticipant(session.me);
    conversation.setParticipant(other);

    return conversation;
  }, []);

  return (
    <Session appId="teuBfMXL" syncUser={syncUser}>
      <Chatbox
        syncConversation={syncConversation}
        style={{ width: "50%", height: "500px" }}
      ></Chatbox>
    </Session>
  );
}

export default LiveChat;
