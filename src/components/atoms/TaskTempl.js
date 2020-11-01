function TaskTempl(props) {
    return (
        <div className={props.className}>
            <p>{props.route}</p>
            <p>{props.numbers}</p>
            <p>{props.avail}</p>
            <p>{props.grade}</p>
            <p>{props.insp}</p>
        </div>
    );
}

export default TaskTempl;
