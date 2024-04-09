import { useContext } from 'react'
import { OptionContext } from './context'

const DisplayFilter = () => {
    const { option, setOption } = useContext(OptionContext)
    const options = ['', 'All', 'Completed', 'Incompleted']
    return (
        <>
            {options.map(
                (o) =>
                    o !== '' && (
                        <div className="form-check form-check-inline" key={o}>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                value={o}
                                onChange={(e) => {
                                    setOption(e.target.value)
                                }}
                            />
                            <label className="form-check-label">{o}</label>
                        </div>
                    )
            )}
        </>
    )
}

export default DisplayFilter
