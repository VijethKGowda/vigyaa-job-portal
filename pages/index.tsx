import JobList from "../components/JobList";
import { useSelector, useDispatch } from "react-redux";
import { FetchListData } from "../redux/actions/fatchDataAction";
import { useEffect } from "react";

export default function Home({ start }) {
  const dispatch = useDispatch();
  const selector = useSelector((state: any) => state.jobData.jobList);

  useEffect(() => {
    dispatch(FetchListData({ jobList: start }));
  }, []);
  return (
    <div className="mx-6 lg:mx-48 md:mx-16 sm:mx-6 my-10">
      <JobList data={selector} />
    </div>
  );
}

Home.getInitialProps = async () => {
  const res = await fetch(
    "https://jobs.github.com/positions.json?description=react&page=1"
  );
  const json = await res.json();
  return { start: json };
};
