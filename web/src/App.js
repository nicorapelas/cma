import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PlaceholderPage from './pages/PlaceholderPage';

const pages = [
  { path: '/toddlers', title: 'Toddlers', description: 'Programme information for children aged 18 months to 3 years. Content coming soon.' },
  { path: '/preschool', title: 'Preschool – Grade R', description: 'Programme information for children aged 3 to 6 years. Content coming soon.' },
  { path: '/curriculum', title: 'Curriculum', description: 'Explore our full Montessori curriculum in detail. Content coming soon.' },
  { path: '/extra-murals', title: 'Extra Murals', description: 'Discover our extra-mural activities and how they enrich your child\'s development. Content coming soon.' },
  { path: '/gallery', title: 'Gallery', description: 'Photos from life at Carletonville Montessori Academy. Content coming soon.' },
  { path: '/team', title: 'Our Team', description: 'Meet the dedicated educators at CMA. Content coming soon.' },
  { path: '/policies', title: 'Policies', description: 'School policies and important documents. Content coming soon.' },
  { path: '/about-montessori', title: 'About Montessori', description: 'Learn about the Montessori philosophy and approach. Content coming soon.' },
  { path: '/montessori-vs-mainstream', title: 'Montessori vs Mainstream', description: 'Understand how Montessori education differs from traditional schooling. Content coming soon.' },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          {pages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={
                <PlaceholderPage title={page.title} description={page.description} />
              }
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
