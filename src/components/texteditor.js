// import tinymce from "tinymce/tinymce";
import React from "react";

import { Editor } from "@tinymce/tinymce-react";

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(content, editor) {
    this.setState({content});
  }

  handleSubmit(event) {
    alert("Text was submitted: " + this.state.content);
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <h2>Introduction to Software Engineering</h2>
        <h3>Provide a course overview</h3>
        <Editor
          value={this.state.content}
          init={{
            
            height: 500,
            menubar: false
          }}
          onEditorChange={this.handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TextEditor;