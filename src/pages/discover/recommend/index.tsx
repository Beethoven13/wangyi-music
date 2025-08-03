import React, { memo, type FC, type ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  return <div>Recommend</div>
}

export default memo(Recommend)
