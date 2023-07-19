import React, { useState } from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import "./styles.css";
import DeleteIcon from '@mui/icons-material/Delete';
import CreateNewFolderRoundedIcon from '@mui/icons-material/CreateNewFolderRounded';
import Skeleton from '@mui/material/Skeleton';
function Files() {
    function FileItem(props) {
        // const [showFileDetails, setShowFileDetails] = useState(false);
        // const [fileSize, setSize] = useState(0);
        // function handleFileSelection(event) {
        //     const file = event.target;
        //     setSize(file.size);
        //     console.log(event.target.size);
        //     setShowFileDetails(true);
        // }
        return (
            <div className='fileitem'>
                <a href="#" className='fileitemtext' >
                    <FolderIcon className='folder-icon' />{props.name}</a>
                <DeleteIcon fontSize='small' className='delete-icon' />
                {/* {showFileDetails ? <div className="file-detail">
                    <div className="size">{fileSize} bytes</div>
                </div> : null} */}
                {/* <form><input accept=".js,.cpp,.docs,.c,.json,.jsx,.css,.html" onChange={handleFileSelection} type='file'></input></form> */}
            </div>

        );
    }

    const [newFile, setNewFile] = useState("");
    const [allFiles, setAllFiles] = useState(["Readme"]);
    // const [fileName, setFileName] = useState("");
    function insertItem() {
        const value = newFile;
        if (value.length > 0) {
            setAllFiles(prev => [
                [value],
                ...prev
            ])
            console.log(value);
            setNewFile("");
        }

    }
    function changeNewFile(event) {
        const value = event.target.value
        // console.log(value);
        return setNewFile(value);
    }
    const [showTextArea, setShowTextArea] = useState(true);
    return (
        <div className="container">
            <div className='files-container'>
                <div className='files-handling'>
                    <div className='file-heading'>Files</div>
                    {/* <form action="/" method="post"> */}
                    <form>
                        <input type="text" onChange={changeNewFile} value={newFile} placeholder='Enter file name' name='filename' size="18" />
                        {/* <button type='submit' onClick={insertItem}><CreateNewFolderRoundedIcon /></button> */}
                        <p onClick={insertItem}><CreateNewFolderRoundedIcon fontSize='small' /></p>
                    </form>
                </div>

                <div className='file-item-container'>
                    {allFiles.map((item, index) => {
                        return <FileItem name={item} key={index} />;
                    })}
                </div>
            </div>
            <div className="textarea-view">
                {showTextArea ? <div>hi</div> : <div className="skeleton">
                    <Skeleton animation="wave" className='skeleton-item' />
                    <Skeleton animation="wave" className='skeleton-item' />
                    <Skeleton animation="wave" className='skeleton-item' />
                    <Skeleton animation="wave" className='skeleton-item' />
                    <Skeleton animation="wave" className='skeleton-item' />
                    <Skeleton animation="wave" className='skeleton-item' />
                    <Skeleton animation="wave" className='skeleton-item' />
                    <Skeleton animation="wave" className='skeleton-item' />
                    <Skeleton animation="wave" className='skeleton-item' />
                    <Skeleton animation="wave" className='skeleton-item' />
                    <Skeleton animation="wave" className='skeleton-item' />
                    <Skeleton animation="wave" className='skeleton-item' />
                    <Skeleton animation="wave" className='skeleton-item' />
                    <Skeleton animation="wave" className='skeleton-item' />
                    <Skeleton animation="wave" className='skeleton-item' />
                    <Skeleton animation="wave" className='skeleton-item' />
                    <Skeleton animation="wave" className='skeleton-item' />
                    <Skeleton animation="wave" className='skeleton-item' />
                    <Skeleton animation="wave" className='skeleton-item' />
                    <Skeleton animation="wave" className='skeleton-item' />
                    <Skeleton animation="wave" className='skeleton-item' />
                    <Skeleton animation="wave" className='skeleton-item' />
                </div>
                }
            </div>
        </div>

    )
}
export default Files;