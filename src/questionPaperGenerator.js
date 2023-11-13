// src/questionPaperGenerator.js
const questionStore = require('./questionStore');

module.exports = {
    generateQuestionPaper: (totalMarks, distribution) => {
        const questionPaper = [];
        const allQuestions = questionStore.getAllQuestions();

        for (const [difficulty, percentage] of Object.entries(distribution)) {



            const difficultyQuestions = allQuestions.filter((question) => question.difficulty === difficulty);

            const difficultyMarks = (percentage / 100) * totalMarks;


            if (difficultyQuestions.length === 0) {
                console.log(`No questions for difficulty ${difficulty}`);
            } else {
                // 
                let selectedQuestions = [];
                let totalSelectedQuestionMark = 0;

                while (totalSelectedQuestionMark < difficultyMarks) {
                    const remainingMarks = difficultyMarks - totalSelectedQuestionMark;
                    const remainingQuestions = difficultyQuestions
                        .filter(question => !selectedQuestions.includes(question))
                        .filter(question => question.marks <= remainingMarks);

                    if (remainingQuestions.length === 0) {
                        console.log(`No questions for difficulty ${difficulty}`);
                        break;
                    }
                    // Taking Random Questions From  reaminingQuestions 
                    const newQuestion = remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)];

                    selectedQuestions.push(newQuestion);
                    totalSelectedQuestionMark += newQuestion.marks;
                }

                questionPaper.push(...selectedQuestions);
            }
        }


        return questionPaper;
    },
};