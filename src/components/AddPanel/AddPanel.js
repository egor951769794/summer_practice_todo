import './AddPanel.css'
import plus from './../../svg/add.svg'

export default function AddPanel({openAddWindow}) {
    return (
        <div className='add-panel'>
            <div className='add-button' onClick={openAddWindow}><img src={plus}></img></div>
        </div>
    )
}