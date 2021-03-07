import React from 'react'
import { Col } from 'antd'
import { CardContainer } from './UserDetails.component.styles'
export default function Address({ address }) {
  const { suite, street, city, zipcode } = address
  return (
    <Col xs={24} sm={8} >
      <CardContainer title='Address' >
        <p>suite: {suite}</p>
        <p>street: {street}</p>
        <p>city: {city}</p>
        <p>zipcode: {zipcode}</p>
      </CardContainer>
    </Col>
  )
}