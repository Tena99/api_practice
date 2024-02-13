import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useOutletContext } from "react-router-dom";

export default function renderUsers() {
  const { users, onLoadUsers } = useOutletContext();

  return (
    <div>
      <button onClick={onLoadUsers} className={styles.fetch_btn}>
        Fetch Users
      </button>
      <table className={styles.users_table}>
        <thead>
          <tr className={styles.users_header}>
            <th className={styles.users_header_item}>Full name</th>
            <th className={styles.users_header_item}>Country</th>
            <th className={styles.users_header_item}>Phone Number</th>
          </tr>
        </thead>

        <tbody>
          {users ? (
            users.map((user, index) => {
              return (
                <tr key={index} className={styles.users_body}>
                  <td className={styles.users_body_item}>
                    <Link to={user.login.uuid}>
                      {user.name.first} {user.name.last}
                    </Link>
                  </td>
                  <td className={styles.users_body_item}> {user.nat}</td>
                  <td className={styles.users_body_item}> {user.phone}</td>
                </tr>
              );
            })
          ) : (
            <tr className={styles.users_body}>
              <td className={styles.users_body_item}>Unknown</td>
              <td className={styles.users_body_item}>Unknown</td>
              <td className={styles.users_body_item}>Unknown</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
