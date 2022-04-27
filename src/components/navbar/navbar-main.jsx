import React, {useState} from 'react'
import Navbar from "./Navbar"
import DropDown from './Dropdown'

const Index = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    return (
      <>
        <DropDown
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
        <Navbar showDropdown={showDropdown} setShowDropdown={setShowDropdown}/>
      </>
    );
}

export default Index;


