import SkeletonPost from "./SkeletonPost";

const ScrollLoader = () => {
  const items = [1, 2];
  return (
    <>
      {items.map((item) => (
        <SkeletonPost withComments={false} key={item} />
      ))}
    </>
  );
};

export default ScrollLoader;
