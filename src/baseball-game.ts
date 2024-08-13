function calPoints(operations: string[]): number {
  const record: number[] = [];

  for (const op of operations) {
    if (op === "C") {
      if (record.length > 0) record.pop();
    } else if (op === "D") {
      if (record.length > 0) record.push(record[record.length - 1] * 2);
    } else if (op === "+") {
      if (record.length > 1)
        record.push(record[record.length - 1] + record[record.length - 2]);
    } else {
      record.push(parseInt(op));
    }
  }

  return record.reduce((sum, score) => sum + score, 0);
}

const ops: string[] = ["5", "2", "C", "D", "+"];
const result = calPoints(ops);
console.log("The total sum is:", result); // 30
