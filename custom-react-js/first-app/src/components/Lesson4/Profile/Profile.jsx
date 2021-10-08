import React from "react";
import './profile.style.css'

class Profile extends React.Component {
    render() {
        return (
            <div className="main p-5 border w-50 m-auto">
                <header className="header text-center">
                    <h3>Ibn Taymiyyah</h3>
                    <p>Shaikhul Islam, Imam, Muhhaddis</p>
                </header>
                <div className="knowledge">
                    <h6>Knowledge</h6>
                    <ul className="">
                        <li className="">Quran</li>
                        <li className="">Hadith</li>
                        <li className="">Fiqah</li>
                        <li className="">Tafsir</li>
                        <li className="">Sirah</li>
                    </ul>
                </div>
                <footer className="students">
                    <h6>Students</h6>
                    <ul className="list-group">
                        <li className="list-group-item">Ibnul Jawji</li>
                        <li className="list-group-item">Ibn Kayyim</li>
                    </ul>
                </footer>
            </div>
        )
    }
}

export default Profile