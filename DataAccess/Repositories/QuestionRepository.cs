using DataAccess.Context;
using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Repositories
{
    public interface IQuestionRepository
    {
        /// CRUD Operations
        /// Create, Read
        Question CreateQuestion(Question question);
        List<Question> GetQuestions();
    }
    public class QuestionRepository : IQuestionRepository
    {
        private readonly DatabaseContext _context;
        public QuestionRepository(DatabaseContext context)
        {
            _context = context;
        }
        public Question CreateQuestion(Question question)
        {
            _context.Questions.Add(question);
            _context.SaveChanges();
            return question;
        }

        public List<Question> GetQuestions()
        {
            return _context.Questions.Include(x => x.Answers).ToList();
        }
    }
}
