import React from 'react'
import DashboardLayout from './DashboardLayout'
import { auth } from '@/auth'

const UserLayout = async ({ children }) => {

    const session = await auth()

    return (
        session?.user ? <DashboardLayout>
            {children}
        </DashboardLayout> : children
    )
}

export default UserLayout