import { useEffect } from 'react';
import {useSocketContext} from '../context/SocketContext';
import useConversation from '../zustand/useConversation';
import pingSound from '../assets/sounds/notification.mp3'

const useListenMessages = () => {
  const {socket, onlineUsers} = useSocketContext();
  const {messages, setMessages} = useConversation();

  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
      newMessage.shouldShake = true;
      const sound = new Audio(pingSound);
      sound.play();
      setMessages([...messages,newMessage])
    })

    return ()=> socket.off("newMessage")
  },[socket, messages, setMessages])
}

export default useListenMessages