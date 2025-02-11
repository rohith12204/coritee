"use client";

import { useEditor, EditorContent } from '@tiptap/react'
import { useEditorStore } from '@/store/use-editor-store'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Image from '@tiptap/extension-image'
import ImageResize from 'tiptap-extension-resize-image';
import Underline from '@tiptap/extension-underline'
import FontFamily from '@tiptap/extension-font-family'
import { Color } from '@tiptap/extension-color'
import Highlight from '@tiptap/extension-highlight'
import Link from '@tiptap/extension-link'
import TextStyle from '@tiptap/extension-text-style'
import TextAlign from '@tiptap/extension-text-align'
import StarterKit from '@tiptap/starter-kit'
import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
import { FontSizeExtension } from '@/extensions/font-size';
import { Ruler } from './ruler';
import { Threads } from './threads';


export const Editor = () => {
    const liveblocks=useLiveblocksExtension();
    const { setEditor } = useEditorStore(); 

    const editor = useEditor({
      immediatelyRender:false,
      onCreate( {editor} ) {
        setEditor(editor);
      },
      onDestroy(){
        setEditor(null);
      },
      onUpdate( {editor} ){
        setEditor( editor )
      },
      onSelectionUpdate( {editor} ){
        setEditor( editor )
      },
      onTransaction( {editor} ){
        setEditor( editor )
      },
      onFocus( {editor} ){
        setEditor( editor )
      },
      onBlur( {editor} ){
        setEditor( editor )
      },
      onContentError( {editor} ){
        setEditor( editor )
      },
        editorProps:{
            attributes:{
                style:"padding-left:56px;padding-right:56px",
                class:"focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
            },
        },
        extensions: [
            StarterKit.configure({
              history:false,
            }),
            liveblocks,
            FontSizeExtension,
            TaskItem.configure({       //should remove later
                nested:true,
            }),
            FontFamily,
            TextStyle,
            TextAlign.configure({
              types:["heading","paragraph"]
            }),
            Color,
            Highlight.configure({
              multicolor: true,             //provides multicolor or else provides only yellow color
            }),
            TaskList,
            Table,
            TableCell,
            TableRow,
            TableHeader,
            Image,
            Link.configure({
              openOnClick:false,
              autolink:true,
              defaultProtocol: "https"
            }),
            ImageResize,
            Underline,
        ],
        /*content: `
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>Singer</td>
              <td>Songwriter</td>
              <td>Actress</td>
            </tr>
          </tbody>
        </table>
      `,*/
    })

    return (
      <div className="flex flex-col items-center justify-start size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
          <div className="w-full">
              <Ruler />
          </div>
          <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
              <EditorContent editor={editor} />
              <Threads editor={editor}/>
          </div>
      </div>
  );
  
};

export default Editor;