
class Person {
  constructor(name, contributions) {
    this.name = name;
    this.owed = 0;
    this.owing = 0;
    this.contribution = contributions.filter(x => !!x).map(x => typeof x === 'string' ? parseFloat(x) : x).reduce((p, c) => p + c, 0);
  }

  split(amount) {
    this.owed = Math.max(0, this.contribution - amount);
    this.owing = Math.max(0, amount - this.contribution);
    return amount === this.contribution;
  }

  give(amount) {
    amount = Math.min(amount, this.owed);
    this.owed -= amount;
    return amount;
  }

  clearDebt(amount) {
    amount = Math.min(amount, this.owing);
    this.owing -= amount;
    return amount;
  }

  reconcile(person) {
    if (this.owing <= 0 || person.owed <= 0) { return; }
    const amount = Math.min(this.owing, person.owed);
    const given = person.give(amount);
    this.clearDebt(given);
    return `${this.name} gives ${person.name} ${given}`;
  }
}

function personSort(a, b) {
  return a.contribution - b.contribution;
}

function settle(data) {
  const transactions = [];
  const people = data.filter(x => !!x.name).map(d => new Person(d.name, d.costs)).sort(personSort);
  const total = people.reduce((p, c) => p + c.contribution, 0);
  const amount = total / people.length;
  const [owers, owed] = people.reduce((p, c) => c.split(amount) ? p : (c.owing > 0 ? [[...p[0], c], p[1]] : [p[0], [...p[1], c]]), [[], []]);
  for (const ower of owers) {
    for (const p of owed) {
      const rec = ower.reconcile(p);
      if (rec) {
        transactions.push(rec);
      }
    }
  }
  return transactions;
}