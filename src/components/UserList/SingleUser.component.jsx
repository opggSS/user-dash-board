import React from 'react'
import { SingleUserContainer, Avatar } from './SingleUser.styles'
import { Link } from 'react-router-dom'
import {theme} from '../../main.styles'
export default function SingleUser({ user, isSmallScreen, index }) {
  const { id, name, username, email } = user
  return (
    <SingleUserContainer isOdd={index % 2 === 0}>
      <Link to={`/user/${id}`}>
        <Avatar />
      </Link>
      <div>
        <Link to={`/user/${id}`} style={{ color: theme.color.text }}>
          <div> Name: {name}</div>
          <div> Username: {username}</div>
        </Link>
        {isSmallScreen && <div><a href={`mailto:${email}`}>Email:{email}</a></div>}
      </div>
      {!isSmallScreen && <div style={{ textAlign: 'right' }}><a href={`mailto:${email}`}>Email:{email}</a></div>}
    </SingleUserContainer >
  )
}
