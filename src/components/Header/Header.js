import styled from '@emotion/styled'
import React from 'react'

const Header = ({ title }) => {
    return (
        <HeaderContainer>
            <HeaderTitle>{title}</HeaderTitle>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div({
    height: '300px',
    background: '#000',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center ',
})

const HeaderTitle = styled.h1({})
