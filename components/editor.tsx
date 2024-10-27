"use client";

import { useEffect, useRef, useState } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';

interface EditorProps {
  onChange: (data: OutputData) => void;
  initialData?: OutputData;
}

export default function Editor({ onChange, initialData }: EditorProps) {
  const editorRef = useRef<EditorJS | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      return;
    }

    const initEditor = async () => {
      if (editorRef.current) return;

      const editor = new EditorJS({
        holder: 'editor',
        tools: {
          header: {
            class: Header,
            config: {
              levels: [2, 3],
              defaultLevel: 2
            }
          },
          list: {
            class: List,
            inlineToolbar: true
          },
          paragraph: {
            class: Paragraph,
            inlineToolbar: true
          }
        },
        data: initialData,
        onChange: async () => {
          const data = await editor.save();
          onChange(data);
        },
        placeholder: 'Start writing your recipe instructions...'
      });

      editorRef.current = editor;
    };

    initEditor();

    return () => {
      if (editorRef.current) {
        try {
          editorRef.current.destroy();
          editorRef.current = null;
        } catch (e) {
          console.error('Failed to destroy editor:', e);
        }
      }
    };
  }, [isMounted, initialData, onChange]);

  return (
    <div className="prose dark:prose-invert max-w-none">
      <div id="editor" className="min-h-[200px]" />
    </div>
  );
}