import { ObjectInfo, InspectorReport } from "./";

function ObjectTab(props) {
    return (
        <div className={props.className}>
            <ObjectInfo
                className='obj-info flex font-normal'
                name={props.name}
                region={props.region}
                program={props.program}
                categ={props.categ}
                sRoad={props.sRoad}
                sSideWalk={props.sSideWalk}
                sRoadSide={props.sRoadSide}
                sAll={props.sAll}
            />
            <InspectorReport className='insp-rep flex flex-col space-y-5 font-thin mt-8' />
        </div>
    );
}

export default ObjectTab;
