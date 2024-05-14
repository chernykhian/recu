class GenericStore<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItem(index: number): T | undefined {
    return this.items[index];
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  getItems(): T[] {
    return this.items;
  }
}

// Usage
const numberStore = new GenericStore<number>();
numberStore.addItem(5);
numberStore.addItem(10);
const num = numberStore.getItem(0); // 5

const stringStore = new GenericStore<string>();
stringStore.addItem('Hello');
stringStore.addItem('World');
const str = stringStore.getItem(1); // 'World'
