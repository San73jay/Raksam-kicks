import { useState } from "react";

// Demo login: the user is only saved in this browser ("sk-user").
export default function useAuth(flash) {
  const [user, setUser] = useState(() => { try { return JSON.parse(localStorage.getItem("sk-user")); } catch (e) { return null; } });
  const login = (u) => {
    setUser(u);
    try { localStorage.setItem("sk-user", JSON.stringify(u)); } catch (e) {}
    flash("Welcome, " + u.name.split(" ")[0] + "!");
  };
  const logout = () => {
    setUser(null);
    try { localStorage.removeItem("sk-user"); } catch (e) {}
    flash("You have been logged out");
  };
  return { user, login, logout };
}
