import React from 'react'
import propTypes from "prop-types"
import { DISCOVERY_STREAM_ITEM_MAP } from '../../../../Keys/Keys'

export default function DiscoveryStream(props) {

    const Component = DISCOVERY_STREAM_ITEM_MAP[props.dataSet.type]

    return (
        <>
            <Component dataSet={props.dataSet}></Component>
        </>
    )
}

DiscoveryStream.propTypes = {
    dataSet: propTypes.object.isRequired,
}