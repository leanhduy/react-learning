import { useContext } from 'react'
import { OptionContext } from './TodosApp'

const DisplayFilter = () => {
    const { option, setOption } = useContext(OptionContext)
    const options = ['All', 'Completed', 'Incompleted']
    return (
        <>
            {options.map((o) => (
                <div class="form-check form-check-inline" key={o}>
                    <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        value={o}
                        onChange={(e) => {
                            setOption(e.target.value)
                        }}
                    />
                    <label class="form-check-label">{o}</label>
                </div>
            ))}
        </>
    )
}

export default DisplayFilter
