export function timed(timedFn, name = "Action") {
    const start = Date.now();
    try {
        return timedFn();
    }
    finally {
        const end = Date.now();
        console.log(`${name} took ${formatTime(end - start)}`);
    }
}
export async function timedAsync(timedFn, name = "Action") {
    const start = Date.now();
    try {
        return await timedFn();
    }
    finally {
        const end = Date.now();
        console.log(`${name} took ${formatTime(end - start)}`);
    }
}
export function formatTime(ms) {
    return `${ms.toLocaleString("en-US")} ms`;
    // if (ms < 1000) {
    //   return `${ms} ms`;
    // }
    // ms /= 1000;
    // if (ms < 60) {
    //   return `${ms.toFixed(2)} s`;
    // }
    // ms /= 60;
    // if (ms < 60) {
    //   return `${ms.toFixed(2)} m`;
    // }
    // ms /= 60;
    // return `${ms.toFixed(2)} h`;
}
