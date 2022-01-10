import React, { Fragment } from 'react'
import ReactPlayer from 'react-player/lazy'
import { useSelector } from 'react-redux'

const Overview = ({ visible }) => {
    const currentItem = useSelector(state => state.prdoucts.currentItem[0])

    return (
        <div className="main__product--more" id="overview">
            {currentItem.overview.length ?
                <Fragment>
                    <div className="spec_name">
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
