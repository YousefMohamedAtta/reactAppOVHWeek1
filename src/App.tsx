import Message from "../src/message";
import ListGroup from "./components/listGroup";
import Alert from "./components/alert";
import Button from "./components/button";
import Icons from "./components/icons";
import { useState } from "react";



function App() {
  const [alertVisible , setAlertVisiblity] =useState(false)
  const [listGroupVisible , setListGroupVisiblity] =useState(false)
  const items = ['Cairo','alex','sohag','bnha']
  const handleSelectItem = (item:string)=> {
    console.log(item);
  } 

  return <div>
    <Icons/>
    <Message/>
    <Button color="primary" onClick={() => [setListGroupVisiblity(true), setAlertVisiblity(true)]} > Submit </Button>
    {alertVisible &&<Alert onClose={() => setAlertVisiblity(false)}> success <span>Messagee</span> </Alert>}
    {listGroupVisible &&<ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} onClick={() => setAlertVisiblity(true)}/>}
    
  </div>
}
export default App