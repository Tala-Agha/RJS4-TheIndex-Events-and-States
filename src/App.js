import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null
  };

  selectAuthor = author => this.setState({ currentAuthor: author });
  deselectAuthor = () => this.setState({ currentAuthor: null });

  getContentView = () => {
    if (this.state.currentAuthor) {
      return <AuthorDetail author={this.state.currentAuthor} />;
    } else {
      return (
        <AuthorList
          authors={authors}
          selectAuthor={this.selectAuthor}
          filterAuthors={this.filterAuthors}
        />
      );
    }
  };
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar deselectAuthor={this.deselectAuthor} />
          </div>
          <div className="content col-10">{this.getContentView()}</div>
        </div>
      </div>
    );
  }
}

export default App;
