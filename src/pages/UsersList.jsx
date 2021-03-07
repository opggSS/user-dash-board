import React, { useEffect, useState, useRef } from 'react'
import axios from "axios"
import SingleUser from '../components/UserList/SingleUser.component'
import { Col, Spin, Select, Input } from 'antd'
import { PagesContainer, UserListContainer, UserListColContainer, UserListRowContainer } from './Pages.styles'
const { Option } = Select;


export default function UsersList() {

  const [users, setUsers] = useState(undefined)
  const [userSearchResult, setUserSearchResult] = useState([])
  const inputStyles = { display: 'block', width: '100%' }
  const [isSmallScreen, _setIsSmallScreen] = useState(false)

  const isSmallScreenRef = useRef(isSmallScreen)

  const setIsSmallScreen = bool => {
    isSmallScreenRef.current = bool;
    _setIsSmallScreen(bool);
  };

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth > 700 && isSmallScreenRef.current) {
        setIsSmallScreen(false)
      }
      if (window.innerWidth <= 700 && !isSmallScreenRef.current) {
        setIsSmallScreen(true)
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
      setUserSearchResult(response.data)
    } catch (err) {
      console.log('error', err)
    }
  }
  useEffect(() => {
    fetchUsers()
  }, [])

  const filterUser = (value) => {
    const result = users.filter(user => user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value) || user.username.toLowerCase().includes(value))
    setUserSearchResult(result)
  }
  const sortBy = (value) => {
    let sortedUsers = [...users];
    switch (value) {
      case 'name':
        sortedUsers = [...users.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))]
        break
      case 'username':
        sortedUsers = [...users.sort((a, b) => a.username.toLowerCase().localeCompare(b.username.toLowerCase()))]
        break
      case 'email':
        sortedUsers = [...users.sort((a, b) => a.email.toLowerCase().localeCompare(b.email.toLowerCase()))]
        break
      default:
        break
    }

    setUserSearchResult(sortedUsers)
  }


  if (users !== undefined) {
    return (
      <PagesContainer >
        <UserListRowContainer gutter={16} >
          <Col sm={12} xs={24} style={{ fontSize: '30px' }}>
            User
          </Col>
          <Col sm={6} md={{ span: 4, offset: 4 }} xs={24} >
            Search
              <Input style={inputStyles} onChange={(e) => filterUser(e.target.value.toLowerCase())} />
          </Col>

          <Col sm={6} md={4} xs={24} >
            sort
            <Select defaultValue='name' onChange={sortBy} style={inputStyles}>
              <Option value="name">name</Option>
              <Option value="username">username</Option>
              <Option value="email">email</Option>
            </Select>
          </Col>
        </UserListRowContainer>

        <UserListContainer>
          {userSearchResult.length > 0 ?
            userSearchResult.map((user, index) => (
              <SingleUser user={user} key={user.id} isSmallScreen={isSmallScreen} index={index} />
            ))
            : <div>no result</div>}

        </UserListContainer>
      </PagesContainer>
    )
  }
  else {
    return <Spin />
  }

}
