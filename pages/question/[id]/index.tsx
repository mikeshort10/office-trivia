import React from "react";
import { NextPage } from "next";

const QuestionView: NextPage<{ id: string }> = ({ id }) => {
  return (
    <div>
      <h2></h2>
    </div>
  );
};

QuestionView.getInitialProps = async ({ query: { id } }) => {
  id = Array.isArray(id) ? id[0] : id;
  return { id };
};

export default QuestionView;
