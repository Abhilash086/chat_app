import React from 'react'
import useConversation from '../../zustand/useConversation'

const Message = () => {
  const {selectedConversation} = useConversation();
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={selectedConversation.profilePic} alt="" />
            </div>
        </div>
        <div className='chat-bubble text-white bg-gray-700'>Hi what is up</div>
        <div className='chat-footer text-[#909090]'>12:42</div>
    </div>
  )
}

export default Message