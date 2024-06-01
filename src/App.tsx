import { QueryClientProvider, QueryClient } from 'react-query';
import Header from './components/header/Header';
import RoutesPath from './Routes';
import './App.css';
import React from 'react';
import FilteredContext from './store/FilterContext';

const queryClient = new QueryClient();

function App() {
    return (
        <main>
            <QueryClientProvider client={queryClient}>
                <FilteredContext>
                    <Header />
                    <RoutesPath />
                </FilteredContext>
            </QueryClientProvider>
        </main>
    );
}

export default App;
