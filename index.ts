import Worker from "worker-loader!./my.worker.ts";

console.log("Spawning new worker", Worker);
const worker = new Worker();

worker.onmessage = (e: any) => {
  console.log("Received in component", e.data);
};
