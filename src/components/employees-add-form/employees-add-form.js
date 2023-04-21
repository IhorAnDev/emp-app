import "./employees-add-form.css";
import {Component} from "react";

class EmployeesAddForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onFillInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onAddEmployee = (event, {addEmployee} = this.props) => {
        event.preventDefault();
        const {name, salary} = this.state;
        addEmployee(name, salary);
        this.setState({ name: "", salary: "" });
    }


    render() {

        const {name, salary} = this.state;


        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    onSubmit={this.onAddEmployee}
                    className="add-form d-flex">
                    <input type="text"
                           className="form-control new-post-label"
                           name="name"
                           onChange={(event) => this.onFillInput(event)}
                           value={name}
                           placeholder="Name employee?"/>
                    <input type="number"
                           className="form-control new-post-label"
                           name="salary"
                           onChange={(event) => this.onFillInput(event)}
                           value={salary}
                           placeholder="Salary in $?"/>
                    <button type="submit"
                            className="btn btn-outline-light">Add
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;
