import React, { Component } from 'react';

export default class Buttons extends Component {
  render() {
    return (
      <div>
      <div><h1>CPR App</h1></div>
      <form>
        <input type="submit" value="Start Chest Compressions"/>
      </form>
      <div className="chestTimerDisplay">
      <span>(elapsed time output here)</span>
      </div>
      </div>
    )
  }
}
