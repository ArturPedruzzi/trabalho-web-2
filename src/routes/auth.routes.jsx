import { Routes, Route } from 'react-router-dom';

import { SignUp } from '../pages/SignUp';
import { Home } from '../pages/Home';
import { Vacancies } from '../pages/Vacancies';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/vacancies" element={<Vacancies />} />
    </Routes>
  );
}