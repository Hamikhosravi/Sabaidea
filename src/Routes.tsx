import React, { lazy, Suspense} from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingSpin from "./components/loading/LoadingSpin";

const FilteredItems = lazy(() => import('./components/filterItems/container/FilterItems'));

export default function RoutesPath() {
    return (
        <Routes>
            <Route path="/" element={<Suspense fallback={<LoadingSpin />}><div /></Suspense>}  exact />
            <Route path="/filtered-items" element={<Suspense fallback={<LoadingSpin />}><FilteredItems /></Suspense>}  />
        </Routes>
    );
}
