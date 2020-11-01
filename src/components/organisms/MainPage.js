import { Map } from "../atoms";
import { SideBar } from "../organisms";
import "react-dropzone-uploader/dist/styles.css";

function MainPage(props) {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://ict-hack-api.herokuapp.com";
    const sendFileUrl = url + "/api/itemized-lists/upload";

    const onDrop = (file) => {
        console.log(file);
        var formdata = new FormData();
        formdata.append("year", "2019");
        formdata.append("file", file);

        var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
        };

        fetch(proxyUrl + sendFileUrl, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    };

    return (
        <div className={props.className}>
            <SideBar onDrop={onDrop} className='side-bar flex mt-8' />
            <Map className='map h-screen w-full' />
        </div>
    );
}

export default MainPage;
