import React, { useEffect } from 'react';
import '../App.css';
import { useObserver } from 'mobx-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RouteArr, { RootChildren } from '../routes';

function Main() {
  const navArr = RouteArr.map((row, idx) => {
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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/pbj/resource/assets/js/util.js";
    script.async = true;
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src = "/pbj/resource/assets/js/main.js";
    script2.async = true;
    document.body.appendChild(script2);
    alert('!!');
  }, []);
  
  return useObserver(() => (
    <>
      <div id="page-wrapper">
        <div id="header">
          <nav id="nav">
            <ul>
                {
                  navArr.map((row) => {
                    return(
                      <li key={row.key}>
                        <a href="#">{row.label}</a>
                        <ul>
                        {
                          row.children.map((row2) => {
                            return (
                              <li key={row2.key}>
                                <Link to={row2.path}>{`${row2.label}`}</Link >
                              </li>
                            )
                          })
                        }
                        </ul>
                      </li>
                    )
                  })
                }
            </ul>
          </nav>
          <div className="inner">
            <header>
              <h1><a href="index.html" id="logo">PBJ SOFTWARE</a></h1>
              <hr />
              <p>CREATIVE WEB/APP</p>
            </header>
            <footer>
              <a href="#banner" className="button circled scrolly">Start</a>
            </footer>
          </div>
        </div>
        <Routes>
          {
            routeList.map(item => {
              return (<Route path={item.path} element={item.element} key={item.path}/>);
            })
          }
        </Routes>
      </div>
    </>
  ));
}

export default Main;