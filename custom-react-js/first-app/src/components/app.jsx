import React from 'react'
import { render } from 'react-dom'


import Import from './import'


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h2>Bismillahir Rahmanir Rahim</h2>
                    <p>Ever tried, Ever failed, Try Again. Fail Again, Fail better</p>
                </div>
                <hr />
                <br />

                {/* Import */}

                <Import />

                <div className="pb-5"></div>
            </div>
        )
    }
}


export default App