// RichTextEditor.jsx
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's default styles
import { FaBold, FaItalic, FaUnderline, FaListOl, FaListUl, FaAlignLeft, FaAlignCenter, FaAlignRight, FaLink, FaImage } from "react-icons/fa"; // Use professional icons
import "./App.css"; // Custom styles for a beautiful UI

const RichTextEditor = ({ value, onChange, placeholder = "Start typing here...", onExport }) => {
  return (
    <div className="editor-container">
      <h2 className="editor-title">Creative Text Editor</h2>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        modules={{
          toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'align': [] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['link', 'image'],
            ['blockquote', 'code-block'],
            ['undo', 'redo'],
            ['clean'] // For clearing formatting
          ]
        }}
        formats={[
          'header', 'font', 'list', 'align', 'bold', 'italic', 'underline', 'strike', 'link', 'image', 'blockquote', 'code-block'
        ]}
        className="custom-editor"
      />
      {onExport && (
        <button className="export-button" onClick={onExport}>
          Export to HTML
        </button>
      )}
    </div>
  );
};




const PostEditor = () => {
    const [content, setContent] = useState("");
  
    const handleContentChange = (value) => {
      setContent(value);
    };
  
    const handleExportHTML = () => {
      alert("Exported HTML: " + content);
    };
  
    return (
      <div>
        <h1>Create a Post : {content}</h1>
        <RichTextEditor
          value={content}
          onChange={handleContentChange}
          placeholder="Write your post here..."
          onExport={handleExportHTML}
        />
      </div>
    );
  };
  
  export default PostEditor;

