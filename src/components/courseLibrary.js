import React, { Component } from "react";
import { connect } from "react-redux";

class CourseLibrary extends Component {
    constructor(props) {
        super(props)

        this.renderCourse = this.renderCourse.bind(this);
    }

    renderCourse(course) {
        return(
        <li key={course.title} className="course">
            <div className="course__info">
                <div className="course__title-container">
                    <div className="course__title">{course.title}</div>
                </div>
            </div>
            <div className="course__description">
                <h6 className="course__description-title">Course Description</h6>
                <p>{course.description}</p>
            </div>
        </li>
        )
    }

    render() {
        return (
            <ul>
                {this.props.courses.map(this.renderCourse)}
                {/* {this.renderCourse({"title": "Up and Running with Redis", "description": "In this course you'll learn how to work with the efficient Redis database to manage key value relationships."})}
                {this.renderCourse({"title": "UX for Developers", "description": "This User Experience(UX) course examines how to develop a system for approaching application development and enhancing the experience for users."})} */}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    console.log(`state courses are: ${JSON.stringify(state.courses)}`)
    return { courses: state.courses}
}

export default connect(mapStateToProps)(CourseLibrary);