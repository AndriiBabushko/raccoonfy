import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";

export default async function Root() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <h1>Dummy Home Page</h1>
      <pre>{JSON.stringify(session)}</pre>
    </>
  );
}
