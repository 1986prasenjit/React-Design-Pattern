import {useState} from 'react'

const TogglerComponent = ({render}) => {
    const [showText, setShowText] = useState(false);

    function togglerStateChanger(){
        setShowText((prevValue)=> !prevValue)
    }
  return render({showText, togglerStateChanger})
}

export default TogglerComponent
