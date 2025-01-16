import React from 'react'
import ChatListItem from '../components/ChatListItem.css'

export default function List({onclick, active, data}) {
     const imagem = 'https://us.123rf.com/450wm/gmast3r/gmast3r1710/gmast3r171002485/88771602-avatar-perfil-%C3%ADcone-masculino-sem-rosto-usu%C3%A1rio-em-colorido-redondo-plano-de-fundo-ilustra%C3%A7%C3%A3o.jpg'

    return (
        <div className={`chatListItem ${active? 'active' : ''}`} onClick={onclick}>
            <img className='chatListItem-avatar' src={data.image} />
            <div className='chatListItem-lines'>

                <div className='chatListItem-line'>
                    <div className='chatListItem-name'>
                        {data.title}
                    </div>
                    <div className='chatListItem-date'> 19h </div>
                </div>
                <div className='chatListItem-line'>
                    <div className='chatListItem-lastMsg'>
                        <p> OPA, SHOW?OPA, SHOW?OPA, SHOW?</p>

                    </div>
                </div>


            </div>


  
        </div>
    )
}
