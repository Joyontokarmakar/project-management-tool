import avatar1 from "../assets/images/avatar-1.jpg"
import avatar2 from "../assets/images/avatar-2.jpg"
import layer from "../assets/images/icons/layer.png"
import task from "../assets/images/icons/clipboard.png"
import avatar3 from "../assets/images/avatar-3.png"
import avatar4 from "../assets/images/avatar-4.png"
import comment from "../assets/images/icons/chat.png"
import attachment from "../assets/images/icons/paper-clip.png"
import calendar from "../assets/images/icons/calendar.png"
const TaskCard = () => {
    return (
        <div className={'bg-white p-3 rounded-md mb-3'}>
            <div className={'flex justify-between items-center'}>
                <div className={'flex justify-start items-center gap-x-2'}>
                    <img src={avatar1} alt="" className={'w-5 h-5 rounded-full'}/>
                    <h3>Client Name</h3>
                </div>
                <div className={'flex justify-start items-center gap-x-2'}>
                    <img src={avatar2} alt="" className={'w-5 h-5 rounded-full'}/>
                    <h3>Sadik Istiak</h3>
                </div>
            </div>
            <div className={'flex justify-between items-center mt-3'}>
                <div className={'flex justify-start items-center gap-x-1'}>
                    <img src={layer} alt="" className={'w-3 h-3'}/>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                </div>
                <div className={'flex justify-start items-center gap-x-1'}>
                    <img src={task} alt="" className={'w-3 h-3'}/>
                    <h3><span>1</span>/<span>2</span></h3>
                </div>
            </div>
            <div className={'flex justify-between items-center mt-3'}>
                <div className={'flex justify-start items-center gap-x-2'}>
                    <img src={avatar3} alt="" className={'w-5 h-5 rounded-full'}/>
                    <img src={avatar4} alt="" className={'w-5 h-5 rounded-full'}/>
                </div>
                <p className={'w-5 h-5 bg-[#e8eef3] text-xs text-center rounded-full'}>12+</p>
                <div className={'flex justify-start items-center gap-x-1'}>
                    <img src={comment} alt="" className={'w-3 h-3'}/>
                    <h3>15</h3>
                </div>
                <div className={'flex justify-start items-center gap-x-1'}>
                    <img src={attachment} alt="" className={'w-3 h-3'}/>
                    <h3>25</h3>
                </div>
                <div className={'flex justify-start items-center gap-x-1'}>
                    <img src={calendar} alt="" className={'w-3 h-3'}/>
                    <h3>30-12-2023</h3>
                </div>
            </div>
        </div>
    )
}
export default TaskCard
