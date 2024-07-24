import { useSelector } from 'react-redux';
import CloseSide from './Close/CloseSide';
import OpenSide from './Open/OpenSide';


const Side = () => {

    const sideParam = useSelector((state)=>state.data.appStatus);
   return (
    <>
       {sideParam.onSide ? <OpenSide/> : <CloseSide/>}
    </>
   )
}

export default Side