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
            images.push({
                original: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/61f7965fa49ebbcd1fc5ccd2d2073680/93ba7a81a786695bdf44bb60000b82231d2c42bdddbb48c877cb0b559af6f608.jpg.webp',
                thumbnail: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/61f7965fa49ebbcd1fc5ccd2d2073680/93ba7a81a786695bdf44bb60000b82231d2c42bdddbb48c877cb0b559af6f608.jpg.webp',
            })

        return (

            <div className="slider">
                <div className="main__product--name">
                    комп
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