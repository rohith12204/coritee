"use client";

import React, { use } from "react";
import { Editor } from "./editor"; // Adjust the path to "editor" if it's located elsewhere
import { Toolbar } from "./toolbar";
import { Navbar } from "./navbar";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>; // params is now a Promise
}

const DocumentIdPage: React.FC<DocumentIdPageProps> = ({ params }) => {
  const { documentId } = use(params); // Unwrap the params using React's use()

  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD] print:hidden">
        <Navbar/>
        <Toolbar />
      </div>
      <div className="pt-[114px] print:pt-0">
        <Editor />
      </div>
    </div>
  );
};

export default DocumentIdPage;
