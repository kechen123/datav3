import React, { useRef } from 'react'
import { useDrag } from 'ahooks'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { dropDrag, setStatus } from '@features/dropDragSlice' // 引入actions

interface Drag {
  children?: React.ReactNode
  data: Object
}

const DragItem = ({ children, data }: Drag) => {
  const dragRef = useRef<HTMLDivElement | null>(null)
  const { status } = useAppSelector(dropDrag)
  const dispatch = useAppDispatch()
  useDrag(data, dragRef, {
    onDragStart: () => {
      if (status === '') {
        dispatch(setStatus('dragging'))
      }
    },
    onDragEnd: () => {
      dispatch(setStatus('draggEnd'))
    },
  })
  return <div ref={dragRef}>{children}</div>
}
export default DragItem
