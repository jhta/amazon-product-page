import React from 'react'
import GroupSelector from '../GroupSelector'
import OrderSelector from '../OrderSelector'
import StarsFilter from '../StarsFilter'
import SearchBar from '../SearchBar'
import styled from 'styled-components'
import Label from 'components/ui/Label'
import Selector from 'components/ui/Selector'

const FormStyled = styled.section`
  margin-top: 2rem;
`

const Selectors = styled.div`
  display: flex;
  width: 100%;
`

const Form = props => (
  <FormStyled>
    <Selectors>
      <Selector>
        <Label>Group by:</Label>
        <GroupSelector />
      </Selector>
      <Selector>
        <Label>Order by:</Label>
        <OrderSelector />
      </Selector>
    </Selectors>
    <StarsFilter />
    <SearchBar />
  </FormStyled>
)

export default Form
