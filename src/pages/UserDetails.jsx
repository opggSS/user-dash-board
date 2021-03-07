import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col, Spin } from 'antd'
import ContactInfo from '../components/UserDetails/ContactInfo.component'
import Address from '../components/UserDetails/Address.component'
import Company from '../components/UserDetails/Company.component'
import SingleUserPost from '../components/UserDetails/SingleUserPost.component'
import {PagesContainer,HeaderContainer} from './Pages.styles'

export default function UserDetails({ match }) {
  const id = match.params.id
  const [userInfo, setUserInfo] = useState(undefined)
  const [userPosts, setUserPosts] = useState(undefined)

  const fetchUser = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      setUserInfo(response.data)
    } catch (err) {
      console.log('error', err)
    }
  }

  const fetchUserPosts = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      setUserPosts(response.data)
    } catch (err) {
      console.log('error', err)
    }
  }

  useEffect(() => {
    fetchUser()
    fetchUserPosts()
  }, [match])

  if (userInfo !== undefined) {
    return (
     <PagesContainer>
        <HeaderContainer>User > {userInfo.name}</HeaderContainer>
        <Row gutter={[16,16]} type="flex">
          <ContactInfo userInfo={userInfo} />
          <Address address={userInfo.address} />
          <Company company={userInfo.company} />
        </Row>
        <HeaderContainer>Posts by {userInfo.name}</HeaderContainer>
        <Row gutter={[16,16]} type="flex">
          {userPosts !== undefined &&
            userPosts.map(userPost => (
              <Col xs={24} sm={8} key={userPost.id}>
                <SingleUserPost post={userPost} />
              </Col>
            ))
          }
        </Row>
      </PagesContainer>
    )
  }
  else {
    return <Spin />
  }
}
