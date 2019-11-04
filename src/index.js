import React, { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

const scrollEvent = event => {
  if (!event.srcElement.scrollTop) {
    // 处理向上使劲滚动的时候scrollTop为undefined
    return undefined
  }

  // 元素内容已经滚动的高度
  const scrollTop =
    (event.srcElement ? event.srcElement.scrollTop : false) ||
    window.pageYOffset ||
    (event.srcElement ? event.srcElement.body.scrollTop : 0)
  // 元素视窗高度
  const clientHeight =
    (event.srcElement && event.srcElement.clientHeight) || document.body.clientHeight
  // 元素页面内容高度
  const scrollHeight =
    (event.srcElement && event.srcElement.scrollHeight) || document.body.scrollHeight
  // 距离页面底部的高度
  const height = scrollHeight - scrollTop - clientHeight

  return height
}

function ReactScrollDown(props) {
  const { children, elementDomId, onBottomHeightChange } = props

  const _handleScroll = useCallback(
    event => {
      const height = scrollEvent(event)
      onBottomHeightChange && onBottomHeightChange(height)
    },
    [onBottomHeightChange]
  )

  useEffect(() => {
    const scrollDom = document.getElementById(elementDomId)
    scrollDom.addEventListener('scroll', _handleScroll)

    return () => scrollDom.removeEventListener('scroll', _handleScroll)
  }, [_handleScroll, elementDomId])

  const newChildFunc = useCallback(() => {
    const child = React.Children.only(children)
    const newChild = React.cloneElement(child)

    return newChild
  }, [children])

  return newChildFunc()
}

ReactScrollDown.propTypes = {
  children: PropTypes.any,
  elementDomId: PropTypes.string.isRequired,
  onBottomHeightChange: PropTypes.func
}

export default ReactScrollDown
