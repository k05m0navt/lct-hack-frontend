import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import GetAppIcon from "@material-ui/icons/GetApp";
import SkyLight from "react-skylight";
import { ObjectsModal } from "./";

function ObjectsMenu(props) {
    const handleClick = () => {
        SkyLight.simpleDialog.show();
    };

    const myDialog = {
        width: "25%",
        height: "20%",
        marginTop: "-10%",
        marginLeft: "-10%",
    };

    const values = [
        { key: 1, value: "2020", text: "2020" },
        { key: 2, value: "2021", text: "2021" },
    ];

    return (
        <div className={props.className}>
            <h2 className='font-bold text-xl'>Объекты_благоустройства</h2>

            <h4 className='font-medium  title mt-3 text-lg'>
                Титульные_списки_объектов_благоустройства, используемые в
                приложении
            </h4>
            <h6 className='text font-light mt-5 text-base'>
                Добавьте_сюда_список_титульных_объектов_благоустройства_по
                годам, для_определения_набора_данных.
            </h6>
            <button
                className='font-hairline flex items-center mt-5'
                onClick={handleClick}
            >
                <AddBoxOutlinedIcon color='primary' style={{ fontSize: 30 }} />
                <p className='ml-5'>Добавить_новый_список</p>
            </button>

            <h4 className='font-medium title mt-8 text-lg'>Телеграм_бот</h4>
            <h6 className='text font-light mt-5 text-base'>
                Бот,_позволяющий_получать_задания_и_давать_всю
                необходимую_инфу_после_проверок_инспектором
            </h6>
            <form action='https://t.me/for_inspectors_bot'>
                <button type='submit' className='link text-blue-700 mt-5'>
                    Инспектор_Бот
                </button>
            </form>

            <h4 className='font-medium title mt-8 text-lg'>
                Отчет_по_результатам_обследований_объектов благоустройства
            </h4>
            <h6 className='text font-light mt-5 text-base'>
                После_выполнения_задач_по_обследованию, система
                автоматически_будет_обновлять_титульный_список_титульных
                объектов_и_выгружать_его_в_виде_отчета
            </h6>
            <button className='flex items-center mt-5 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'>
                <GetAppIcon style={{ fontSize: 30 }} />
                Выгрузить
            </button>

            <SkyLight
                dialogStyles={myDialog}
                hideOnOverlayClicked
                ref={(ref) => (SkyLight.simpleDialog = ref)}
                title='Добавить_список_объектов'
            >
                <ObjectsModal values={values} onDrop={props.onDrop} />
            </SkyLight>
        </div>
    );
}

export default ObjectsMenu;
