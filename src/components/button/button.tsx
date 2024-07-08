import './button.module.css' 

interface Props {
    children : string ;
    color ?:'primary' | 'success' | 'danger'|'warning';
    onClick :() => void
}

export default function button({children ,onClick ,color = 'primary'} :Props) {
    return (
        <button className={'btn btn-' + color } onClick={onClick}>{children}</button>
    )
}

