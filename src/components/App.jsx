import { Component } from 'react';
import { Button } from './Button/Button';
import { data } from '../data/users';
import { UsersList } from './UsersList/UsersList';
import { AddUserForm } from './AddUserForm/AddUserForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    isListShow: false,
    isFormShow: false,
    users: data,
  };

  clickHandler = () => {
    this.setState({ isListShow: true });
  };

  addUser = (userData) => {
    const newUser = { ...userData, id: nanoid() };
    this.setState(prevState => ({ users: [newUser,...prevState.users] }));
  }
  deleteUser = id => {
    this.setState(prevState => ({
      users: prevState.users.filter(el => el.id !== id),
    }));
  };

  openForm = () => {
    this.setState({ isFormShow: true });
  };

  closeForm = () => {
    this.setState({ isFormShow: false });
  }

  render() {
    const { isListShow, users, isFormShow } = this.state;
    return (
      <>
        <Button text="Show users list" clickHandler={this.clickHandler} />
        {isListShow && (
          <>
            <UsersList users={users} deleteUser={this.deleteUser} />
            {isFormShow ? (
              <AddUserForm addUser={this.addUser} closeForm={this.closeForm} />
            ) : (
              <Button text="Add user" clickHandler={this.openForm} />
            )}
          </>
        )}
      </>
    );
  }
}
