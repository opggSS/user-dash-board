import React from 'react'
import { Col } from 'antd'
import { CardContainer ,WebsiteContainer } from './UserDetails.component.styles'
export default function ContactInfo({ userInfo }) {
  const { username, email, phone, website } = userInfo
  return (
    <Col xs={24} sm={8} >
      <CardContainer title='Contact info' >
        <p>Username: {username}</p>
        <p>Email: <a href={`mailto:${email}`}>{email}</a> </p>
        <p>Phone:<a href={`tel:${phone}`}> {phone}</a></p>
        <WebsiteContainer
          onClick={() => window.location = `https://${website}`}
        >
          {website}
        </WebsiteContainer>
      </CardContainer>
    </Col>
  )
}