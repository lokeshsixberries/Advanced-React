import React, { Component } from "react";

export default class ApiDataHandle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  render() {
    this.ApiCall = async () => {
      const data = await fetch("https://api.publicapis.org/entries");

      const json = await data.json();
      this.setState({
        data: json.entries,
      });
    };

    const { data } = this.state;

    return (
      <>
        <button onClick={() => this.ApiCall()}>Submit</button>
        <table border="1">
          <tr>
            <th>API</th>
            <th>Auth</th>
            <th>Category</th>
            <th>Cors</th>
            <th>Description</th>
            <th>HTTPS</th>
            <th>Link</th>
          </tr>
          {(data || []).map((item) => {
            return (
              <>
                <tr>
                  <td>{item.API}</td>
                  <td>{item.Autd}</td>
                  <td>{item.Category}</td>
                  <td>{item.Cors}</td>
                  <td>{item.Description}</td>
                  <td>{item.HTTPS}</td>
                  <td>
                    <a href={item.Link}>{item.Link}</a>
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </>
    );
  }
}
