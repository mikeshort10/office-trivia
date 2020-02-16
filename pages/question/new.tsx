import React, { useState } from "react";
import Layout from "../../src/components/Layout";
import { QuestionForm } from "../../src/components/QuestionForm";
import { NextPage } from "next";

const AddQuestion: NextPage = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [options, setOptions] = useState(["", "", ""]);

  const formProps = {
    question,
    answer,
    setQuestion,
    setAnswer,
    options,
    setOptions
  };

  return (
    <Layout>
      <QuestionForm {...formProps} />
    </Layout>
  );
};

export default AddQuestion;
