import  React from "react";
import ContainerMainApp from "../components/Container";
import Head from "next/head";

const About = () =>{
   
   return(
         <div>
            <Head>
               <title>NextJS - Services</title>
            </Head>
            <ContainerMainApp>
               <h1>Hello Services</h1>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            </ContainerMainApp>
         </div>
   )

}

export default About;