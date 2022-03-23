import { css } from '@emotion/react';

export const BlogContent = css`
  width: 100%;
  display: flex;
  position: relative;
  margin: 20px 0px;
  * {
    font-family: 'Montserrat', sans-serif;
    color: #292929;
    ::selection {
      background: #e9e9e9;
    }
  }
  a {
    color: #f1576c;
    cursor: pointer;
  }
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.25rem;
  }
  h5 {
    font-size: 1rem;
  }
  h6 {
    font-size: 0.875rem;
  }
  p {
    font-size: 14px;
  }
  img {
    padding-top: 40px;
    width: 100%;
  }
  ol {
    list-style-type: decimal;
    padding-left: 1rem;
  }
  ul {
    list-style-type: disc;
    padding-left: 1rem;
  }
  table {
    height: max-content;
    margin: 20px 0px;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }
  th,
  td {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
  }
  td {
    font-weight: 500;
  }
  tr:nth-child(even) {
    color: #2e2e2e;
    background-color: #f3f3f3;
  }
  p {
    max-width: 100%;
    word-break: break-word;
  }

  .ProseMirror-selectednode {
    background: #f2f2f2;
  }
  @media only screen and (max-width: 980px) {
    width: 100%;
  }
  .video-wrapper {
    width: 100%;
    margin: 0px 0px 20px 0px;
    video {
      width: 100%;
    }
  }
  .iframe-wrapper {
    margin: 0px 0px 20px 0px;
    position: relative;
    padding-bottom: math.div(100, 16) * 9%;
    height: 0;
    overflow: hidden;
    width: 100%;
    height: 400px;

    &.ProseMirror-selectednode {
      outline: 3px solid #68cef8;
    }

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

export const BlogCard = css`
  line-height: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  img {
    height: 0px;
  }
  * {
    font-size: 12px;
    font-weight: 500;
  }
`;
