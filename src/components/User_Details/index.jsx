import React from "react";
import styles from "./styles.module.css";
import { useParams, useOutletContext } from "react-router-dom";

export default function UserPage() {
  const { users } = useOutletContext();
  const { uuid } = useParams();

  let user = users.find((item) => item.login.uuid === uuid);

  return (
    <article>
      <div className={styles.general_container}>
        <div className={styles.img_container}>
          <img src={user.picture.large} alt="photo"></img>
        </div>

        <div>
          <strong className={styles.username}>
            {user.name.first} {user.name.last}
          </strong>

          <ul>
            <li> Login: {user.login.username}</li>
            <li> UUID: {user.login.uuid}</li>
            <li> Registered Date: {user.registered.date}</li>
          </ul>
        </div>
      </div>

      <div className={styles.contacts_container}>
        <strong>Contacts </strong>
        <ul>
          <li>Email: {user.email}</li>
          <li>Phone: {user.phone}</li>
        </ul>
      </div>

      <div className={styles.location_container}>
        <strong>Location</strong>

        <ul>
          <li>
            {user.location.city}, {user.location.country}
          </li>
          <li>State: {user.location.state}</li>
          <li>
            Timezone: {user.location.timezone.description}{" "}
            {user.location.timezone.offset}
          </li>
        </ul>
      </div>
    </article>
  );
}
