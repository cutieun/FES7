import React from 'react'

export default function ImageItem({ image }) {
    return (
        <img src={image.download_url} alt="" style={{ width: 400 }} />
    )
}