'use client'
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import supabase from "@/lib/supabaseClient";
import { clearUser, setUser } from "@/lib/redux/slice/auth.action";

const AuthProvider = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getSessionUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) dispatch(setUser(user));
    };

    // Initial fetch
    getSessionUser();

    // Listener
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        dispatch(setUser(session.user));
      } else {
        dispatch(clearUser());
      }
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, [dispatch]);

  return null;
};

export default AuthProvider;
