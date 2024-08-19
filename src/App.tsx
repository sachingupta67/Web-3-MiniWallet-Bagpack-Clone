import ROUTES from "./constants/routes";
import {
  Welcome,
  SelectNetwork,
  SecretRecoveryPhase,
  CreatePassword,
  CSRP,
} from "./Modules/Onboarding";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.welcome} element={<Welcome />} />
        <Route path={ROUTES.selectNetwork} element={<SelectNetwork />} />
        <Route
          path={ROUTES.secretRecoveryPhase}
          element={<SecretRecoveryPhase />}
        />
        <Route path={ROUTES.createSRP} element={<CSRP />} />
        <Route path={ROUTES.createPassword} element={<CreatePassword />} />
      </Routes>
    </Router>
  );
}
