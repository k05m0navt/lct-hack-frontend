/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { DropDown } from "../atoms";
import { MDBDataTable } from "mdbreact";

function TasksMenu(props) {
    const values = [
        { value: "cao", text: "Центральный административный округ" },
    ];

    const tasks = [
        {
            route: "Берников пер. — .... — проезд вдоль Ленинградского ш.",
            numbers: "08",
            avail: "Пешая",
            grade: 4.5,
            insp: "Константинов К.К.",
        },
    ];

    const data = {
        columns: [
            {
                label: "Маршрут",
                field: "route",
                sort: "asc",
                width: 150,
            },
            {
                label: "Кол_во_объектов",
                field: "numbers",
                sort: "asc",
                width: 270,
            },
            {
                label: "Доступность",
                field: "avail",
                sort: "asc",
                width: 200,
            },
            {
                label: "Оценка",
                field: "grade",
                sort: "asc",
                width: 100,
            },
            {
                label: "Инспектор",
                field: "insp",
                sort: "asc",
                width: 150,
            },
        ],
        rows: [],
    };

    useEffect(() => {
        tasks.map((task) => {
            data["rows"].push({
                route: task.route,
                numbers: task.numbers,
                avail: task.avail,
                grade: task.grade,
                insp: task.insp,
            });
        });
    });

    const [insp, setInsp] = useState(76);
    const [transp, setTransp] = useState(16);

    return (
        <div className={props.className}>
            <h2 className='font-bold text-xl'>Задания_на_обследование</h2>

            <h4 className='title font-hairline mt-3'>Подразделение</h4>
            <DropDown
                className='drop-down mt-2 bg-white border-solid border-2 border-gray-600'
                values={values}
            />
            <div className='flex mt-3'>
                <h4 className='title font-hairline mr-20'>Инспекторов:</h4>
                <h4 className='title font-hairline ml-20'>{insp} </h4>
            </div>
            <div className='flex mt-3'>
                <h4 className='title font-hairline mr-2'>
                    Транспортных_средств:{" "}
                </h4>
                <h4 className='title font-hairline ml-20'>{transp} </h4>
            </div>
            <h2 className='font-bold text-xl mt-5'>
                Таблица_формирования_задачи_по_маршрутам
            </h2>
            <MDBDataTable bordered data={data} />
        </div>
    );
}

export default TasksMenu;
