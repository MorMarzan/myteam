import { TestimonyPreview } from "./TestimonyPreview";

export function TestimonyList({ testimonies }) {
    return (
        <section className='main-layout full testimony-list'>
            <div className="section-container">
                <h3>Delivering real results for top companies. Some of our <mark>success stories.</mark></h3>
                <div className='content'>
                    {testimonies.map(testimony => <TestimonyPreview key={testimony.id} testimony={testimony} />)}
                </div>
            </div>
        </section>
    )
}
