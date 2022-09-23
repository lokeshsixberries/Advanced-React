import React, { Component } from "react";

export default class TableMapper extends Component {
  render() {
    const { vals } = this.props;
    console.log(vals);
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <table border="1">
            {(vals.data || []).map((item) => {
              return (
                <>
                  <tr>
                    <td style={{ padding: "10px" }}>{item[`ID Nation`]}</td>
                    <td style={{ padding: "10px" }}>{item[`ID Year`]}</td>
                    <td style={{ padding: "10px" }}>{item[`Nation`]}</td>
                    <td style={{ padding: "10px" }}>{item[`Population`]}</td>
                    <td style={{ padding: "10px" }}>{item[`Slug Nation`]}</td>
                    <td style={{ padding: "10px" }}>{item[`Year`]}</td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      </>
    );
  }
}
