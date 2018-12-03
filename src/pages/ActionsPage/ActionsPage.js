import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button/Button";

class ActionsPage extends Component {
  render() {
    return (
      <div>
        actions
        <Button variant="contained">
          <Link to={'/'}>
            Link
          </Link>
        </Button>
      </div>
    );
  }
}

export default ActionsPage;
