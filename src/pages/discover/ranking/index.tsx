import React, { memo, type FC, type ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = () => {
  return <div>Ranking</div>
}

export default memo(Ranking)
