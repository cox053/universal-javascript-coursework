import React from 'react';

const contentStyle = {
  font: '14px/1 Helvetica, Verdana, sans-serif',
  color: 'rgb(0, 0, 0, 0.54)',
  lineHeight: '22px',
  padding: '2%',
};

const UserContent = ({ user }) => (
  <div style={contentStyle}>
    <b>Name:</b> {user.name}<br />
    <b>Username:</b> {user.username}<br />
    <b>Email:</b> {user.email}<br />
    <b>Phone:</b> {user.phone}<br />
    <b>Website:</b> {user.website}<br />
  </div>
);

export default UserContent;
