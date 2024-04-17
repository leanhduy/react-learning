import { useContext } from 'react'
import { OptionContext } from './utils/context'
import { CircleRadio } from './utils/custom-styled-components'

const DisplayFilter = () => {
    const { option, setOption } = useContext(OptionContext)
    const options = ['', 'All', 'Completed', 'Incompleted']
    return (
        <div className="mb-3 d-flex justify-content-center">
            {options.map(
                (o) =>
                    o !== '' && (
                        <div
                            className="d-flex align-items-center justify-content-center me-3"
                            key={o}
                        >
                            <CircleRadio
                                className="form-check-input rounded-circle border-light"
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
        </div>
    )
}

export default DisplayFilter
