import React from 'react'
import propTypes from "prop-types"
import DSarticle from './DSarticle'
import DSleaderBoard from './DSleaderBoard'
import DSmatch from './DSmatch'

export default function DiscoveryStream(props) {
    
    const DScomponentMap = {
        DSarticle,
        DSleaderBoard,
        DSmatch,
    }

    const Component = DScomponentMap[props.dataSet.type]

    return (
        <>
            <Component dataSet={props.dataSet}></Component>
        </>
    )
}

DiscoveryStream.propTypes = {
    dataSet: propTypes.object.isRequired,
}