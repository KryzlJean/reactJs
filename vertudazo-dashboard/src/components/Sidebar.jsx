import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const activeClass = 'rounded-md bg-blue-600 text-white p-2';

  const sideBarArray = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Admin', path: '/admin' },
    { name: 'Students', path: '/students' }
  ];

  return (
    <aside className="bg-blue-200 w-64 px-4 py-8">
      <h2 className="text-lg font-semibold mb-4 text-blue-800">Menu</h2>
      <nav>
        <ul>
          {sideBarArray.map((item, index) => (
            <li key={index} className="mb-2">
              <NavLink
                exact={true}
                to={item.path}
                className={`text-blue-500 hover:text-blue-700 ${location.pathname === item.path ? activeClass : ''}`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
