import { HighlightPreview } from "./HighlightPreview"

export function HighlightList({ highlights }) {
    return (
        <section className="main-layout full highlight-list">
            <div className="section-container">
                <h3>Build & manage distributed teams like no one else.</h3>
                <div className='content'>
                    {highlights.map(highlight => <HighlightPreview key={highlight.id} highlight={highlight} />)}
                </div>
            </div>
        </section>
    )
}
