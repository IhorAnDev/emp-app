import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({data}) => {

    return (
        <ul className="app-list list-group">
            {data.map((el) => {
                const {id, ...elProps} = el;
                return (
                    <EmployeesListItem key={id} id={id} {...elProps}/>
                );
            })}
        </ul>
    );
}

export default EmployeesList;
