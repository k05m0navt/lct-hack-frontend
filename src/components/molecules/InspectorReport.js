function InspectorReport(props) {
    return (
        <div className={props.className}>
            <div className='flex font-semibold'>
                <p className=''>Отчет инспектора</p>
            </div>
            <div className='insp-name flex'>
                <p className=''>Инспектор</p>
                <p className=''>{props.inspName}</p>
            </div>
            <div className='date flex'>
                <p className=''>Дата</p>
                <p className=''>{props.date}</p>
            </div>
            <div className='grade flex'>
                <p className=''>Оценка</p>
                <p className=''>{props.grade}</p>
            </div>
            <div className='categ flex'>
                <p className=''>Категория</p>
                <p className=''>{props.categ}</p>
            </div>
            <div className='comment flex'>
                <p className=''>Комментарий</p>
                <p className=''>{props.comment}</p>
            </div>
        </div>
    );
}

export default InspectorReport;
