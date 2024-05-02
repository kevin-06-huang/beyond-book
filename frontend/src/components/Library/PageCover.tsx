import { forwardRef } from "react";

const PageCover = forwardRef((props, ref) => {
  return (
    <div className="bg-blue-500" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

export default PageCover;
