const UploadFile = () => {
    return (
        <div>
            <form enctype="multipart/form-data" method="POST" action={process.env.REACT_APP_API_URL + "/file"}>
                <input id="inputfield" type="file" name="upfile" />
                <input id="button" type="submit" value="Upload" />
            </form>
        </div>
    )
}

export default UploadFile