import React from 'react'
import { Col } from 'antd'
import { CardContainer } from './UserDetails.component.styles'

export default function Company({ company }) {
  const { name, bs, catchPhrase } = company
  return (
    <Col xs={24} sm={8} >
      <CardContainer title='Company' >
        <p>name: {name}</p>
        <p>bs: {bs}</p>
        <p>catchPhrase: {catchPhrase}</p>
      </CardContainer>
    </Col>
  )
}
