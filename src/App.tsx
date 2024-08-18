import ROUTES from "./constants/routes";
import { Welcome, SelectNetwork } from "./Modules/Onboarding";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SecretRecoveryPhase from "./Modules/Onboarding/SecretRecoveryPhase";

export default function Home() {
  return (
      <Router>
      <Routes>
        <Route path={ROUTES.welcome} element={<Welcome />} />
        <Route path={ROUTES.selectNetwork} element={<SelectNetwork />} />
        <Route path={ROUTES.secretRecoveryPhase} element={<SecretRecoveryPhase />} />
      </Routes>
    </Router>

  );
}
