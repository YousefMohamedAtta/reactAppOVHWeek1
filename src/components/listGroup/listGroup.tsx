//import { MouseEvent } from "react"
import { useState } from "react"
import styles from './listGroup.module.css' 

interface Props {
    items : string[]
    heading : string
    onSelectItem : (item : string) => void
    onClick :() => void

}
function ListGroup({items , heading ,onSelectItem , onClick}:Props) {
    const [selectedIndex , setSelectIndex ] = useState(-1)
    //const handleClick = (event : MouseEvent) => console.log(event)
    return<>
    <h1>{heading}</h1>
    {items.length === 0 && <p> No Item Found</p> }
    <ul className="list-group">
        {items.map((item , index) =>( 
            <li 
            className= { selectedIndex === index ?  "list-group-item active" : "list-group-item"} 
            key={item}
            onClick = {() => {
                onClick()
                setSelectIndex(index)
                onSelectItem(item)
            }}
            >
            {item}</li>
            
        ))}
    </ul>
    
</> 
}
export default ListGroup