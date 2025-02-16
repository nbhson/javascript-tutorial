interface IPerson {
  name: string;
  displayName(): string;
}

interface ISalary {
  salary: number;
  displaySalary(): number;
}

class Employee5 implements IPerson, ISalary {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  displaySalary(): number {
    return this.salary;
  }

  displayName(): string {
    return this.name;
  }
}
