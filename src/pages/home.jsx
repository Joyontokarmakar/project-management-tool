import ProjectStatusCard from "../components/ProjectStatusCard.jsx";
import {useState} from "react";

const Home = (prop) => {
    return (
        <div>
            <h1 className={'text-blue-500 text-center text-5xl'}>Project Management Tool</h1>
            <div className={'p-5'}>
                <div className={'h-[calc(100vh-100px)] w-auto overflow-y-hidden overflow-x-auto border flex justify-start gap-x-5 p-2'}>
                    <ProjectStatusCard onShowModal={prop.onShowModal} fileLength={prop.fileLength} title={"Incomplete"} status={"danger"}/>
                    <ProjectStatusCard onShowModal={prop.onShowModal} fileLength={prop.fileLength} title={"To Do"} status={"queue"}/>
                    <ProjectStatusCard onShowModal={prop.onShowModal} fileLength={prop.fileLength} title={"Doing"} status={"inProgress"}/>
                    <ProjectStatusCard onShowModal={prop.onShowModal} fileLength={prop.fileLength} title={"Under Review"} status={""}/>
                    <ProjectStatusCard onShowModal={prop.onShowModal} fileLength={prop.fileLength} title={"OverDue"} status={""}/>
                    <ProjectStatusCard onShowModal={prop.onShowModal} fileLength={prop.fileLength} title={"Completed"} status={"okay"}/>
                    <ProjectStatusCard onShowModal={prop.onShowModal} fileLength={prop.fileLength} title={"QA"} status={"warning"}/>
                    <ProjectStatusCard onShowModal={prop.onShowModal} fileLength={prop.fileLength} title={"Stash"} status={"default"}/>
                    <ProjectStatusCard onShowModal={prop.onShowModal} fileLength={prop.fileLength} title={"Deployed"} status={"success"}/>
                </div>
            </div>
        </div>
    )
}
export default Home
