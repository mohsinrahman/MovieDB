import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";

import { Box, Button, Stack } from "@mui/material";

const MenuBar = ({ editor }) => {
  if (!editor) return null;

  return (
    <Stack direction="row" spacing={1} mb={2}>
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        variant={editor.isActive("bold") ? "contained" : "outlined"}
      >
        B
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        variant={editor.isActive("italic") ? "contained" : "outlined"}
      >
        I
      </Button>
      <Button
        onClick={() => {
          const url = prompt("Enter URL");
          if (url) editor.chain().focus().setLink({ href: url }).run();
        }}
      >
        🔗
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        variant={editor.isActive("bulletList") ? "contained" : "outlined"}
      >
        ••
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        variant={editor.isActive("orderedList") ? "contained" : "outlined"}
      >
        1.
      </Button>
    </Stack>
  );
};

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: "<p>Hello World!</p>",
  });

  return (
    <Box sx={{ border: "1px solid #ccc", borderRadius: 2, p: 2 }}>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </Box>
  );
}
