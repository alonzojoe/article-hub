import moment from "moment";

export const formatPostDate = (createdAt) => {
  const now = moment();
  const createdDate = moment(createdAt);
  let result;

  now.isSame(createdDate, "day")
    ? (result = createdDate.fromNow())
    : (result = createdDate.format("LLL"));

  return result;
};
