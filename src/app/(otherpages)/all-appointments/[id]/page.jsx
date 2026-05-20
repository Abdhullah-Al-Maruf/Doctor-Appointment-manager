"use client"
import { useParams } from 'next/navigation';


const DetailsPage = ({params}) => {
const {id}=useParams(params)
// todo: get the data from api
// now this will fetch only that id data from the server
    return (
        <div>
            details page
        </div>
    );
};

export default DetailsPage;