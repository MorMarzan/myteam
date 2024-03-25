
export function Testimony({ content, name, src }) {
    return (
        <div className="testimony">
            <p>{content}</p>
            <h4 className='name'>{name}</h4>
            <img src={src} alt={`${name} avatar`} />
        </div>
    )
}
