import { useDispatch, useSelector } from "react-redux";
import { RootState, type AppDispatch } from './redux/store';
import { add, addAsync, selectUsers, selectUsersCount, type User } from "./redux/users/usersSlice";
import { useId } from "react";

export default function UsersList() {
  const users = useSelector(selectUsers);
  const usersCount = useSelector(selectUsersCount);
  const dispatch = useDispatch<AppDispatch>();

  function addUser(formData: FormData) {
    const newUser: User = {
      name: formData.get('name') as string,
      id: Math.floor(Math.random() * 1000),
    }

    dispatch(addAsync(newUser))
  }

  const nameId = useId();
  const checkboxId = useId();

  return (
    <>
      <h4>So, users list is next up</h4>
      <h6>We have {usersCount} users</h6>
      <form action={addUser}>
        <label htmlFor={nameId}>Name</label>
        <input id={nameId} placeholder="name" type="text" name="name" />

        <label htmlFor={checkboxId}>Agree, pls</label>
        <input id={checkboxId} type="checkbox" placeholder="name" name="agree" />

        <button type="submit">Add New User</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}