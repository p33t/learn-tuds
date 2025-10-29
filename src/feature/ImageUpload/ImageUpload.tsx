import React, {FunctionComponent} from 'react'
import {FileUpload} from '@telus-uds/components-web'

export const ImageUpload: FunctionComponent = () => {
    const [selectedFile, setSelectedFile] = React.useState<File>()
    const onUpload = async (files: any[]) => {
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
        }
        else {
            error = `Expected 1 file, but got ${files.length}`
        }
        // return new Promise((resolve) => {
        //     setTimeout(() => {
        //         resolve(files)
        //     }, 500)
        // })
        
        if (error === "") {
            // success
            return Promise.resolve(files)
        }
        
        // error
        return Promise.resolve([{error: error}])
    }

    const onDelete = async (file: any) => {
        console.log('Deleting file:', file)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(file)
            }, 500)
        })
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
        </>
    )
}
