import Dropzone from "react-dropzone";

function DropZone(props) {
    return (
        <div className={props.className}>
            <Dropzone onDrop={props.onDrop}>
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps()} />
                        <p className={props.inputClassName}>{props.text}</p>
                    </div>
                )}
            </Dropzone>
        </div>
    );
}

export default DropZone;
