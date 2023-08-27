import Home from "./pages/home.jsx";
import {Fragment, useState} from "react";
import FileUploadCart from "./components/FileUploadCart.jsx";
import axios from "axios";

function App() {
    const [modalIsShown, setModalIsShown] = useState(false);
    const [files, setFiles] = useState(0);

    async function fetchFiles() {
        try {
            const response = await axios.get('https://project-management-tool-server-x0l7.onrender.com/files'); // Replace with your backend route
            setFiles(response.data.files);
        } catch (error) {
            console.error('Error fetching files', error);
        }
    }

    fetchFiles();
    const showModalHandler = () => {
        setModalIsShown(true);
    }
    const hideModalHandler = () => {
        setModalIsShown(false);
    }

    return (
        <Fragment>
            <div className={'relative'}>
                {modalIsShown && <FileUploadCart onHideModal={hideModalHandler} files={files}/>}
                <Home onShowModal={showModalHandler} fileLength={files.length}/>
            </div>
        </Fragment>
    )
}

export default App
