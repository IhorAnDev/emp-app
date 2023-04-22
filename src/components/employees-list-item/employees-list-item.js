import "./employees-list-item.css";

const EmployeesListItem = ({id, name, salary, onDelete, onToggleProp, increase, promotion}) => {


    let className = "list-group-item d-flex justify-content-between";

    if (increase) {
        className += " increase";
    }

    if (promotion) {
        className += " like";
    }


    return (
        <li className={className}>
            <span onClick={() => onToggleProp('promotion')} data-toggle="promotion"
                  className="list-group-item-label"> {id + ". "} {name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button
                    onClick={() => onToggleProp('increase')} data-toggle="increase" type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button onClick={onDelete} type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}


export default EmployeesListItem;
