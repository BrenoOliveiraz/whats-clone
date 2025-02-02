import React, { useEffect, useRef, useState } from 'react';
import ChatWindw from './ChatWindow.css';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import MicIcon from '@mui/icons-material/Mic';
import EmojiPicker from 'emoji-picker-react';
import MsgItem from './MsgItem';

export default function Window({user}) {

  const body = useRef();
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      setRecognition(recognitionInstance);
    }
  }, []);

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const [msgList, setMsgList] = useState([
    {author: '123', body: 'blablabla'},
    { author: '123',body: 'blablabla'},
    { author: '1234',body: 'abdulaiabada'},
    {author: '123', body: 'blablabla'},
    { author: '123',body: 'blablabla'},
    { author: '1234',body: 'abdulaiabada'},
    {author: '123', body: 'blablabla'},
    { author: '123',body: 'blablabla'},
    { author: '1234',body: 'abdulaiabada'},
    {author: '123', body: 'blablabla'},
    { author: '123',body: 'blablabla'},
    { author: '1234',body: 'abdulaiabada'},
    {author: '123', body: 'blablabla'},
    { author: '123',body: 'blablabla'},
    { author: '1234',body: 'abdulaiabada'},
    {author: '123', body: 'blablabla'},
    { author: '123',body: 'blablabla'},
    { author: '1234',body: 'abdulaiabada'},
  ]);

  const handleEmojiClick = (emojiObject, e) => {
    setText(prevText => prevText + emojiObject.emoji);
  };

  const handleOpenEmoji = () => {
    setEmojiOpen(!emojiOpen);
  };

  const handleMicClick = () => {
    if (recognition != null) {
      recognition.onstart = () => {
        setListening(true);
      };
      recognition.onend = () => {
        setListening(false);
      };
      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      };
      recognition.start();
    }
  };

  // Efeito para rolar a tela até o final quando uma nova mensagem chegar
  useEffect(() => {
    if (body.current) {
      body.current.scrollTop = body.current.scrollHeight;
    }
  },); // Dependência: sempre que msgList for alterado (nova mensagem)

  const imagem = 'https://us.123rf.com/450wm/gmast3r/gmast3r1710/gmast3r171002485/88771602-avatar-perfil-%C3%ADcone-masculino-sem-rosto-usu%C3%A1rio-em-colorido-redondo-plano-de-fundo-ilustra%C3%A7%C3%A3o.jpg';

  return (
    <div className='chatWindow'>
      <div className='chatWindow--header'>
        <div className='chatWindow--headerInfo'>
          <img className='chatWindow--avatar' src={imagem} />
          <div className='chatWindow--name'>Breno Oliveira</div>
        </div>

        <div className='chatWindow--headerButtons'>
          <div className='chatWindow--btn'>
            <SearchIcon style={{ color: '#919191' }} />
          </div>
          <div className='chatWindow--btn'>
            <AttachFileIcon style={{ color: '#919191' }} />
          </div>
          <div className='chatWindow--btn'>
            <MoreVertIcon style={{ color: '#919191' }} />
          </div>
        </div>
      </div>

      <div ref={body} className='chatWindow--Body'>
        {msgList.map((item, key) => (
          <MsgItem key={key} data={item} user={user} />
        ))}
      </div>

      <div
        className='chatWindow-emojiArea'
        style={{ height: emojiOpen ? '200px' : "0px" }}
      >
        <EmojiPicker
          searchDisabled
          skinTonesDisabled
          onEmojiClick={handleEmojiClick}
        />
      </div>

      <div className='chatWindow--Footer'>
        <div className='chatWindow--pre'>
          <div onClick={handleOpenEmoji} className='chatWindow--btn'>
            <InsertEmoticonIcon style={{ color: emojiOpen ? '#009688' : '#919191' }} />
          </div>
        </div>

        <div className='chatWindow--inputarea'>
          <input
            className='chatWindow--input'
            type='text'
            placeholder='Digite uma mensagem'
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>

        <div className='chatWindow--pos'>
          {text === '' ? (
            <div onClick={handleMicClick} className='chatWindow--btn'>
              <MicIcon style={{ color: listening ? '#126ECE' : '#919191' }} />
            </div>
          ) : (
            <div className='chatWindow--btn'>
              <SendIcon style={{ color: '#919191' }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
