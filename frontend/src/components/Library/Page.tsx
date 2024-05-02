import { forwardRef } from "react";

const Page = forwardRef((props, ref) => {
  return (
    <div
      className="relative bg-white py-4 px-8 flex flex-col min-h-full"
      ref={ref}
      data-density="soft"
    >
      <p>{props.children}</p>
      <p className="absolute bottom-0 left-0 right-0 text-center mb-2">
        {props.number}
      </p>
    </div>
  );
});

export default Page;
