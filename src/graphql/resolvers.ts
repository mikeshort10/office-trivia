const Question = require("../models/Question");

const resolvers = {
  Query: {
    questions: () => [
      { type: "GENERAL", question: "What?", answer: "obvi", options: [] }
    ]
  },
  Mutation: {
    addQuestion: (parent, args) => {
      const question = new Question({
        type: args.type,
        question: args.question,
        answer: args.answer,
        options: args.options || []
      });
    }
  }
};

export { resolvers };
