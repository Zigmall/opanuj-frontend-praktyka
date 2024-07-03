import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = '/api/data/users?timeout=8000';

interface User {
  id: number;
  name: string;
}

export function useGetUsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [isDelayed, setIsDelayed] = useState(false);
  let ctrl = null as AbortController | null;

  const fetchUsers = async () => {
    setDelay();
    try {
      if (ctrl) {
        ctrl.abort();
      }
      ctrl = new AbortController();
      const {
        data: { users },
      } = await axios.get(API_URL, {
        signal: ctrl.signal,
      });

      setUsers(users);
      ctrl = null;
    } catch (error) {
      setIsDelayed(true);
    }
  };

  const setDelay = () => {
    setTimeout(() => {
      setIsDelayed(true);
    }, 4000);
  };

  const retryToGetUsers = () => {
    setIsDelayed(false);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, isDelayed, retryToGetUsers };
}
