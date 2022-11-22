import Image from "next/image";

const ImageComp = () => {
    return ( 
       <div>
         <div style={{
            width:"200px",
            height: "200px"
         }}>
            <Image src="/download.jpeg" alt="photo" width={100} height={80} />
         </div>
       </div>
     );
}
 
export default ImageComp;