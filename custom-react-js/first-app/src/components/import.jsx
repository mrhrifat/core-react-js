import React from 'react'


import Lesson1 from './Lesson1/Lesson1'
import Lesson2 from './Lesson2/Lesson2'
import Lesson3 from './Lesson3/Lesson3'
import Lesson4 from './Lesson4/Lesson4'

class Import extends React.Component {
    render() {
        return (
            <div>
                <Lesson1 />
                <Lesson2 />
                <Lesson3 />
                <Lesson4 />
            </div>
        )
    }
}

export default Import