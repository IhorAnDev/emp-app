import "./app-info.css";

const AppInfo = ({data}) => {

    const totalQuantityEmp = data.length;
    const empToAward = data.filter(emp => emp.promotion).length;

    return (
        <div className="app-info">
            <h1>Accounting of employees in the company "Sparta"</h1>
            <h2>Total number of employees: {totalQuantityEmp} </h2>
            <h2>Will receive the award: {empToAward} </h2>
        </div>
    )
}

export default AppInfo;
