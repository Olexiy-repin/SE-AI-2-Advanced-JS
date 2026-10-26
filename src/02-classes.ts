/*
TODO: Виконуй завдання в декілька етапів.
TODO:
TODO: 1 Завдання.
TODO: Створи клас User, який має:
TODO:   - поля: firstName: string, email: string
TODO:   - метод: getInfo(): string, який повертає рядок "Name: {firstName}, Email: {email}"
TODO:
TODO: 2 Завдання.
TODO: Зроби поле email приватним. Додай:
TODO:   - гетер email();
TODO:   - сетер email(newEmail: string);
*/
class User {
  public firstName: string;
  private _email: string;

  constructor(firstName: string, email: string) {
    // let this = {};
    this.firstName = firstName;
    this._email = email;
    // return this;
  }

  public getInfo(): string {
    return `Name: ${this.firstName}, Email: ${this._email}`;
  }

  get email() {
    return this._email;
  }

  set email(newEmail: string) {
    this._email = newEmail;
  }
}

const user = new User('Wayne', 'wayne@gmail.com');

console.log(user);
console.log(user.getInfo());

console.log(user.email);
user.email = 'wayne2@gmail.com';
console.log(user.email);
