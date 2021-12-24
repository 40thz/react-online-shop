import React from 'react'

const BtnPanel = ({ setSearchParams, setOverviewCheck, setRaitingCheck, brandsInput, setStartFiltering, startFiltering }) => {

    const resetParams = () => {
        setSearchParams({});
        setOverviewCheck(false)
        setRaitingCheck(false)
        brandsInput.current.map((item) => item.checked = false)
        setStartFiltering(!startFiltering)
    }

    return (
        <div className="filterPanel__btns">
            <input type="submit" value="Применить" />
            <div onClick={() => resetParams()} className="resetBtn">Сбросить</div>
        </div>
    )
}

export default BtnPanel
