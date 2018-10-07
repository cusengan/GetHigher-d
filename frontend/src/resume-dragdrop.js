import React, {Component} from 'react'

import Dropzone from 'react-dropzone'

const resumeMaxSize = 1000000 //bytes

class ResumeDragDrop extends Component{
    //file is stored as an array and this array will only hold one element unless we want to change it 
    handleOnDrop = (files, rejectedFiles) => {
        console.log(files)
        if (rejectedFiles && rejectedFiles.length > 0){
            const currentRejectionFile = rejectedFiles[0]
            const currentRejectionFileType = currentRejectionFile.type
            const currentRejectionFileSize = currentRejectionFile.size
            if(currentRejectionFileSize > resumeMaxSize){
                alert("This file is too big")
            }else if(currentRejectionFileType !== "application/pdf" || currentRejectionFile !== "application/doc"){
                alert("This file is not a .pdf or a .doc")
            }
        }
    }

    render(){
        return(
            <div>
                <h1> Drop Resume Here </h1>
                <Dropzone onDrop={this.handleOnDrop} accept=".pdf, .doc" multiple={false} maxSize={resumeMaxSize}>Drop Resume Here</Dropzone>
            </div>
        )
    }
}

export default ResumeDragDrop