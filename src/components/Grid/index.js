import React from 'react'
import styled from 'styled-components'

const StyledGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  max-width: 800px;
  margin-top: 3rem;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`

const Grid = props => {
  return <StyledGrid {...props} />
}

export default Grid
