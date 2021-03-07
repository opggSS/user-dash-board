import styled from 'styled-components'
import { Card } from 'antd'
import { theme } from '../../main.styles'

export const CardContainer = styled(Card)`
  height: 100%;
  border: 1px solid ${theme.color.border};
  @media (max-width: 576px) {
    border:none;
    border-bottom: 1px solid ${theme.color.border}
  }
`
export const WebsiteContainer = styled.p`
  cursor:pointer;
  color:${theme.color.link}
`