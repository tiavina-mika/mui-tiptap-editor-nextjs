'use client';

import { TextEditor, TextEditorReadOnly } from 'mui-tiptap-editor';
import { useState } from "react";

const MuiTiptapEditor = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (newValue: string) => setValue(newValue);

  return (
    <div>
      <TextEditor value={value} onChange={handleChange} />
      {value && <TextEditorReadOnly value={value} />}
    </div>
  );
}

export default MuiTiptapEditor;