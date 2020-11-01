function DropDown(props) {
    return (
        <select className={props.className}>
            {props.values.map((value) => {
                return <option value={value.value}>{value.text}</option>;
            })}
        </select>
    );
}

export default DropDown;
