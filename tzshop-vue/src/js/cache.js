import storage from 'good-storage';

const LOGIN_KEY = '__login__';

export function remove(key) {
  storage.remove(key);
}

export function save(key, data) {
  storage.set(key, data);
}

export function get(key) {
  storage.get(key);
}

export function clear(key) {
  storage.clear();
}

export function has(key) {
  storage.has(key);
}
