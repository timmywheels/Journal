const HighlightedTitle = ({ text, size = 'text-xl' }) => {
    return (
        <div className='highlight-container'>
            <h1 className={`highlight ${size}`}>
                { text }
            </h1>
        </div>
    )
}

export default HighlightedTitle;
