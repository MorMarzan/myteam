
export function HighlightPreview({ highlight }) {

    const { src, alt, title, content } = highlight

    return (
        <div className='highlight-preview'>
            <img src={src} alt={`${alt} icon`} style={{ width: '50px' }} />
            <h4 className='title'>{title}</h4>
            <p>{content}</p>
        </div>
    )
}
