import "./employees-add-form.css";
import {Component, useState} from "react";

const EmployeesAddForm = ({addEmployee}) => {


    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");

    const onFillInput = (e) => {
        const {name, value} = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'salary') {
            setSalary(value)
        }
    }

    const onAddEmployee = (event) => {
        event.preventDefault();
        if (name.length < 3 || !salary) {
            return;
        }
        addEmployee(name, salary);
        setName("");
        setSalary("");
    }


    return (
        <div className="app-add-form">
            <h3>Add new employee</h3>
            <form
                onSubmit={onAddEmployee}
                className="add-form d-flex">
                <input type="text"
                       className="form-control new-post-label"
                       name="name"
                       onChange={(event) => onFillInput(event)}
                       value={name}
                       placeholder="Name employee?"/>
                <input type="number"
                       className="form-control new-post-label"
                       name="salary"
                       onChange={(event) => onFillInput(event)}
                       value={salary}
                       placeholder="Salary in $?"/>
                <button type="submit"
                        className="btn btn-outline-light">Add
                </button>
            </form>
        </div>
    );
}

export default EmployeesAddForm;
