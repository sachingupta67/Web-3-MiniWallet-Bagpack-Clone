import { Welcome, SelectNetwork } from "./Modules/Onboarding";

export default function Home() {
  return (
    <div className="bg-dark">
      <Welcome />
      <SelectNetwork/>
    </div>
  );
}
