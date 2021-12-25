import React, { Fragment } from 'react'
import ReactPlayer from 'react-player/lazy'
import { useSelector } from 'react-redux'

const Overview = () => {
    const currentItem = useSelector(state => state.prdoucts.currentItem[0])

    return (

        <div className='videoplayer'>
            {currentItem.overview.length ?
                <Fragment>
                    <div className="overview_name">
                        Обзор: {currentItem.name}
                    </div>
                    <ReactPlayer url={currentItem.overview} />
                </Fragment> :
                "На данный продукт обзоров не найдено :("
            }
        </div>
    )
}

export default Overview
