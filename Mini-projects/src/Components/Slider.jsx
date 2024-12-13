import React, { useEffect, useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
const Slider = ({ url, limit = 5, page = 1 }) => {
    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await response.json()

            if (data) {
                setImages(data)
                setLoading(false)
            }
        } catch (e) {
            setErrorMessage(e.message)
            setLoading(false)
        }

    }

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }
    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    useEffect(() => {
        if (url !== "") fetchImages(url)
    }, [url])
    console.log(images)
    if (loading) {

        return <div>Loading data PLease wait</div>

    }

    if (errorMessage !== null) {
        return <div>ERROR OCCURED {errorMessage}</div>
    }
    return (
        <div className='relative flex justify-center items-center border-4  w-[600px] h-[450px]'>
            <FaArrowCircleLeft onClick={handlePrevious} className='absolute h-8 text-white left-4 cursor-pointer' />

            {images && images.length
                ? images.map((imageItem, index) => (
                    <img
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                        className={currentSlide === index
                            ? "b-4 shadow-lg w-[100%] h-[100%]" :
                            "hidden"}
                    />
                )) : null
            }
            <FaArrowCircleRight onClick={handleNext} className='absolute h-8 text-white right-4 cursor-pointer' />
            <span className='flex absolute bottom-4'>
                {
                    images && images.length ?
                        images.map((_, index) => (
                            <button
                                key={index}
                                className={
                                    currentSlide === index ?
                                        'bg-green-600 h-4 w-4 border-none rounded-xl m-2 ' : "bg-gray-300 h-4 w-4 border-none rounded-xl m-2"
                                }
                                onClick={() => setCurrentSlide(index)}></button>
                        ))
                        : null
                }
            </span>
        </div>
    )
}

export default Slider