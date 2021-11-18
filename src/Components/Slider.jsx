import React from 'react'
import ImageGallery from 'react-image-gallery';


class MyGallery extends React.Component {
    renderLeftNav(onClick, disabled) {
        return (
            <button
                className='image-gallery-custom-left-nav'
                disabled={disabled}
                onClick={onClick} />
        )
    }
    render() {
        let images = []


        this.props.selectedProduct.specification.images.forEach(function (item) {
            images.push({
                original: item,
                thumbnail: item,
            })
        })

        return (

            <div className="slider">
                <div className="main__product--name">
                    {this.props.selectedProduct.name}
                </div>
                <ImageGallery
                    items={images}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    useBrowserFullscreen={false}
                />
            </div>
        )
    }
}

export default MyGallery