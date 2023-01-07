const HighlightedText = ({ text }) => {
    return (
        <div className='highlight-container'>
            <div className='highlight'>
                { text }
            </div>
        </div>
    )
}

export default HighlightedText;
