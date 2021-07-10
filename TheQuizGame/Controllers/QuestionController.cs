using Bussiness.Managers;
using DataAccess.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheQuizGame.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly IQuestionManager _questionManager;
        public QuestionController(IQuestionManager questionManager)
        {
            _questionManager = questionManager;
        }
        [HttpPost]
        [Route("create")]
        public IActionResult CreateQuestion(Question question)
        {
            return Ok(_questionManager.CreateQuestion(question));
        }
        [HttpGet]
        [Route("get")]
        public IActionResult GetQuestions()
        {
            return Ok(_questionManager.GetQuestions());
        }
    }
}
