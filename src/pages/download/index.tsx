import React, { memo, type FC, type ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Download: FC<IProps> = () => {
  return <div>Download</div>
}

export default memo(Download)
