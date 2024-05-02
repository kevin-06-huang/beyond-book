import { forwardRef } from "react";

const PageCover = forwardRef((props, ref) => {
  return (
    <div
      className="bg-blue-500 relative flex flex-col justify-center items-center h-full"
      ref={ref}
      data-density="hard"
    >
      <h2 className="text-center pt-28 font-bold text-2xl">{props.children}</h2>
    </div>
  );
});

export default PageCover;
