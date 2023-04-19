import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({data, onDelete}) => {

    return (
        <ul className="app-list list-group">
            {data.map((el) => {
                const {id, ...elProps} = el;
                return (
                    <EmployeesListItem key={id}
                                       id={id}
                                       {...elProps}
                                       onDelete={() => {
                                           onDelete(id);
                                       }
                                       }/>
                );
            })}
        </ul>
    );
}

export default EmployeesList;
