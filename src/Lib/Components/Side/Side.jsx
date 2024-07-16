import { useSelector } from 'react-redux';
import CloseSide from './Close/CloseSide';
import OpenSide from './Open/OpenSide';
import { data } from '../../Model/Redux/Reducer/Data';


const Side = () => {

    const sideParam = useSelector((state)=>state.data.appStatus);
    console.log(sideParam.onSide)
   return (
    <>
       {sideParam.onSide ? <OpenSide/> : <CloseSide/>}
    </>
   )
}

export default Side