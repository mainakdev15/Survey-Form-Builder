import React from 'react'
import DesignerSidebar from './DesignerSidebar'
import { useDroppable} from "@dnd-kit/core"

function Designer() {

    const droppable = useDroppable({
        id:"designer-drop-area",
        data:{
            isDesignerDropArea:true,
        }
    });
  return (
    <div>
        <div
            ref ={droppable.setNodeRef}
            className='bg-background border-solid'>
            <p className="">Drop Here</p>
        </div>
        <DesignerSidebar/>
    </div>
  )
}

export default Designer