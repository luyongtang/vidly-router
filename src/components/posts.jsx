import React from "react";

const Posts = ({ match }) => {
  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year}, Month: {match.params.year}
    </div>
  );
};

export default Posts;
