import ROUTES from "./constants/routes";
import { Welcome, SelectNetwork } from "./Modules/Onboarding";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SecretRecoveryPhase from "./Modules/Onboarding/SecretRecoveryPhase";
import CSRP from "./Modules/Onboarding/CreateSRP";

export default function Home() {
  return (
      <Router>
      <Routes>
        <Route path={ROUTES.welcome} element={<Welcome />} />
        <Route path={ROUTES.selectNetwork} element={<SelectNetwork />} />
        <Route path={ROUTES.secretRecoveryPhase} element={<SecretRecoveryPhase />} />
        <Route path={ROUTES.createSRP} element={<CSRP />} />
      </Routes>
    </Router>

  );
}
