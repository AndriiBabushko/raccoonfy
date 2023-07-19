import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

import LoginButton from "@/components/buttons/LoginButton";
import RegisterButton from "../components/buttons/RegisterButton";
import ProfileButton from "../components/buttons/ProfileButton";
import LogoutButton from "../components/buttons/LogoutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <h1>Dummy Home Page</h1>
      <pre>{JSON.stringify(session)}</pre>
      <LoginButton />
      <RegisterButton />
      <ProfileButton />
      <LogoutButton />
    </>
  );
}
