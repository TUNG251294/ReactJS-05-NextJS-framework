import { useRouter } from "next/router";

export default function Student(){
    const router = useRouter();
    const {id} = router.query;
    return(
        <div>
          <h2>Student Information</h2> 
          <p>Student: {id}</p>
        </div>
    );
}