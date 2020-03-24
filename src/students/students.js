// Що потрібно при створенні нового компоненту
// 1. Імпортувати React
// 2.Створити функцію/ класс (компонент)
// 3. Експорт компоненту

import React from 'react'


const Student = ({name = 'Default Name', age = 'Default Age'}) => {
    return (
        <div>
            {/* <h3>Postoyev Stanislav</h3>
            <p>Age is: <span>27</span> years</p> */}
            <h3>{name}</h3>
            <p>Age is: <span>{age}</span> years</p>
        </div>
    )
}

export default Student