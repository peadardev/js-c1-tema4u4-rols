import type { NavigationGuard } from 'vue-router';
import { type UserState } from '@/models/userstate.interface.ts';

function getCurrentUser(): UserState {
  return { isAuthenticated: true, role: 'Admin' };
}

export const authGuard: NavigationGuard = (to) => {
  const user: UserState = getCurrentUser();
  if (user.isAuthenticated) return true;
  const msg = `ACCES DENEGAT. Usuari amb rol '${user.role}' no s'ha autenticat`;
  console.log(msg);
  return {
    name: 'guest',
    query: { redirect: to.fullPath },
  };
};

export function roleGuard(...roles: string[]): NavigationGuard {
  return (to) => {
    const user: UserState = getCurrentUser();
    if (roles.includes(user.role)) {
      const msg = `Accés autoritzat a usuari amb rol '${user.role}'`;
      console.log(msg);
      return true;
    }
    const msg = `ACCES DENEGAT. Usuari amb rol '${user.role}' ha intentat accedir a zona restringida`;
    console.log(msg);
    return {
      name: 'guest',
      query: { redirect: to.fullPath },
    };
  };
}
