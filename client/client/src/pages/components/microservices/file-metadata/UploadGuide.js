const UploadGuide = () => {
    return (
        <div>
            <p><b>Uploading</b> the file will redirect you, and give information about the uploaded file:</p>
            <p>[path]/api/file</p>
            <p>The JSON document include 'filename' property.</p>
            <p>to <b>download</b> the uploaded file, go to the link:</p>
            <p>FIX(needs to go to the server to download):<b>[path]/api/file/[filename]</b></p>
        </div>
    )
}

export default UploadGuide