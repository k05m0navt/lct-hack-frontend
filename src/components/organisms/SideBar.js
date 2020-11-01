import { TextButton } from "../atoms";
import {
    ObjectsMenu,
    TasksMenu,
    AnalyticsMenu,
    MapMenu,
    SettingsMenu,
} from "../molecules";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PieChartIcon from "@material-ui/icons/PieChart";
import SettingsIcon from "@material-ui/icons/Settings";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import { useState } from "react";

function SideBar(props) {
    const [isClick, setIsClick] = useState(false);
    const [isObject, setIsObject] = useState(false);
    const [isTasks, setIsTasks] = useState(false);
    const [isMap, setIsMap] = useState(false);
    const [isAn, setIsAn] = useState(false);
    const [isSett, setIsSett] = useState(false);

    const handleObjectClick = () => {
        setIsObject(!isObject);
        setIsTasks(false);
        setIsMap(false);
        setIsAn(false);
        setIsSett(false);
    };
    const handleTasksClick = () => {
        setIsTasks(!isTasks);
        setIsObject(false);
        setIsMap(false);
        setIsAn(false);
        setIsSett(false);
    };
    const handleAnClick = () => {
        setIsAn(!isAn);
        setIsObject(false);
        setIsMap(false);
        setIsTasks(false);
        setIsSett(false);
    };
    const handleMapClick = () => {
        setIsObject(false);
        setIsTasks(false);
        setIsMap(!isMap);
        setIsAn(false);
        setIsSett(false);
    };
    const handleSettClick = () => {
        setIsObject(false);
        setIsTasks(false);
        setIsMap(false);
        setIsAn(false);
        setIsSett(!isSett);
    };

    const openMenu = () => {
        if (isMap) {
            return <MapMenu className='map-menu pr-20' />;
        }
        if (isObject) {
            return (
                <ObjectsMenu
                    onDrop={props.onDrop}
                    className='objects-menu pr-20'
                />
            );
        }
        if (isTasks) {
            return <TasksMenu className='tasks-menu pr-20' />;
        }
        if (isAn) {
            return <AnalyticsMenu className='an-menu pr-20' />;
        }
        if (isSett) {
            return <SettingsMenu className='an-menu pr-20' />;
        }
    };

    return (
        <div className={props.className}>
            <div className='menu mr-20'>
                <div className='flex mt-4' onClick={handleMapClick}>
                    <MapOutlinedIcon />
                    <TextButton
                        className='map ml-3'
                        text='Карта'
                        onClick={setIsClick}
                        isClick={isClick}
                    />
                </div>
                <div className='flex mt-4' onClick={handleObjectClick}>
                    <FormatListBulletedIcon />
                    <TextButton
                        className='objects ml-3'
                        text='Объекты'
                        onClick={setIsClick}
                        isClick={isClick}
                    />
                </div>
                <div className='flex mt-4' onClick={handleTasksClick}>
                    <EventNoteIcon />
                    <TextButton
                        className='tasks ml-3'
                        text='Задачи'
                        onClick={setIsClick}
                        isClick={isClick}
                    />
                </div>
                <div className='flex mt-4' onClick={handleAnClick}>
                    <PieChartIcon />
                    <TextButton
                        className='analytics ml-3'
                        text='Аналтика'
                        onClick={setIsClick}
                        isClick={isClick}
                    />
                </div>
                <div className='flex mt-4' onClick={handleSettClick}>
                    <SettingsIcon />
                    <TextButton
                        className='settings ml-3'
                        text='Настройки'
                        onClick={setIsClick}
                        isClick={isClick}
                    />
                </div>
            </div>
            {openMenu()}
            {/* <Filters/> */}
        </div>
    );
}

export default SideBar;
