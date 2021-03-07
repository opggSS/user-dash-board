import styled from 'styled-components'
import {theme} from '../../main.styles'


export const SingleUserContainer = styled.div`
  display:grid;
  grid-template-columns: 6rem 200px auto;
  padding: 1rem;
  align-items: center;
  border-bottom: 1px solid black;
  color:${theme.color.text};
  background: ${props => props.isOdd ? theme.color.light: theme.color.mainBg }
`

export const Avatar = styled.div`
  display: inline-block;
  width:4rem;
  height:4rem;
  border-radius: 2rem;
  background: ${theme.color.light};
`
