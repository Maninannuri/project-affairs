import { lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy load the HomePage component
const HomePage = lazy(() => import('./pages/Home'));

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          <HomePage />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;