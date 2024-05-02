import { forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import PageCover from "./PageCover";
import Page from "./Page";

function Book({ title, pages }: { title: string; pages: string[] }) {
  return (
    <div>
      <HTMLFlipBook
        width={400}
        height={550}
        showCover={true}
        usePortrait={false}
      >
        <PageCover>{title}</PageCover>
        {pages.map((page, index) => (
          <Page key={index} number={index + 1}>
            {page}
          </Page>
        ))}
        <Page number="4">Page text</Page>
        <PageCover>Fin</PageCover>
      </HTMLFlipBook>
    </div>
  );
}

export { Book };
