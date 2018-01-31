import React from 'react';
export default function (props) {
  const user = props.user;

  return (
    <span>{`${user.first_name} (${user.email})`}</span>
  )
}
