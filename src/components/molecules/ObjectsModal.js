import { DropZone, DropDown } from "../atoms";

function ObjectsModal(props) {
    return (
        <div>
            <DropZone
                onDrop={props.onDrop}
                className='drop-zone mt-3 border-dotted border-4 border-gray-600'
                inputClassName='input py-10 pl-5'
                text='Перетащите_список_объектов'
            />
            <p className='mt-3'>За_какой_год</p>
            <DropDown
                className='drop-down mt-2 bg-white border-solid border-2 border-gray-600'
                values={props.values}
            />
        </div>
    );
}

export default ObjectsModal;
