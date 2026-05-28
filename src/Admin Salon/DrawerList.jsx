import { ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const DrawerList = ({menu,menu2}) => {
  return (
    <div className='h-full'>
        <div className="flex flex-col justify-between h-full w-[300px] border-r py-5">
            <div className="space-y-2">
                {
                    menu.map((item, index) => (
                        <div className="">
                            <p>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText>
                                    {item.name}
                                </ListItemText>
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default DrawerList