import AppInfo from "../app-info/app-info";
import "./app.css";
import {v4 as uuidv4} from 'uuid';
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import {Component} from "react";

//TODO Rewrite on hook
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Fedor Pilikov', salary: 1000, increase: true, promotion: false, id: 1},
                {name: 'Semen Grud', salary: 800, increase: false, promotion: true, id: 2},
                {name: 'Ivan Strent', salary: 700, increase: false, promotion: false, id: 3},
                {name: 'Ihor Antonov', salary: 1700, increase: true, promotion: true, id: 4},
                {name: 'Alexandra Pipetkova', salary: 1200, increase: false, promotion: false, id: 5},
            ],
            searchInput: '',
            filter: ''
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


    onToggleProp = (id, prop) => {
        this.setState(prevState => {
            const newData = prevState.data.map(emp => {
                if (emp.id === id) {
                    return {
                        ...emp,
                        [prop]: !emp[prop]
                    }
                }
                return emp;
            });
            return {data: newData};
        })
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    filterEmp = (items, filter) => {
        switch (filter) {
            case 'promotion':
                return items.filter(item => item.promotion);
            case 'more':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onPutFromSearchInput = (searchInput) => {
        this.setState({searchInput})
    }

    setFilter = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, searchInput, filter} = this.state;
        const totalEmp = data.length;
        const empToAward = data.filter(emp => emp.increase).length;
        const visibleData = this.searchEmp(this.filterEmp(data, filter), searchInput);


        return (
            <div className="app">
                <AppInfo
                    totalEmp={totalEmp}
                    empToAward={empToAward}
                />
                <div className="search-panel">
                    <SearchPanel onPutFromSearchInput={this.onPutFromSearchInput}/>
                    <AppFilter setFilter={this.setFilter}/>
                </div>
                <EmployeesList data={visibleData}
                               onDelete={this.deletePerson}
                               onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm addEmployee={(name, salary) => {
                    this.newEmployee(name, salary);
                }}/>
            </div>
        )
    }

}

export default App;

