import decoImgCA from '/images/bg-pattern-home-6-about-5.svg'

export function CallToAction({ title, btnTxt }) {
    return (
        <section className='main-layout full call-to-action'>
            <img src={decoImgCA} className='deco-img'></img>
            <div className="section-container">
                <h4>{title}</h4>
                <button className='btn'>{btnTxt}</button>
            </div>
        </section>
    )
}
