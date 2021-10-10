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
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a href="#" className="nav-link active">Quran</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link active">Hadith</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link active">Fiqah</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link active">Tafsir</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link active">Sirah</a>
                        </li>
                    </ul>
                </div>
                <footer className="students">
                    <h6>Students</h6>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a href="#" className="nav-link active">
                                Ibnul Jawhi
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link active">
                                Ibn Kayyim
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link active">
                                Ibn Kasir
                            </a>
                        </li>
                    </ul>
                </footer>
            </div>
        )
    }
}

export default Profile