import { useState } from 'react'

const Toggler = ({render}) => {
    const [isOn, setIsOn] = useState(false);

    function togglerStateChanger(){
        setIsOn((preState)=> !preState)
    }


  return render({isOn, togglerStateChanger})
}

export default Toggler