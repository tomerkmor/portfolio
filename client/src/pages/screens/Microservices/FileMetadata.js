import React, { useState } from 'react';
import Container from "../../components/Container"
import UploadFile from '../../components/microservices/file-metadata/TrackerInfo';
import UploadGuide from '../../components/microservices/file-metadata/UploadGuide';

const FileMetadata = () => {
    return (
        <Container title="File metadata" subtitle="Upload a file">
            <UploadFile />
            <UploadGuide />
        </Container>
    )
}

export default FileMetadata