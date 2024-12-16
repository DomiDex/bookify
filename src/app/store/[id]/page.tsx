import React from 'react';

export default function bookDetails({ params }: { params: { id: string } }) {
  console.log(params.id);
  return (
    <div>
      <h1>Book Details</h1>
    </div>
  );
}
