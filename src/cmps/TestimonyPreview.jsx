
export function TestimonyPreview({ testimony }) {
    const { src, name, content } = testimony
    return (
        <div className="testimony-preview">
            <p>{content}</p>
            <h5 className='name'>{name}</h5>
            <img src={src} alt={`${name} avatar`} />
        </div>
    )
}
