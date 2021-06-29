import React from 'react'
import SideBare from '../components/side-bare/side-bare'
import TopBare from '../components/top-bar/top-bare';

const Theme = (props: any) => {
    return (
        <> 
            <TopBare />
            <SideBare />
            <div className="content-wrapper">
                {props.children}
            </div>
        </>
    )
}

export default Theme
