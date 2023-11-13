const questionPaperGenerator = require('./src/questionPaperGenerator');

const totalMarks = 100;
const distribution = {
    Easy: 20,
    Medium: 50,
    Hard: 30,
};

const generatedPaper = questionPaperGenerator.generateQuestionPaper(totalMarks, distribution);
console.log('Generated Question Paper:');
console.log(generatedPaper);