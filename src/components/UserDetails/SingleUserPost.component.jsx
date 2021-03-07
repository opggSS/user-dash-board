import React from 'react'
import {Card} from 'antd'
import { CardContainer } from './UserDetails.component.styles'

export default function SingleUserPost({post}) {
  const {title, body} = post
  return (
    <CardContainer title={title}>
      {body}
    </CardContainer>
  )
}
