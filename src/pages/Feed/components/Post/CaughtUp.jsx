import Card from "../../../../components/Card";
const CaughtUp = () => {
  return (
    <Card>
      <div className="text-center">
        <i
          className="ti ti-circle-check text-success"
          style={{ fontSize: "40px" }}
        ></i>
        <h3 className="mt-2">You&apos;re all caught up</h3>
        <p className="fs-5">
          You&apos;ve reached the bottom and seen all the articles posted by
          other people.
        </p>
      </div>
    </Card>
  );
};

export default CaughtUp;
