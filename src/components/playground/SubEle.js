const SubEle = ({ focus }) => {
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                focus()
            }}
        >
            Focus
        </button>
    )
}

export default SubEle
