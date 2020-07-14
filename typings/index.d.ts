import React from 'react'

interface IPropsType {
  children: JSX.Element
  elementDomId: string
  onBottomHeightChange: (height: number | undefined) => void
}

declare class ReactScrollDown extends React.Component<IPropsType> {
  render(): React.FunctionComponentElement<any>
}

export default ReactScrollDown
