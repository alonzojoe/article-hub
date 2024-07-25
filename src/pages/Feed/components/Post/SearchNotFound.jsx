import Card from "../../../../components/Card";
import { useSearchParams } from "react-router-dom";
const SearchNotFound = () => {
  const [searchParams] = useSearchParams();

  const keyword = searchParams.get(`${import.meta.env.VITE_SEARCH_KEYWORD}`);

  const message = (
    <u>
      <b>{keyword}</b>
    </u>
  );

  return (
    <Card>
      <div className="text-center">
        <i
          className="ti ti-mood-sad text-danger"
          style={{ fontSize: "40px" }}
        ></i>
        <h3 className="mt-2">
          We&apos;re sorry. We were unable to find a match..
        </h3>
        <p className="fs-5">
          We could&apos;nt find any matches for &quot;{message}&quot;
        </p>
      </div>
    </Card>
  );
};

export default SearchNotFound;
