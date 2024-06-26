const PostComments = (props) => {
  return (
    <div className="position-relative">
      <div className="p-4 rounded-2 text-bg-light mb-3">
        <div className="d-flex align-items-center gap-3">
          <img
            src="./assets/images/profile/user-3.jpg"
            alt=""
            className="rounded-circle"
            width="33"
            height="33"
          />
          <h6 className="fw-semibold mb-0 fs-4">Deran Mac</h6>
          <span className="fs-2">
            <span className="p-1 text-bg-muted rounded-circle d-inline-block"></span>{" "}
            8 min ago
          </span>
        </div>
        <p className="my-3">
          Lufo zizrap iwofapsuk pusar luc jodawbac zi op uvezojroj duwage vuhzoc
          ja vawdud le furhez siva fikavu ineloh. Zot afokoge si mucuve hoikpaf
          adzuk zileuda falohfek zoije fuka udune lub annajor gazo conis sufur
          gu.
        </p>
      </div>
    </div>
  );
};

export default PostComments;
