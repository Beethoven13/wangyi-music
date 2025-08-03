import React, { memo, type FC, type ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Radio: FC<IProps> = () => {
  return <div>Radio</div>
}

export default memo(Radio)
