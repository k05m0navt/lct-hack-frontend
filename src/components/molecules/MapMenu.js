/* eslint-disable no-unused-vars */
import { useState } from "react";
import { ObjectTab } from "./";
import ObjectInfo from "./ObjectInfo";

function MapMenu(props) {
    const [objectInfo, setObjectInfo] = useState({
        name: "Сходненская_ул.",
        region: "ЦАО",
        program: "текущий_ремонт",
        categ: "2-я",
        sRoad: "2_500_кв_м",
        sSideWalk: "2_000_кв_м",
        sRoadSide: "0_кв_м",
        sAll: "4_500_кв_м",
    });
    const [isObject, setIsObject] = useState(true);
    const [isContr, setIsContr] = useState(false);
    const [isFeed, setIsFeed] = useState(false);

    const handleObjectClick = () => {
        setIsObject(true);
        setIsContr(false);
        setIsFeed(false);
    };
    const handleContrClick = () => {
        setIsContr(true);
        setIsObject(false);
        setIsFeed(false);
    };
    const handleFeedClick = () => {
        setIsFeed(true);
        setIsObject(false);
        setIsContr(false);
    };

    const openTab = () => {
        if (isObject) {
            return (
                <ObjectTab
                    className='map-menu pr-20 mt-5'
                    name={objectInfo.name}
                    region={objectInfo.region}
                    program={objectInfo.program}
                    categ={objectInfo.categ}
                    sRoad={objectInfo.sRoad}
                    sSideWalk={objectInfo.sSideWalk}
                    sRoadSide={objectInfo.sRoadSide}
                    sAll={objectInfo.sAll}
                />
            );
        }
        // if (isContr) {
        //     return (
        //         <ObjectsMenu
        //             onDrop={props.onDrop}
        //             className='objects-menu pr-20'
        //         />
        //     );
        // }
        // if (isFeed) {
        //     return <TasksMenu className='tasks-menu pr-20' />;
        // }
    };

    return (
        <div className={props.className}>
            <h2 className='font-bold text-xl'>Карта</h2>
            <div className='nav-bar flex space-x-10'>
                <button
                    className='border-b-2 border-gray-600 py-3'
                    onClick={handleObjectClick}
                >
                    Объект_ремонта
                </button>
                <button
                    className='border-b-2 border-gray-600'
                    onClick={handleContrClick}
                >
                    Контракты
                </button>
                <button
                    className='border-b-2 border-gray-600'
                    onClick={handleFeedClick}
                >
                    Отзывы
                </button>
            </div>
            {openTab()}
        </div>
    );
}

export default MapMenu;
