import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spin } from 'antd';

const DocsPage = lazy(() => import('./docs'));
const SettingsPage = lazy(() => import('./settings'));
const ModelsPage = lazy(() => import('./models'));
const SDKPage = lazy(() => import('./sdk'));

const Routing = () => {
  return (
    <Suspense fallback={<Spin>Loading...</Spin>}>
      <Routes>
        <Route path="/" element={<ModelsPage />} />
        <Route path="/sdk" element={<SDKPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
