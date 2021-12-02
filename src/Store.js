export default class Store {
  static getData() {
    if (!window.localStorage.getItem('todoData')) return null;
    return JSON.parse(window.localStorage.getItem('todoData'));
  }

  static setData(data) {
    window.localStorage.setItem('todoData', JSON.stringify(data));
  }
}