import { QueryClientProvider, QueryClient } from 'react-query';
import Header from './components/header/Header';
import RoutesPath from './Routes';
import './App.css';
import React from 'react';
import FilteredContextComponent from './store/FilterContext';

const queryClient = new QueryClient();

function App() {
    return (
        <main>
            <QueryClientProvider client={queryClient}>
                <FilteredContextComponent>
                    <Header />
                    <RoutesPath />
                </FilteredContextComponent>
            </QueryClientProvider>
        </main>
    );
}

export default App;
