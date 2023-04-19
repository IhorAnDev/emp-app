import "./employees-list-item.css";
import {Component} from "react";

class EmployeesListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            promotion: false
        }
    }

    giveBenefit = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    goingUp = () => {
        this.setState(({promotion}) => ({
            promotion: !promotion
        }))
    }

    render() {
        const {id, name, salary, onDelete} = this.props;
        const {increase, promotion} = this.state;

        let className = "list-group-item d-flex justify-content-between";

        if (increase) {
            className += " increase";
        }

        if (promotion) {
            className += " like";
        }

        return (
            <li className={className}>
                <span onClick={this.goingUp} className="list-group-item-label"> {id + ". "} {name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={this.giveBenefit} type="button"
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
}


export default EmployeesListItem;
