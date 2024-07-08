import { ReactNode } from "react"
import './alert.module.css' 



interface Props {
    children :ReactNode ;
    onClose : () => void

}


export default function alert({children ,onClose} : Props) {
    return (
        <div className="alert alert-success alert-dismissible" >
            {children}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
        </div>
    )
}

