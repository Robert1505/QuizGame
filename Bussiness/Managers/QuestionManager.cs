using DataAccess.Entities;
using DataAccess.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bussiness.Managers
{
    public interface IQuestionManager
    {
        Question CreateQuestion(Question question);
        List<Question> GetQuestions();
    }
    public class QuestionManager : IQuestionManager
    {
        private readonly IQuestionRepository _questionRepository;
        public QuestionManager(IQuestionRepository questionRepository)
        {
            _questionRepository = questionRepository;
        }
        public Question CreateQuestion(Question question)
        {
            return _questionRepository.CreateQuestion(question);
        }

        public List<Question> GetQuestions()
        {
            return _questionRepository.GetQuestions();
        }
    }
}
