import React, { memo, type FC, type ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Focus: FC<IProps> = () => {
  return <div>Focus</div>
}

export default memo(Focus)
