import { forwardRef } from "react";

const Page = forwardRef((props, ref) => {
  return (
    <div className="bg-red-500" ref={ref} data-density="soft">
      <h1>Page Header</h1>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  );
});

export default Page;
