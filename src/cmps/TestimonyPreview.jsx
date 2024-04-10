
export function TestimonyPreview({ testimony }) {
    const { src, name, content } = testimony
    return (
        <div className="testimony-preview">
            <p>{content}</p>
            <h4 className='name'>{name}</h4>
            <img src={src} alt={`${name} avatar`} />
        </div>
    )
}
