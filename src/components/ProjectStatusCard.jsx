import TaskCard from "./TaskCard.jsx";

const ProjectStatusCard = (prop) => {
    return (
        <div className={'flex-shrink-0 bg-[#f2f4f7] p-2.5 pr-0 w-[350px]'}>
            <div className={'pl-2 pr-5 flex justify-between items-center'}>
                <div className={'flex justify-between gap-x-2 items-center'}>
                    <div
                        className={'h-4 w-4 rounded-l-full ' +
                            (
                                prop.status === 'danger' ? 'bg-red-500' :
                                prop.status === 'queue' ? 'bg-blue-400' :
                                prop.status === 'inProgress' ? 'bg-yellow-500' :
                                prop.status === 'okay' ? 'bg-purple-500' :
                                prop.status === 'warning' ? 'bg-lime-500' :
                                prop.status === 'default' ? 'bg-gray-300' :
                                prop.status === 'success' ? 'bg-green-500' :
                                ''
                            )
                        }
                    >
                    </div>
                    <h2>{prop.title}</h2>
                </div>
                <p className={'w-4 h-4 bg-[#e8eef3] text-xs text-center'}>0</p>
            </div>
            <div className={'mt-6 h-full pr-2.5 overflow-y-auto' }>
                <TaskCard onShowModal={prop.onShowModal} fileLength={prop.fileLength}/>
                <TaskCard onShowModal={prop.onShowModal} fileLength={prop.fileLength}/>
                <TaskCard onShowModal={prop.onShowModal} fileLength={prop.fileLength}/>
                <TaskCard onShowModal={prop.onShowModal} fileLength={prop.fileLength}/>
                <TaskCard onShowModal={prop.onShowModal} fileLength={prop.fileLength}/>
                <TaskCard onShowModal={prop.onShowModal} fileLength={prop.fileLength}/>
                <TaskCard onShowModal={prop.onShowModal} fileLength={prop.fileLength}/>
                <TaskCard onShowModal={prop.onShowModal} fileLength={prop.fileLength}/>
                <TaskCard onShowModal={prop.onShowModal} fileLength={prop.fileLength}/>
                <TaskCard onShowModal={prop.onShowModal} fileLength={prop.fileLength}/>
                <TaskCard onShowModal={prop.onShowModal} fileLength={prop.fileLength}/>
                <TaskCard onShowModal={prop.onShowModal} fileLength={prop.fileLength}/>
                <TaskCard onShowModal={prop.onShowModal} fileLength={prop.fileLength}/>
            </div>
        </div>
    )
}
export default ProjectStatusCard
