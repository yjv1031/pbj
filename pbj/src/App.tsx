import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useObserver } from 'mobx-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RouteArr, { RootChildren } from './routes';

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = RouteArr.map((row, idx) => {
  return {
    key: `first${idx}`,
    label: `${row.label}`,
    children: row.children.map((row2, j) => {
      return {
        key: `${idx}second${j}`,
        label: `${row2.label}`,
        path: `${row2.path}`,
      };
    }),
  };
});

const routeList: Array<RootChildren> = (new Array<RootChildren>).concat(...(RouteArr.map(item => item.children)));

const App = () => useObserver(() => (
  <BrowserRouter>
    {
      items2.map((row) => {
        return(
          <>
            {
              row.children.map((row2) => {
                return (
                  <>
                      <Link to={row2.path}>{`${row2.label}`}</Link >
                  </>
                )
              })
            } 
          </>
        )
      })
    }
    <Routes>
      {
        routeList.map(item => {
          return (<Route path={item.path} element={item.element} key={item.path}/>);
        })
      }
    </Routes>
  </BrowserRouter>
));

export default App;
