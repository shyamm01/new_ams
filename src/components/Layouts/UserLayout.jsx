import React from 'react'
import DashboardLayout from './DashboardLayout'

const UserLayout = ({children}) => {

    

    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    )
}

export default UserLayout