import AppInfo from "../app-info/app-info";
import "./app.css";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesListItem from "../employees-list-item/employees-list-item";

function App() {

    const data = [
        {name: 'Fedor Pilikov', salary: 1000, increase: true, id: 1},
        {name: 'Semen Grud', salary: 800, increase: false, id: 2},
        {name: 'Ivan Strent', salary: 700, increase: true, id: 3},
    ]


    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App;
