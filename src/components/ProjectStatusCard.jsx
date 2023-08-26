import TaskCard from "./TaskCard.jsx";

const ProjectStatusCard = () => {
    return (
        <div className={'flex-shrink-0 bg-[#f2f4f7] p-2.5 pr-0 w-[350px]'}>
            <div className={'pl-2 pr-5 flex justify-between items-center'}>
                <div className={'flex justify-between gap-x-2 items-center'}>
                    <div className={'h-4 w-4 bg-red-500 rounded-l-full'}></div>
                    <h2>Incomplete</h2>
                </div>
                <p className={'w-4 h-4 bg-[#e8eef3] text-xs text-center'}>0</p>
            </div>
            <div className={'mt-6 h-full pr-2.5 overflow-y-auto'}>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
            </div>
        </div>
    )
}
export default ProjectStatusCard
