import "./search-panel.css"
import {Component} from "react";

class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }


    onUpdateInput = (e) => {
        const input = e.target.value;
        this.setState({input})
        this.props.onPutFromSearchInput(input);
    }

    render() {
        return (
            <div>
                <input
                    onChange={this.onUpdateInput}
                    type="text"
                    value={this.state.input}
                    className="form-control search-input"
                    placeholder="Search employee"/>
            </div>
        )
    }
}


export default SearchPanel;
