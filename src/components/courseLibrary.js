import React, { Component } from "react";
import { connect, dispatch } from "react-redux";
import { fetchCourses, addCourse, removeCourse, toggleDescription } from "../actions";
import AnimateHeight from "react-animate-height";

class CourseLibrary extends Component {
    constructor(props) {
        super(props)

        this.renderCourse = this.renderCourse.bind(this);
    }

    componentDidMount() {
        this.props.fetchCourses()
    }

    renderCourse(course) {
        return(
        <li key={course.title} className={`course ${course.open ? 'course__selected' : ''}`}>
            <div className="course__info">
                <div className="course__title-container">
                    <div className="course__title">{course.title}</div>
                </div>
                <a className={`course__arrow ${course.open ? null : 'course__arrow-closed'}`} onClick={() => this.props.toggleDescription(course)} ></a>
                <a className={`action slot__remove ${course.enrolled ? 'hide-content' : 'show-content'}`} onClick={() => this.props.addCourse(course)} >Add</a>
                <a className={`action ${course.enrolled ? 'show-content' : 'hide-content'}`} onClick={() => this.props.removeCourse(course)} >Remove Course</a>
            </div>
            <AnimateHeight
                duration={ 333 }
                height={ course.open ? 'auto' : 0 }
            >
                <div className={`course__description`}>
                    <h6 className="course__description-title">Course Description</h6>
                    <p>{course.description}</p>
                </div>
            </AnimateHeight>
        </li>
        )
    }

    render() {
        return (
            <ul>
                {this.props.courses.map(this.renderCourse)}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return { courses: state.courses}
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCourses: ()=> {
            dispatch(fetchCourses())
        },
        addCourse: (course) => {
            dispatch(addCourse(course))
        },
        removeCourse: (course) => {
            dispatch(removeCourse(course))
        },
        toggleDescription: (course) => {
            dispatch(toggleDescription(course))
        }


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseLibrary);