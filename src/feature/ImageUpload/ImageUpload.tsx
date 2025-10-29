import React, {FunctionComponent} from 'react'
import {FileUpload, Image} from '@telus-uds/components-web'

export const ImageUpload: FunctionComponent = () => {
    const [selectedFile, setSelectedFile] = React.useState<File>()
    const onUpload = async (files: FileList) => {
        console.log('Uploading files:', files)
        let error = "";
        if (files.length === 1) {
            const file0 = files[0];
            const fileType = file0.type
            if (fileType.startsWith('image/')) {
                // valid image file
                setSelectedFile(file0)
            } else {
                error = `invalid type '${fileType}'; only image files are allowed`
            }
        } else {
            error = `Expected 1 file, but got ${files.length}`
        }

        if (error === "") {
            // success
            return Promise.resolve(files)
        }

        // error
        return Promise.resolve([{error: error}])
    }

    const onDelete = async (file: any) => {
        console.log('Deleting file:', file)
        setSelectedFile(undefined)
        return Promise.resolve(file)
    }

    return (<>
            {selectedFile && <p>Name: {selectedFile.name}</p>}
            <FileUpload
                // fileTypes={['image/*']}
                // fileTypes={['pdf', 'png']}
                allowMultipleFiles={true}
                maxFileSize={5}
                // maxFilesCount={3}
                // minFilesCount={2}
                // minFileSize={1}
                onUpload={onUpload}
                onDelete={onDelete}
            />
            {selectedFile && <Image src={URL.createObjectURL(selectedFile)} alt="Uploaded Image" width={200}/>}
        </>
    )
}
