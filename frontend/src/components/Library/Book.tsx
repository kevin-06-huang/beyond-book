import { forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import PageCover from "./PageCover";
import Page from "./Page";

function Book() {
  return (
    <HTMLFlipBook width={300} height={500} showCover={true} usePortrait={false}>
      <PageCover>BOOK TITLE</PageCover>
      <Page number="1">Page text</Page>
      <Page number="2">Page text</Page>
      <Page number="3">Page text</Page>
      <Page number="4">Page text</Page>
      <Page number="4">Page text</Page>
      <Page number="4">Page text</Page>
      <Page number="4">Page text</Page>
      <Page number="4">Page text</Page>
      <Page number="4">Page text</Page>
      <PageCover>BOOK END</PageCover>
    </HTMLFlipBook>
  );
}

export { Book };
