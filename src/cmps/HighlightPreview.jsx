
export function HighlightPreview({ highlight }) {

    const { src, alt, title, content } = highlight

    return (
        <div className='highlight-preview'>
            <img src={src} alt={`${alt} icon`} />
            <div className="preveiw-content">
                <h5 className='title'>{title}</h5>
                <p>{content}</p>
            </div>
        </div>
    )
}
