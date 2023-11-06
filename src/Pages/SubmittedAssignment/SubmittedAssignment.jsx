import { useLoaderData } from "react-router-dom";
import SubmittedAssignmentCard from "../SubmittedAssignmentCard/SubmittedAssignmentCard";



const SubmittedAssignment = () => {
  const submittedAssignment = useLoaderData();
  console.log(submittedAssignment);

  return (
    <div>

      <div className='grid lg:grid-cols-3 p-1 lg:p-2  gap-5 container mx-auto my-5 '>
        {
          submittedAssignment.filter(card => { return card.status !== "" }).map(assignment => <SubmittedAssignmentCard key={assignment._id} assignment={assignment}></SubmittedAssignmentCard>)
        }
      </div>
    </div>
  );
};

export default SubmittedAssignment;
