
export function Highlight({ src, alt, title, content }) {
    return (
        <div className='highlight'>
            <img src={src} alt={`${alt} icon`} style={{ width: '50px' }} />
            <h4 className='title'>{title}</h4>
            <p>{content}</p>
        </div>
    )
}