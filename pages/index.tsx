import JobList from "../components/JobList";
import { useSelector, useDispatch } from "react-redux";
import { FetchListData } from "../redux/actions/fatchDataAction";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.jobData.jobList);

  useEffect(() => {
    dispatch(FetchListData());
  }, []);
  return (
    <div className="mx-6 lg:mx-48 md:mx-16 sm:mx-6 my-10">
      <JobList data={selector} />
    </div>
  );
}
