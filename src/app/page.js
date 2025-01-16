'use client'

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import ChatListItem from '@/components/ChatListItem';
import ChatIntro from '@/components/ChatIntro';
import ChatWIndow from '@/components/ChatWindow'





export default function Home() {
  const imagem = 'https://us.123rf.com/450wm/gmast3r/gmast3r1710/gmast3r171002485/88771602-avatar-perfil-%C3%ADcone-masculino-sem-rosto-usu%C3%A1rio-em-colorido-redondo-plano-de-fundo-ilustra%C3%A7%C3%A3o.jpg'


  const [chatList, setChatList] = useState([
    { chatId: 1, title: 'Fulano', image: imagem },
    { chatId: 2, title: 'Beltrano', image: imagem },
    { chatId: 3, title: 'Ciclano', image: imagem },
    { chatId: 4, title: 'Ze', image: imagem }, 
    { chatId: 5, title: 'Fulano', image: imagem },])
  
    const [activeChat, setActiveChat] = useState({})

  return (
    <div className="app-window" >
      <div className="sidebar">
        <header>
          <img className="header-avatar" src={imagem} alt="avatar" />
          <div className="header-buttons">

            <div className="header-bttn">
              <DonutLargeIcon style={{ color: '#919191' }} />

            </div>

            <div className="header-bttn">
              <ChatIcon style={{ color: '#919191' }} />

            </div>

            <div className="header-bttn">
              <MoreVertIcon style={{ color: '#919191' }} />

            </div>

          </div>

        </header>
        <div className="search">

          <div className='search-input'>
            <SearchIcon fontSize='small' style={{ color: '#919191' }} />
            <input type='search' placeholder='Procurar ou começar uma nova conversa'>


            </input>

          </div>

        </div>

        <div className="chatlist">
          {chatList.map((item, key) => (
            <ChatListItem
             key={key}
             data={item}
              onclick={() => setActiveChat(chatList[key])} 
              active={activeChat.chatId===chatList[key].chatId}

              
              />

          ))}
        </div>
      </div>
      <div className="content-area">
        {activeChat.chatId !== undefined ? <ChatWIndow /> : <ChatIntro />}
      </div>
    </div>
  );
}
