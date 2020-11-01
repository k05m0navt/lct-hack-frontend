function    ObjectInfo(props) {
    return (
        <div className={props.className}>
            <div className='name flex flex-col space-y-3'>
                <p className=''>Наименование</p>
                <p className=''>Округ</p>
                <p className=''>Программа</p>
                <p className=''>Категория</p>
                <p className=''>Площадь_проезжей_части</p>
                <p className=''>Площадь_тротуара</p>
                <p className=''>Обочины</p>
                <p className=''>Площадь_всего</p>
            </div>
            <div className='name flex flex-col space-y-3 ml-16'>
                <p className='font-thin'>{props.name}</p>
                <p className='font-thin'>{props.region}</p>
                <p className='font-thin'>{props.program}</p>
                <p className='font-thin'>{props.categ}</p>
                <p className='font-thin'>{props.sRoad}</p>
                <p className='font-thin'>{props.sSideWalk}</p>
                <p className='font-thin'>{props.sRoadSide}</p>
                <p className='font-thin'>{props.sAll}</p>
            </div>
        </div>
    );
}

export default ObjectInfo;
