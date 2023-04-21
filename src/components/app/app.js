import AppInfo from "../app-info/app-info";
import "./app.css";
import {v4 as uuidv4} from 'uuid';
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import {Component} from "react";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Fedor Pilikov', salary: 1000, increase: true, promotion: false, id: 1},
                {name: 'Semen Grud', salary: 800, increase: false, promotion: true, id: 2},
                {name: 'Ivan Strent', salary: 700, increase: false, promotion: false, id: 3},
            ]
        }
    }

    deletePerson = (id) => {
        this.setState(({data}) => ({
            data: data.filter(person => person.id !== id)
        }))
    }

    newEmployee = (name, salary) => {
        const {data} = this.state;
        const id = uuidv4();
        const newEmpObj = {name, salary, increase: false, promotion: false, id};
        const newData = [...data, newEmpObj];
        this.setState({
            data: newData
        })
    }

    onToggleIncrease = (id) => {

        this.setState(({data}) => ({
            data: data.map(emp => {
                if (emp.id === id) {
                    return {
                        ...emp,
                        increase: !emp.increase
                    }
                }
                return emp;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(prevState => {
            const newData = prevState.data.map(emp => {
                if (emp.id === id) {
                    return {
                        ...emp,
                        promotion: !emp.promotion
                    }
                }
                return emp;
            });
            return {data: newData};
        })
    }

    render() {

        const {data} = this.state;

        return (
            <div className="app">
                <AppInfo data={data}/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList data={data}
                               onDelete={this.deletePerson}
                               onToggleIncrease={this.onToggleIncrease}
                               onToggleRise={this.onToggleRise}
                />
                <EmployeesAddForm addEmployee={(name, salary) => {
                    this.newEmployee(name, salary);
                }}/>
            </div>
        )
    }

}

export default App;

