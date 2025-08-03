import React, { memo, type FC, type ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Artist: FC<IProps> = () => {
  return <div>Artist</div>
}

export default memo(Artist)
