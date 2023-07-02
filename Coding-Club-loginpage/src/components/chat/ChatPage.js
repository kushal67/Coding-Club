import { Box } from "@chakra-ui/layout";
import { ChatState } from "../../context/ChatProvider.js";
import SideDrawer from "./extras/SideDrawer.js";
import MyChats from "./MyChats.js";
const ChatPage=()=>{
    const {user}=ChatState();

    return  <div style={{width: "100%"}}>
        {user && <SideDrawer/>}
    <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats/>}
    </Box>
    </div>
}