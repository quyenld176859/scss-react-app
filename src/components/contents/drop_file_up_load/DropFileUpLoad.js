import React, { useState } from 'react'
import { Img } from './../../../constants/ImagePath';

export default function DropFileUpLoad() {

    const [listFile, setListFile] = useState([])
    function getDropFile(e) {
        const file = e.target.files[0]
        if (file) {
            // console.log(file)
            setListFile([...listFile, file])
        }
    }
    return (
        <div className="content-data">
            <h3>Drop file up load</h3>
            <div className="drop_zone">
                <div>
                    <img src={Img.cloudUploadFile} alt="" />
                    <p>Drag and drop file here</p>
                </div>
                <input type='file' onChange={(e) => getDropFile(e)} />
            </div>
            <div>
                {
                    listFile.map((item, index) => {
                        // console.log(item)
                        return (
                            <div key={index} className="file_item">
                                <img src={Img[item.type] === undefined ? Img.blank : Img[item.type]} alt="" />
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
