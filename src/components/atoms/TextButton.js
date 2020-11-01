function TextButton(props) {
    return (
        <div className={props.className}>
            <button className={props.textClassName}>{props.text}</button>
        </div>
    );
}

export default TextButton;
