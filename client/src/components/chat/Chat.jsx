import { useState } from 'react'
import './chat.scss'
const Chat = () => {

    const [chat,setChat] = useState(true);
  return (
    <div className='chat'>
        <div className="messages">
            <h1>Messages</h1>
            <div className="message">
                <img src="./FBprofile.jpg" alt="" />
                <span>Belal</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam debitis odit dolorem. Voluptates.
                </p>
            </div>

            <div className="message">
                <img src="./FBprofile.jpg" alt="" />
                <span>Belal</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam debitis odit dolorem. Voluptates.
                </p>
            </div>

            <div className="message">
                <img src="./FBprofile.jpg" alt="" />
                <span>Belal</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam debitis odit dolorem. Voluptates.
                </p>
            </div>

            <div className="message">
                <img src="./FBprofile.jpg" alt="" />
                <span>Belal</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam debitis odit dolorem. Voluptates.
                </p>
            </div>

            <div className="message">
                <img src="./FBprofile.jpg" alt="" />
                <span>Belal</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam debitis odit dolorem. Voluptates.
                </p>
            </div>
        </div>

        {chat && (
            <div className="chatBox">
            <div className="top">
                <div className="user">
                    <img src="./FBprofile.jpg" alt="" />
                    Belal
                </div>
                <div className="close" onClick={()=>setChat(null)}>X</div>
            </div>
            <div className="center">
                <div className="chatMessage own">
                    <p>Assalamu Oalaikum,bro</p>
                    <span>1 hour ago</span>
                </div>

                <div className="chatMessage">
                    <p>Assalamu Oalaikum,bro</p>
                    <span>1 hour ago</span>
                </div>

                <div className="chatMessage own">
                    <p>Assalamu Oalaikum,bro</p>
                    <span>1 hour ago</span>
                </div>

                <div className="chatMessage">
                    <p>Assalamu Oalaikum,bro</p>
                    <span>1 hour ago</span>
                </div>

                <div className="chatMessage own">
                    <p>Assalamu Oalaikum,bro</p>
                    <span>1 hour ago</span>
                </div>

                <div className="chatMessage">
                    <p>Assalamu Oalaikum,bro</p>
                    <span>1 hour ago</span>
                </div>

                <div className="chatMessage own">
                    <p>Assalamu Oalaikum,bro</p>
                    <span>1 hour ago</span>
                </div>

                <div className="chatMessage">
                    <p>Assalamu Oalaikum,bro</p>
                    <span>1 hour ago</span>
                </div>

                <div className="chatMessage own">
                    <p>Assalamu Oalaikum,bro</p>
                    <span>1 hour ago</span>
                </div>

                <div className="chatMessage">
                    <p>Assalamu Oalaikum,bro</p>
                    <span>1 hour ago</span>
                </div>

                <div className="chatMessage own">
                    <p>Assalamu Oalaikum,bro</p>
                    <span>1 hour ago</span>
                </div>
            </div>
            <div className="bottom">
                <textarea ></textarea>
                <button>Send</button>
            </div>
        </div>
        )}
    </div>
  )
}

export default Chat