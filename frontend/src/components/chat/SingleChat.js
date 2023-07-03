// import React from "react";
// import { ChatState } from "../../context/ChatProvider";
// import { Box, Flex, Text } from "@chakra-ui/layout";
// import { ArrowBackIcon } from "@chakra-ui/icons";
// import { IconButton, Spinner, useToast } from "@chakra-ui/react";
// import { getSender, getSenderFull } from "./ChatLogics";
// import ProfileModal from "./extras/ProfileModal";
// import UpdateGroupChatModal from "./extras/UpdateGroupChatModal";

// const SingleChat = ({ fetchAgain, setFetchAgain }) => {
//   const { user, selectedChat, setSelectedChat } = ChatState();

//   return (
//     <div>
//       {selectedChat ? (
//         <>
//           <Flex flexDirection="row" justifyContent="flex-start">
//             <Text
//               pb={3}
//               px={2}
//               w="100%"
//               fontFamily="Work sans"
//               display="flex"
//               justifyContent={{ base: "space-between" }}
//               alignItems="center"
//             >
//               <IconButton
//                 position="absolute"
//                 left="4"
//                 display={{ base: "flex", md: "none" }}
//                 icon={<ArrowBackIcon />}
//                 onClick={() => setSelectedChat("")}
//               />
//               {
//               (!selectedChat.isGroupChat ? (
//                 <div>
//                   {getSender(user, selectedChat.users)}
//                   <ProfileModal
//                     user={getSenderFull(user, selectedChat.users)}
//                   />
//                 </div>
//               ) : (
//                 <>
//                   {selectedChat.chatName.toUpperCase()}
//                   {/* <UpdateGroupChatModal
//                     // fetchMessages={fetchMessages}
//                     fetchAgain={fetchAgain}
//                     setFetchAgain={setFetchAgain}
//                   /> */}
//                 </>
//               ))}
//             </Text>
//           </Flex>
//           <Box
//             display="flex"
//             flexDir="column"
//             // justifyContent="flex-end"
//             p={3}
//             bg="#E8E8E8"
//              w="1000%"
//              h="100%"
//             borderRadius="lg"
//             overflowY="hidden"
//           >
//                     {/* Message here */}

//           </Box>
//         </>
//       ) : (
//         <>

//           <Box
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             h="100%"
//           >
//             <Text fontSize="3xl" pb={3} fontFamily="Work sans" color="black">
//               Click on a user to start chatting
//             </Text>
//           </Box>
//         </>
//       )}
//     </div>
//   );
// };

// export default SingleChat;

import React from "react";
import { ChatState } from "../../context/ChatProvider";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { IconButton, Spinner, useToast } from "@chakra-ui/react";
import { getSender, getSenderFull } from "./ChatLogics";
import ProfileModal from "./extras/ProfileModal";
import UpdateGroupChatModal from "./extras/UpdateGroupChatModal";

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const { user, selectedChat, setSelectedChat } = ChatState();

  return (
    <Box display="flex" flexDirection="column" w="100%" h="100%" p={3} >
      {selectedChat ? (
        <Box display="flex" flexDirection="column" h="100%" w="100%" p={3} >
          <Flex flexDirection="row" justifyContent="space-between">
            {/* <Text
            bg="blue"
              pb={3}
              fontSize="xxx-large"
              px={2}
              w="100%"
              h="100%"
              fontFamily="Work sans"
              display="flex"
              justifyContent={{ base: "center" }}
              alignItems="center"
            > */}
              <IconButton
                position="absolute"
                left="4"
                display={{ base: "flex", md: "none" }}
                icon={<ArrowBackIcon />}
                onClick={() => setSelectedChat("")}
              />
              {!selectedChat.isGroupChat ? (
                <Box  w="100%" h="100%" display="flex"  justifyContent="space-between">
                  <Text fontWeight="bold" fontSize="xxx-large">
                  {getSender(user, selectedChat.users)}
                  </Text>
                  
                  <ProfileModal
                    user={getSenderFull(user, selectedChat.users)}
                  />
                </Box>
              ) : (
                <Box w="100%" h="100%" display="flex"  justifyContent="space-between" >
                  <Text fontWeight="bold" fontSize="xxx-large">
                  {selectedChat.chatName.toUpperCase()}
                  </Text>
                  
                  <UpdateGroupChatModal
                    // fetchMessages={fetchMessages}
                    // fetchAgain={fetchAgain}
                    // setFetchAgain={setFetchAgain}
                  />
                </Box>
              )}
            {/* </Text> */}
          </Flex>
          <Box
            display="flex"
            flexDirection="column"
            // justifyContent="flex-end"
            p={3}
            bg="#E8E8E8"
            w="100%"
            h="100%"
            minHeight="300px" // Adjust the minHeight as needed
            borderRadius="lg"
            overflowY="auto" // Use auto to enable vertical scrolling when the content overflows
          >
            {/* Messages here */}
          </Box>
        </Box>
      ) : (
        <>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            h="100%"
          >
            <Text fontSize="3xl" pb={3} fontFamily="Work sans" color="black">
              Click on a user to start chatting
            </Text>
          </Box>
        </>
      )}
    </Box>
  );
};

export default SingleChat;
