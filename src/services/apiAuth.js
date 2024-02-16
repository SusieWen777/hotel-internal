import supabase from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  // The first step is to check if there is an active session, and this will actually get data from the local storage.
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  // If there is an active session, get the user from the supabase. We don't get the user from the session, because redownload from supabase is a more secure way to do that.
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
