import React, { Fragment } from 'react'

function Specific({selectedProduct}) {
    return (
        <Fragment>
            <div>{selectedProduct.id}</div>
            <div>{selectedProduct.name}</div>
            <div>{selectedProduct.specification.screenType}</div>
            <div>{selectedProduct.specification.screenResolution}</div>
            <div>{selectedProduct.specification.typeGlass}</div>
            <div>{selectedProduct.specification.Frameless}</div>
            <div>{selectedProduct.specification.operationSystem}</div>
            <div>{selectedProduct.specification.versionOC}</div>
            <div>{selectedProduct.specification.shellVersion}</div>
            <div>{selectedProduct.specification.simCardFormat}</div>
            <div>{selectedProduct.specification.caseMaterial}</div>
        </Fragment>
    )
}

export default Specific
