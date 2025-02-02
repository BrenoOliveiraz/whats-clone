import React from 'react'
import MsgItem from './MsgItem.css'

export default function MessageItem({data, user}) {
  return (
    <div className='msgLine' style={{ justifyContent: user.id === data.author ? 'flex-start' : 'flex-end' }}
>
        <div className='msgItem' style={{backgroundColor: user.id ===data.author? '#FFF' : '#DCF8C6' }}>
            <div className='msgText'>{data.body}</div>
            <div className='msgDate'> 19:00h</div>
        </div>
        <div>

        </div>

    </div>
  )
}
