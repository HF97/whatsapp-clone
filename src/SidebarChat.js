import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';
import db from './firebase';

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState('');
  const [messages, setMessages] = useState('');

  useEffect(() => {
    if(id) {
      db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
        setMessages(snapshot.docs.map((doc) => doc.data()))
      ));
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter room name:")
    if(roomName){
      db.collection('rooms').add({
        name: roomName,
      })
    }
  };

  return !addNewChat ? (
    <Link to={`/room/${id}`}>
      <div className='sidebarChat'>
        <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`}/>
        <div className='sidebarChat__info'>
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div>
      <div className='sidebarChat' onClick={createChat}>
        <h2>Add New Chat</h2>
      </div>
    </div>
  );
}

export default SidebarChat
