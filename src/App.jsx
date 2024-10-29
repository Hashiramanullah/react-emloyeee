import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { useTheme } from './context/ThemeContext';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
    const { theme, toggelTheme } = useTheme();
    const [user, setUser] = useState(null);
    const [loggedInUserData, setLoggedInUserData] = useState(null);
    const authData = useContext(AuthContext);
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            const userData = JSON.parse(loggedInUser);
            setUser(userData.role);
            setLoggedInUserData(userData.data);
            console.log(userData.data);
        }
    }, []);

    useEffect(() => {
        const getDataFromLocalS = () => {
            const employeeData = localStorage.getItem('employee');
            if (employeeData) {
                const genEmployeeData = JSON.parse(employeeData);
                setEmployee(genEmployeeData);
                console.log(genEmployeeData);
            }
        };
        getDataFromLocalS();
    }, []);

    const handleLogin = (email, password) => {
        if (email === 'admin@gmail.com' && password === '123') {
            localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
            setUser('admin');
        } else if (authData) {
            const employee = authData.EmployeeData.find((e) => email === e.email && password === e.password);
            if (employee) {
                localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
                setLoggedInUserData(employee);
                setUser('employee');
            }
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className={`${theme === 'light' ? 'bg-slate-200 text-black' : 'body'} h-screen w-full`}>
            {!user ? <Login handleLogin={handleLogin} /> : ''}
            {user === 'admin' ? (
                <AdminDashboard changeUser={setUser} />
            ) : (
                <EmployeeDashboard changeUser={setUser} user={user} employeeData={loggedInUserData} emply={employee} />
            )}
        </div>
    );
};

export default App;