import React from 'react'
import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';

export default function Editor(props) {

  return (
    <>
    <MDEditor
        value={props.currentNote.body}
        onChange={props.updateNote}
      />
    {/* <MDEditor.Markdown source={props.currentNote.body} style={{ whiteSpace: 'pre-wrap' }} /> */}
    </>
  )
}
