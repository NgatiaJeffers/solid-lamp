import Image from "next/image";

// Creating a custom loader
const loader = ({src, widht, quality}) => {
    return `https://example.com/${src}?w=${widht}&q=${quality || 75}`
}

const CustomImage = () => {
    return (
        <Image 
            loader={loader}
            src={'/myimage.png'}
            width={350}
            height={540}
            alt='A beautiful English Setter'
        />
    )
}

export default CustomImage;