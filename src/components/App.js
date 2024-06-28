import styled from '@emotion/styled'
import { useState } from 'react'
import { memo } from 'react'

const Banner = memo(({ slogan }) => {
    // Simulate the expensiveness when rendering this component
    console.time('render')
    for (let i = 0; i < 1000000000; ) {
        i++
    }
    console.timeEnd('render')
    return (
        <>
            <BannerContainer>
                <h1>{slogan}</h1>
            </BannerContainer>
        </>
    )
})

function App() {
    const [, setCounter] = useState(0)
    return (
        <div>
            <Banner slogan={'Just Do It'} />
            <button
                onClick={() => {
                    setCounter((c) => c + 1)
                }}
            >
                Trigger Re-render
            </button>
        </div>
    )
}

export default App

const BannerContainer = styled.div({
    backgroundImage:
        'url("https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-blue-curve-line-fantasy-dynamic-banner-background-design-backgroundgeneral-backgroundlinecurvedynamic-background-image_86143.jpg")',
    backgroundSize: 'cover',
    width: '100vw',
    height: '400px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    '& h1': {
        color: 'red',
    },
})
