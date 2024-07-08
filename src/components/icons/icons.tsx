import styles from './icons.module.css' 
import { FaHeart , FaRegHeart  } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { useState } from 'react';



export default function icons(){
    const [status, setStatus] = useState(true)

    if (status) return ( <> <BsList/>  <FaHeart color='#ff6b81' size={20}  onClick={() => setStatus(false)}/> </> )
    return <> <BsList/> <FaRegHeart  size={20} onClick={() => setStatus(true) } /> </>
    
}

