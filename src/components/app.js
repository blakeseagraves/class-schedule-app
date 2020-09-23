import React, { Component } from 'react';
import CourseLibrary from './courseLibrary';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>React Redux</h2>
        <CourseLibrary/>
      </div>
    );
  }
}
