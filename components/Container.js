import Head from "next/head";

import Navigation from "./navigation";

const ContainerMainApp = (props) =>(
   <div>
      <Head>
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css" integrity="sha384-qF/QmIAj5ZaYFAeQcrQ6bfVMAh4zZlrGwTPY7T/M+iTTLJqJBJjwwnsE5Y0mV7QK" crossorigin="anonymous"></link>
      </Head>
      <Navigation></Navigation>
      
      <div className="container pt-5">
         {props.children}
      </div>

   </div>
)

export default ContainerMainApp;