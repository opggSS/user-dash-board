import styled from 'styled-components'
import { Col , Row} from 'antd'

export const PagesContainer = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`
export const HeaderContainer = styled.div`
font-size:30px;
font-weight: bold;
margin: 2rem 0;
`


export const UserListColContainer = styled(Col)`
  text-align: right;
  @media (max-width: 576px) {
    text-align:left;
  }
`
export const UserListRowContainer = styled(Row)`
  margin: 1rem 0;
`

export const UserListContainer = styled.div`
  border: 1px solid black
`