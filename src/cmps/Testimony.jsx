
export function Testimony({ testimony }) {
    const { src, name, content } = testimony
    return (
        <div className="testimony">
            <p>{content}</p>
            <h4 className='name'>{name}</h4>
            <img src={src} alt={`${name} avatar`} />
        </div>
    )
}
