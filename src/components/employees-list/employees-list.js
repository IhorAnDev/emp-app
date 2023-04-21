import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({data, onDelete}) => {

    return (
        <ul className="app-list list-group">
            {data.map((el, index) => {
                const {id, ...elProps} = el;
                return (
                    <EmployeesListItem key={id}
                                       id={index + 1}
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
