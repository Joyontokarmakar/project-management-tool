import ProjectStatusCard from "../components/ProjectStatusCard.jsx";

const Home = () => {
    return (
        <div>
            <h1 className={'text-blue-500 text-center text-5xl'}>Project Management Tool</h1>
            <div className={'p-5'}>
                <div className={'h-[calc(100vh-100px)] w-auto overflow-y-hidden overflow-x-auto border flex justify-start gap-x-5 p-2'}>
                    <ProjectStatusCard/>
                    <ProjectStatusCard/>
                    <ProjectStatusCard/>
                    <ProjectStatusCard/>
                    <ProjectStatusCard/>
                    <ProjectStatusCard/>
                    <ProjectStatusCard/>
                    <ProjectStatusCard/>
                    <ProjectStatusCard/>
                    <ProjectStatusCard/>
                    <ProjectStatusCard/>
                </div>
            </div>
        </div>
    )
}
export default Home
