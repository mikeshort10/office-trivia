import React from "react";
import { Input, WrongAnswer } from "./Input";
import { array } from "fp-ts/lib/Array";
import { RH, InputChange } from "../types";

type QuestionFormProps = {
  question: string;
  setQuestion: RH<string>;
  answer: string;
  setAnswer: RH<string>;
  options: string[];
  setOptions: RH<string[]>;
};

export const QuestionForm: React.FC<QuestionFormProps> = ({
  question,
  setQuestion,
  answer,
  setAnswer,
  options,
  setOptions
}) => {
  const setOption = (i: number) => ({ target }: InputChange) => {
    const newOptions = [...options];
    newOptions[i] = target.value;
    setOptions(newOptions);
  };

  const deleteOption = (i: number) => () => {
    setOptions([...options].splice(i, 1));
  };

  const addOption = (i: number) => () => {
    setOptions([...options, ""]);
  };

  const optionInputs = array.mapWithIndex(options, (i, option) => {
    const handleChange = setOption(i);
    const letter = String.fromCharCode(i + 65);
    return (
      <WrongAnswer
        key={i}
        id={`option-${letter}`}
        value={option}
        label={`Option ${letter}`}
        handleChange={handleChange}
      />
    );
  });

  return (
    <form className="mt-10 flex flex-col w-64 mx-auto">
      <Input
        value={question}
        hook={setQuestion}
        label="Question"
        id="question"
        className="mb-6"
      />
      <Input value={answer} hook={setAnswer} label="Answer" id="answer" />
      {optionInputs}
    </form>
  );
};
