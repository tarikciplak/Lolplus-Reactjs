import React from 'react'
import RingLoader from "react-spinners/RingLoader";

const Loading = ({loading}) => {
    return (
        <div>
            <RingLoader color={'#FCD34D'} loading={loading} size={180} />
        </div>
    )
}

export default Loading
