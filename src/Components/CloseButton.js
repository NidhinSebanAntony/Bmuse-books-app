import React, { useContext } from 'react'
import { RootContext } from "../context/RootContext";
import closeIcon from '../assets/close.png';

const CloseButton = () => {

    const { getSelectedBook } = useContext(RootContext)


    const onClose = () => {
        getSelectedBook(null)
    }

    return(

        <div onClick={onClose}>
            <img src={closeIcon} alt="" width="15px"/>
        </div>
    )
}

export default CloseButton