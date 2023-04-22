import "./app-info.css";

const AppInfo = ({totalEmp, empToAward}) => {


    return (
        <div className="app-info">
            <h1>Accounting of employees in the company "Sparta"</h1>
            <h2>Total number of employees: {totalEmp ? totalEmp : ""} </h2>
            <h2>Will receive the award: {empToAward ? empToAward : ""} </h2>
        </div>
    )
}

export default AppInfo;
