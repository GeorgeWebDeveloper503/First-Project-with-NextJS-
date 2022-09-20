import Head from "next/head";
import  React from "react";
import ContainerMainApp from "../components/Container";
import fetch from "isomorphic-fetch";
import Users from "../components/Users";




const Index = (props) =>{

   console.log(props.users)

   return(
      <div>
         <Head>
            <title>NextJS - Home</title>
         </Head>
      
         <ContainerMainApp>
            <h1>users</h1>
            <Users users={props.users}></Users>
         </ContainerMainApp>

      </div>
   )
}

Index.getInitialProps = async (ctx) => {

   const res = await fetch("https://reqres.in/api/users?page=1");
   const data = await res.json();
   
   console.log(data);
   
   return{
         users:data.data
   };

 };
 
export default Index;