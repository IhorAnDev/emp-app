import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({data}) => {

    return (
        <ul className="app-list list-group">
            {data.map((el, i) => {
                return (
                    <EmployeesListItem key={i + 1} number={i + 1} {...el}/>
                );
            })}
        </ul>
    );
}

export default EmployeesList;
