import AppInfo from "../app-info/app-info";
import "./app.css";
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
                {name: 'Fedor Pilikov', salary: 1000, increase: true, id: 1},
                {name: 'Semen Grud', salary: 800, increase: false, id: 2},
                {name: 'Ivan Strent', salary: 700, increase: true, id: 3},
            ]
        }
    }

    deletePerson = (id) => {
        this.setState(({data}) => ({
            data: data.filter(person => person.id !== id)
        }))
    }


    render() {

        const {data} = this.state;

        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList data={data}
                               onDelete={this.deletePerson}
                />
                <EmployeesAddForm/>
            </div>
        )
    }

}

export default App;

