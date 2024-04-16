import { TestimonyPreview } from "./TestimonyPreview";
import decoImg from "/images/bg-pattern-home-4-about-3.svg"

export function TestimonyList({ testimonies }) {
    return (
        <section className='main-layout full testimony-list'>
            <img className="deco-img" src={decoImg}></img>
            <div className="section-container">
                <h4 className="title">Delivering real results for top companies. Some of our <mark>success stories.</mark></h4>
                <div className='content'>
                    {testimonies.map(testimony => <TestimonyPreview key={testimony.id} testimony={testimony} />)}
                </div>
            </div>
        </section>
    )
}
