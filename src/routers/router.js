import React, { Component, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

// views
import AuthView from '../views/AuthView.jsx';
import MainView from '../views/MainView.jsx';
import DashboardView from '../views/DashboardView.jsx';
import NotFound from '../views/NotFound.jsx';

class RouterApp extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route path="/" element={<MainView />} />
                    <Route path="/login" element={<AuthView />} />
                    <Route path="/register" element={<AuthView />} />
                    <Route path="/dashboard" element={<DashboardView />} />
                    {/* other route */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Fragment>
        );
    }
}

export default RouterApp;