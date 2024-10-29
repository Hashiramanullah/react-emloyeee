import React from 'react'
import Header from '../other/header'
import CreateTask from '../other/CreateTask'
import OldTask from '../other/OldTask'
// import { useTheme } from '../../context/ThemeContext'
const AdminDashboard = (props) => {
    return (
        <div className=' bg-black w-full h-screen dark:text-white p-7'>

 
            <Header changeUser={props.changeUser} />
            <CreateTask/>
            <OldTask/>
        </div>
    )
}

export default AdminDashboard