import React, { useState } from 'react'
import '../../src/App.css'
import ProgressBar from './ProgressBar'
const Upload = () => {
    const [file, setFile] = useState(null)
    const [err, setErr] = useState(null)
    const types = ['image/png', 'image/jpeg'];
    const changeHandler = (e) => {
        // console.log(`Changed`)
        let selected = e.target.files[0]
        // console.log(selected)
        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setErr('')
        } else {
            setFile()
            setErr(`Please Select as Image file from (Png or Jpeg Format)`);
        }
    }
    return (
        <>
            <form >
                <label className="ms">
                    <input type="file" className="FILE" onChange={changeHandler} hidden />
                    <span className="FILE">+</span>
                </label>
            </form>
            <div >
                {err && <div className="error">{err}</div>}
                {file && <div className="image">{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </>

    )
}

export default Upload
