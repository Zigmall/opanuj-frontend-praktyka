import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const API_URL = '/api/data/users?timeout=8000';

interface User {
  id: number;
  name: string;
}

export function useGetUsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [isDelayed, setIsDelayed] = useState(false);
  const ctrlRef = useRef<AbortController | null>(null);

  const fetchUsers = async () => {
    if (ctrlRef.current) {
      console.log('Abort previous request'); 
      ctrlRef.current.abort();
    }
    setDelay();
    try {
      const ctrl = new AbortController();
      ctrlRef.current = ctrl;
      const {
        data: { users },
      } = await axios.get(API_URL, {
        signal: ctrl.signal,
      });
      if (ctrl.signal.aborted) {
        return;
      }
      setUsers(users);
      ctrlRef.current = null;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
      } else {
        setIsDelayed(true);
      }
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
    return () => {
      if (ctrlRef.current) {
        ctrlRef.current.abort();
      }
    };
  }, []);

  return { users, isDelayed, retryToGetUsers };
}
