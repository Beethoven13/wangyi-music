import React, { memo, type FC, type ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Album: FC<IProps> = () => {
  return <div>Album</div>
}

export default memo(Album)
