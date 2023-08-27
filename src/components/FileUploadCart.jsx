import Modal from "./Modal.jsx";
import {useEffect, useState} from "react";
import axios from 'axios';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const FileUploadCart = (prop) => {
    let {onHideModal} = prop;
    const [selectedFiles, setSelectedFiles] = useState([]);
    const handleFileInputChange = (event) => {
        const files = event.target.files;
        setSelectedFiles([...selectedFiles, ...files]);
    };
    const handleFileUpload = async () => {
        const formData = new FormData();
        selectedFiles.forEach((file) => {
            formData.append('files', file);
        });
        try {
            await axios.post('https://project-management-tool-server-x0l7.onrender.com/files', formData);
            toast.success('🦄 File upload Successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setSelectedFiles([])
        } catch (error) {
            toast.error('🦄 File uploading failed!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setSelectedFiles([])
        }
    };

    return (
        <div>
            <Modal onClose={onHideModal}>
                <button className={'block text-2xl ml-auto'} onClick={onHideModal}>&times;</button>

                <div className={'flex justify-between gap-x-5'}>
                    <div className={(prop.files.length >= 1 ? 'w-1/2' : 'w-full')}>
                        <div className={'file-choose-card ' + (prop.files.length >= 1 ? 'w-full' : 'w-1/2')}>
                            <label htmlFor="fileUpload" className={'file-input-label'}>Upload Files</label>
                            <input
                                id="fileUpload"
                                type="file"
                                multiple
                                onChange={handleFileInputChange}
                                className={ 'file-input' }
                            />
                        </div>

                        <button onClick={handleFileUpload} className={'block mx-auto bg-blue-900 text-white rounded-full px-5 py-2'}>Upload</button>
                    </div>
                    <div className={"border-l-2 border-gray-500 pl-10 h-full w-1/2"}>
                        <h2 className={'text-blue-900 underline text-center font-bold mb-5'}>Your all Uploaded files</h2>
                        <div className={'h-[200px] overflow-y-scroll pl-5'}>
                            <ul className={'list-disc'}>
                                {
                                    prop.files.map((item, index)=>{
                                        return <li className={'text-black'} key={index}>{item.name}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </Modal>
            <ToastContainer />
        </div>
    );
};
export default FileUploadCart;
