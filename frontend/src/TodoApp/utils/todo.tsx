/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export async function loadTasks() {
  const tasks = await axios.get('api/load_tasks');
  return tasks.data;
}
