export function loadState<T>(id: string): T | undefined {
  try {
    const serializedState = localStorage.getItem(id);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("error writing local state: ", err);
    return undefined;
  }
}

export const saveState = (id: string, state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(id, serializedState);
  } catch (err) {
    // ignore write errors
    console.error("error writing local state: ", err);
  }
}

export const deleteState = (id: string) => {
  try {
    localStorage.removeItem(id)
  } catch (err) {
    // ignore write errors
    console.error("error deleting local state: ", err);
  }
}