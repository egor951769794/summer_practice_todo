import './TodoController.css'

import trashcan from './../../svg/delete.svg'

export default function TodoController() {
    return (
        <div className='controller-body'>
            <img src={trashcan} className='controller-delete'></img>
        </div>
    )
}
