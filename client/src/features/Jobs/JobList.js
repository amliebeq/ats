import { useSelector } from 'react-redux';
import { Job } from './Job';
import { AddJobForm } from './AddJobForm';

export const JobsList = () => {
    const jobs = useSelector(state => state.login.user.jobs)

    const jobListCreation = jobs.map(job => <Job job={job} key={job.id} />)

    return (
        <div className='pl-4 pr-12 break-words'>
            <h1 className='py-8 text-2xl text-center'>Jobs</h1>
            <AddJobForm />
            {jobs.length === 0 ? <p>No jobs added yet!</p> : jobListCreation}
        </div>
    )
}
